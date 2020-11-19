(function ($, Drupal) {
  Drupal.behaviors.rtmoduleMasonryJs = {
    attach: function (context, settings) {
      // masonry-wrapper-newjoiners
      $('.masonry-wrapper-newjoiners', context).masonry({
        // options
        itemSelector: '.masonry-joiner-wrapper',
      });

      setTimeout(function() {
        $('.masonry-wrapper-newjoiners', context).masonry({
          // options
          itemSelector: '.masonry-joiner-wrapper',
        });
        console.log("2000");
      }, 2000);
    }
  };
})(jQuery, Drupal);
