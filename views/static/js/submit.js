$(document).delegate("#page1-next", "click", function() {
  var twitchname = $("#page1-twitchname").val(),

  if ($('#type-video').is(':checked')) {
    $.post('/submit-next/video', {
      twitchname: twitchname
    });
  }
})
