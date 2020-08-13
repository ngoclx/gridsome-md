// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import $ from 'jquery'
// import jQuery from 'jquery'

// import 'bootstrap/dist/css/bootstrap.min.css'
import '~/css/maxmegamenu/style.css'
import '~/style.css'

// import 'bootstrap'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import '~/js/calendar.js'

import BootstrapVue from 'bootstrap-vue'




import DefaultLayout from '~/layouts/Default.vue'
import MenuItem from '~/components/MenuItem.vue'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.use(BootstrapVue)
    Vue.component('Layout', DefaultLayout)
    Vue.component('MenuItem', MenuItem)
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,600i,700,700i,800,900&display=swap'
    })
}