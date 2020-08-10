<?php

function get_acf_fields($post, $field_name, $request)
{
    return get_fields($post['id']);
}

function get_industry_section_terms($post, $field_name, $request)
{
    $terms = wp_get_post_terms($post['id'], 'industry_section');

    // Not necessary
    foreach ($terms as &$term) {
        $term->term_link = get_term_link($term, 'industry_section');
    }

    return $terms;
}

function get_service_provide_terms($post, $field_name, $request)
{
    $terms = wp_get_post_terms($post['id'], 'service_provide');

    return $terms;
}

function get_related_portfolios($post, $field_name, $request)
{
    $industry_section_terms = wp_get_post_terms($post['id'], 'industry_section');
    $industry_section_ids = [];
    foreach ($industry_section_terms as $term) {
        array_push($industry_section_ids, $term->term_id);
    }

    $args = array(
        'numberposts' => 3,
        'offset' => 0,
        'category' => 0,
        'orderby' => 'post_date',
        'order' => 'DESC',
        'include' => '',
        'exclude' => array($post['id']),
        'meta_key' => '',
        'meta_value' => '',
        'post_type' => 'portfolio',
        'post_status' => 'publish',
        'suppress_filters' => true,
    );
    $args['tax_query'] = array(
        array(
            'taxonomy' => "industry_section",
            'field' => 'ID',
            'terms' => $industry_section_ids,
        )
    );
    $recent_news = wp_get_recent_posts($args);


    $count = count($recent_news);
    if ($count < 3) {
        $args2 = array(
            'numberposts' => 3 - $count,
            'offset' => 0,
            'category' => 0,
            'orderby' => 'post_date',
            'order' => 'DESC',
            'include' => '',
            'exclude' => array($post['id']),
            'meta_key' => '',
            'meta_value' => '',
            'post_type' => 'portfolio',
            'post_status' => 'publish',
            'suppress_filters' => true,
        );
        $recent_news2 = wp_get_recent_posts($args2);
        $recent_news = array_merge($recent_news, $recent_news2);
    }

    foreach ($recent_news as &$news) {
        $news['featured_image'] = get_the_post_thumbnail($news['ID'], "card-size");
    }

    return $recent_news;
}

function add_acf_fields_to_api()
{
    // register_rest_field( 'portfolio',
    //     'acf',
    //     array(
    //         'get_callback' => 'get_acf_fields'
    //     )
    // );

    // register_rest_field( 'portfolio',
    //     'industry_section_terms',
    //     array(
    //         'get_callback' => 'get_industry_section_terms'
    //     )
    // );

    // register_rest_field( 'portfolio',
    //     'service_provide_terms',
    //     array(
    //         'get_callback' => 'get_service_provide_terms'
    //     )
    // );

    register_rest_field(
        'portfolio',
        'related_portfolios',
        array(
            'get_callback' => 'get_related_portfolios'
        )
    );
}
add_action('rest_api_init', 'add_acf_fields_to_api');


/////////////////////// BASED ON WP-REST-API-V2-MENU PLUGIN ///////////////////////
/**
 * Get all registered menus
 * @return array List of menus with slug and description
 */
function md_wp_api_menus_get_all_menus()
{
    $menus = get_terms('nav_menu', array('hide_empty' => true));

    foreach ($menus as $key => $menu) {
        // Add items
        $menus[$key]->items = md_wp_api_menus_get_menu_items($menu->slug);

        // check if there is acf installed
        if (class_exists('acf')) {
            $fields = get_fields($menu);
            if (!empty($fields)) {
                foreach ($fields as $field_key => $item) {
                    // add all acf custom fields
                    $menus[$key]->$field_key = $item;
                }
            }
        }
    }

    return $menus;
}

/**
 * Check if a menu item is child of one of the menu's element passed as reference
 *
 * @param $parents Menu's items
 * @param $child Menu's item to check
 *
 * @return bool True if the parent is found, false otherwise
 */
function md_wp_api_menus_dna_test(&$parents, $child)
{
    foreach ($parents as $key => $item) {
        if ($child->menu_item_parent == $item->ID) {
            if (!$item->child_items) {
                $item->child_items = [];
            }
            array_push($item->child_items, $child);
            return true;
        }

        if ($item->child_items) {
            if (md_wp_api_menus_dna_test($item->child_items, $child)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Retrieve items for a specific menu
 *
 * @param $id Menu id
 *
 * @return array List of menu items
 */
function md_wp_api_menus_get_menu_items($id)
{
    $menu_items = wp_get_nav_menu_items($id);

    // check if there is acf installed
    if (class_exists('acf')) {
        foreach ($menu_items as $menu_key => $menu_item) {
            $fields = get_fields($menu_item->ID);
            if (!empty($fields)) {
                foreach ($fields as $field_key => $item) {
                    // add all acf custom fields
                    $menu_items[$menu_key]->$field_key = $item;
                }
            }
        }
    }

    // wordpress does not group child menu items with parent menu items
    $child_items = [];
    // pull all child menu items into separate object
    foreach ($menu_items as $key => $item) {

        if ($item->type == 'post_type') {
            // add slug to menu items
            $slug = basename(get_permalink($item->object_id));
            $item->slug = $slug;
        } else if ($item->type == 'taxonomy') {
            $cat = get_term($item->object_id);
            $item->slug = $cat->slug;
        } else if ($item->type == 'post_type_archive') {
            $post_type_data = get_post_type_object($item->object);

            if ($post_type_data->has_archive) {
                $item->slug = $post_type_data->rewrite['slug'];
            }
        }

        if (isset($item->thumbnail_id) && $item->thumbnail_id) {
            $item->thumbnail_src = wp_get_attachment_image_url(intval($item->thumbnail_id), 'post-thumbnail');
        }
        if (isset($item->thumbnail_hover_id) && $item->thumbnail_hover_id) {
            $item->thumbnail_hover_src = wp_get_attachment_image_url(intval($item->thumbnail_hover_id), 'post-thumbnail');
        }

        if ($item->menu_item_parent) {
            array_push($child_items, $item);
            unset($menu_items[$key]);
        }
    }

    // push child items into their parent item in the original object
    do {
        foreach ($child_items as $key => $child_item) {
            if (md_wp_api_menus_dna_test($menu_items, $child_item)) {
                unset($child_items[$key]);
            }
        }
    } while (count($child_items));

    return array_values($menu_items);
}

add_action('rest_api_init', function () {
    register_rest_route('menus', '/all', array(
        'methods'  => 'GET',
        'callback' => 'md_wp_api_menus_get_all_menus',
    ));
});
