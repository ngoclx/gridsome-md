import BootstrapVue from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import DefaultLayout from '~/layouts/Default.vue'
import MenuItem from '~/components/MenuItem.vue'
import LoadScript from 'vue-plugin-load-script';
import _ from 'lodash'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.use(BootstrapVue)
    Vue.use(VueFormulate)
    Vue.use(LoadScript)

    Vue.component('Layout', DefaultLayout)
    Vue.component('MenuItem', MenuItem)

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito&display=swap'
    });
    head.link.push({
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css',
    });
    // head.link.push({
    //     rel: 'stylesheet',
    //     href: 'https://cw.marameodesign.com/wp-content/themes/generatepress_child/style.css',
    // });
}

import '~/style.css'
import '~/assets/css/wp.css'
import '~/assets/css/maxmegamenu/style.css'