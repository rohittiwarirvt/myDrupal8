(function ($, Drupal) {
  Drupal.behaviors.rtmoduleTimelinerjs = {
    attach: function (context, settings) {
      $.timeliner({
        timelineContainer: '.timeline-wrapper-newjoiners',
        startState: 'open'
			});
    }
  };
})(jQuery, Drupal);