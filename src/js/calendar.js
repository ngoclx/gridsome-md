<script type="text/javascript">

    var app = {
        init: function() {
            window.addEventListener('scroll', function() {
                if (window.__he == undefined) {
                    app.load();
                }
            });
            window.addEventListener('mousemove', function() {
                if (window.__he == undefined) {
                    app.load();
                }
            });
        },
        load: function() {
            var script = document.createElement('script');
            script.src = '//assets.calendly.com/assets/external/widget.js';
            script.defer = true;
            document.getElementById('calendar-lib').appendChild(script);
            script.onload = function() {
                window['__he'] = true;
            }
            window['__he'] = true;
        }
    };
    
    app.init(); 

</script>