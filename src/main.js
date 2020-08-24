import BootstrapVue from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import DefaultLayout from '~/layouts/Default.vue'
import MenuItem from '~/components/MenuItem.vue'
import LoadScript from 'vue-plugin-load-script';
import _ from 'lodash'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.use(BootstrapVue)
    Vue.use(VueFormulate)
    Vue.use(LoadScript)
    
    Vue.component('Layout', DefaultLayout)
    Vue.component('MenuItem', MenuItem)

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,600i,700,700i,800,900&display=swap'
    });
    head.link.push({
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css',
    });
    head.link.push({
        rel: 'stylesheet',
        href: 'https://cw.marameodesign.com/wp-content/themes/generatepress_child/style.css',
    });
}

import '~/css/maxmegamenu/style.css'