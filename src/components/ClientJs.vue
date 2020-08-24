<template>
  <span class="custom-jquery"></span>
</template>

<script>

export default {
    name: 'ClientJs',
    metaInfo: {
        script: [
            { src: "https://code.jquery.com/jquery-3.5.1.min.js", async: true, defer: true },
            { src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js", async: true, defer: true },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", async: true, defer: true },
            { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", async: true, defer: true },
            { src: "https://cw.marameodesign.com/wp-content/themes/generatepress_child/js/main.js", async: true, defer: true },
            // { src: "/js/calendar.js", async: true, defer: true },
        ]
    },
}
</script>
