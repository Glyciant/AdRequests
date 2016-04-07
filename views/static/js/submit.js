$(document).delegate("#page1-next", "click", function() {
  var twitchname = $("#page1-twitchname").val()

  console.log("test", twitchname, typeof(twitchname))

  if (twitchname !== "") {
    if ($('#type-video').is(':checked')) {
      window.location.href = '/submit/video?twitchname='+twitchname;
    }
    else if ($('#type-web_tool').is(':checked')) {
      window.location.href = '/submit/web_tool?twitchname='+twitchname;
    }
    else if ($('#type-desktop_tool').is(':checked')) {
      window.location.href = '/submit/desktop_tool?twitchname='+twitchname;
    }
    else if ($('#type-ama-streamer').is(':checked')) {
      window.location.href = '/submit/ama/streamer?twitchname='+twitchname;
    }
    else if ($('#type-ama-business').is(':checked')) {
      window.location.href = '/submit/ama/business?twitchname='+twitchname;
    }
    else if ($('#type-other').is(':checked')) {
      window.location.href = '/submit/other?twitchname='+twitchname;
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000)
    }
  }
  else {
    Materialize.toast("Please make sure to complete all questions!", 4000)
  }
})

$(document).ready(function() {
  $("#ama-streamer-partner-yes").change(function() {
    $("#ama-streamer-twitch-partner-time").slideDown()
    $("#ama-streamer-twitch-partner-time-input").slideDown()
  })
  $("#ama-streamer-partner-no").change(function() {
    $("#ama-streamer-twitch-partner-time").slideUp()
    $("#ama-streamer-twitch-partner-time-input").slideUp()
  })

  $("#ama-business-tos-yes").change(function() {
    $("#ama-business-product-tos").slideDown()
    $("#ama-business-product-tos-input").slideDown()
  })
  $("#ama-business-tos-no").change(function() {
    $("#ama-business-product-tos").slideUp()
    $("#ama-business-product-tos-input").slideUp()
  })

  $("#web_tool-api-yes").change(function() {
    $("#web_tool-api1").slideDown()
    $("#web_tool-api1-input").slideDown()
    $("#web_tool-api1-br").slideDown()
    $("#web_tool-api2").slideDown()
    $("#web_tool-api2-input").slideDown()
    $("#web_tool-api2-br").slideDown()
    $("#web_tool-api3").slideDown()
    $("#web_tool-api3-input").slideDown()
    $("#web_tool-api3-br").slideDown()
  })
  $("#web_tool-api-no").change(function() {
    $("#web_tool-api1").slideUp()
    $("#web_tool-api1-input").slideUp()
    $("#web_tool-api1-br").slideUp()
    $("#web_tool-api2").slideUp()
    $("#web_tool-api2-input").slideUp()
    $("#web_tool-api2-br").slideUp()
    $("#web_tool-api3").slideUp()
    $("#web_tool-api3-input").slideUp()
    $("#web_tool-api3-br").slideUp()
  })
  $("#web_tool-tos-yes").change(function() {
    $("#web_tool-service-tos").slideDown()
    $("#web_tool-service-tos-input").slideDown()
  })
  $("#web_tool-tos-no").change(function() {
    $("#web_tool-service-tos").slideUp()
    $("#web_tool-service-tos-input").slideUp()
  })
  $("#web_tool-code-yes").change(function() {
    $("#web_tool-open-code").slideDown()
    $("#web_tool-open-code-input").slideDown()
  })
  $("#web_tool-code-no").change(function() {
    $("#web_tool-open-code").slideUp()
    $("#web_tool-open-code-input").slideUp()
  })
  $("#web_tool-beta-yes").change(function() {
    $("#web_tool-beta-change").slideDown()
    $("#web_tool-beta-change-input").slideDown()
  })
  $("#web_tool-beta-no").change(function() {
    $("#web_tool-beta-change").slideUp()
    $("#web_tool-beta-change-input").slideUp()
  })

  $("#desktop_tool-api-yes").change(function() {
    $("#desktop_tool-api1").slideDown()
    $("#desktop_tool-api1-input").slideDown()
    $("#desktop_tool-api1-br").slideDown()
    $("#desktop_tool-api2").slideDown()
    $("#desktop_tool-api2-input").slideDown()
    $("#desktop_tool-api2-br").slideDown()
    $("#desktop_tool-api3").slideDown()
    $("#desktop_tool-api3-input").slideDown()
    $("#desktop_tool-api3-br").slideDown()
  })
  $("#desktop_tool-api-no").change(function() {
    $("#desktop_tool-api1").slideUp()
    $("#desktop_tool-api1-input").slideUp()
    $("#desktop_tool-api1-br").slideUp()
    $("#desktop_tool-api2").slideUp()
    $("#desktop_tool-api2-input").slideUp()
    $("#desktop_tool-api2-br").slideUp()
    $("#desktop_tool-api3").slideUp()
    $("#desktop_tool-api3-input").slideUp()
    $("#desktop_tool-api3-br").slideUp()
  })
  $("#desktop_tool-tos-yes").change(function() {
    $("#desktop_tool-service-tos").slideDown()
    $("#desktop_tool-service-tos-input").slideDown()
  })
  $("#desktop_tool-tos-no").change(function() {
    $("#desktop_tool-service-tos").slideUp()
    $("#desktop_tool-service-tos-input").slideUp()
  })
  $("#desktop_tool-code-yes").change(function() {
    $("#desktop_tool-open-code").slideDown()
    $("#desktop_tool-open-code-input").slideDown()
  })
  $("#desktop_tool-code-no").change(function() {
    $("#desktop_tool-open-code").slideUp()
    $("#desktop_tool-open-code-input").slideUp()
  })
  $("#desktop_tool-beta-yes").change(function() {
    $("#desktop_tool-beta-change").slideDown()
    $("#desktop_tool-beta-change-input").slideDown()
  })
  $("#desktop_tool-beta-no").change(function() {
    $("#desktop_tool-beta-change").slideUp()
    $("#desktop_tool-beta-change-input").slideUp()
  })
})
