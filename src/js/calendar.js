
jQuery.ajax({
  url: 'https://assets.calendly.com/assets/external/widget.js',
  dataType: 'script',
  cache: true, // or get new, fresh copy on every page load
  success: function() {
    // Callback
  }
})