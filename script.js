(function ($) {

  $(window).on('resize', function () {
    var win = $(this); //this = window
    if (win.width() > 768) {
      if (!$('.container-vertical').length) {
        $(".inner").wrapAll("<div class='container-vertical' />");
      }
    }

    if (win.width() <= 768) {
      if ($('.container-vertical').length) {
        $(".container-vertical").contents().unwrap();
      }
    }
  });

})(jQuery);
