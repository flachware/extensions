$(function() {
  var showOthers = $('.show-others'),
      link = showOthers.find('.show-others-link'),
      otherBrowsers = $('.other-browsers');

  link.click(function(e) {
    e.preventDefault();
    showOthers.fadeOut();
    otherBrowsers.delay(400).slideDown(300);
  });
});