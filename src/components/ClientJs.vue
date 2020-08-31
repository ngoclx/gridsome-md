<template>
  <span class="custom-jquery"></span>
</template>

<script>

export default {
    name: 'ClientJs',
    metaInfo: {
        script: [
        ]
    },
    created() {
        // Load external scripts for clients
        this.$loadScript("https://code.jquery.com/jquery-3.5.1.min.js").then(() => {
            this.$loadScript("https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js")
            this.$loadScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js")
            this.$loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
            this.$loadScript("https://cw.marameodesign.com/wp-content/themes/generatepress_child/js/main.js")
            //this.$loadScript("http://mmd.local/wp-content/themes/generatepress_child/js/main.js")
        })
    }
}
</script>
