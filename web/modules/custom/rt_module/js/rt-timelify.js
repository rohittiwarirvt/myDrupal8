(function ($, Drupal) {
  Drupal.behaviors.rtmoduleTimelifyjs = {
    attach: function (context, settings) {
      $('.timeline').timelify({
        animLeft: "fadeInLeft",
        animCenter: "fadeInUp",
        animRight: "fadeInRight",
        animSpeed: 600,
        offset: 150
      });
    }
  };
})(jQuery, Drupal);