$(function() {
  var showOthers = $('.show-others'),
      link = showOthers.find('.show-others-link'),
      otherBrowsers = $('.other-browsers');

  link.click(function(e) {
    e.preventDefault();
    this.remove();
    otherBrowsers.slideDown();
  });
});