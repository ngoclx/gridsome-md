// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import $ from 'jquery'
// import jQuery from 'jquery'

// import 'bootstrap/dist/css/bootstrap.min.css'
//import '~/css/maxmegamenu/style.css'
//import '~/style.css'

// { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js", async: true, defer: true },
// { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", async: true, defer: true },
// { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", async: true, defer: true },
// import 'https://code.jquery.com/jquery-3.2.1.slim.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'

// import 'bootstrap'
// import '~/js/calendar.js'

// import 'jquery/dist/jquery.slim.min.js'
// import 'popper.js/dist/popper.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import jQuery from 'jquery'
// import Popper from 'popper.js'
// global.jQuery = jQuery;
// global.Popper = Popper;

import BootstrapVue from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import DefaultLayout from '~/layouts/Default.vue'
import MenuItem from '~/components/MenuItem.vue'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.use(BootstrapVue)
    Vue.use(VueFormulate)

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