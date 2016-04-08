$(document).delegate("#page1-next", "click", function() {
  var twitchname = $("#page1-twitchname").val();

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
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  }
  else {
    Materialize.toast("Please make sure to complete all questions!", 4000);
  }
});

$(document).ready(function() {

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  $("#ama-streamer-partner-yes").change(function() {
    $("#ama-streamer-twitch-partner-time").slideDown();
    $("#ama-streamer-twitch-partner-time-input").slideDown();
  });
  $("#ama-streamer-partner-no").change(function() {
    $("#ama-streamer-twitch-partner-time").slideUp();
    $("#ama-streamer-twitch-partner-time-input").slideUp();
  });

  $("#ama-business-tos-yes").change(function() {
    $("#ama-business-product-tos").slideDown();
    $("#ama-business-product-tos-input").slideDown();
  });
  $("#ama-business-tos-no").change(function() {
    $("#ama-business-product-tos").slideUp();
    $("#ama-business-product-tos-input").slideUp();
  });

  $("#web_tool-api-yes").change(function() {
    $("#web_tool-api1").slideDown();
    $("#web_tool-api1-input").slideDown();
    $("#web_tool-api1-br").slideDown();
    $("#web_tool-api2").slideDown();
    $("#web_tool-api2-input").slideDown();
    $("#web_tool-api2-br").slideDown();
    $("#web_tool-api3").slideDown();
    $("#web_tool-api3-input").slideDown();
    $("#web_tool-api3-br").slideDown();
  });
  $("#web_tool-api-no").change(function() {
    $("#web_tool-api1").slideUp();
    $("#web_tool-api1-input").slideUp();
    $("#web_tool-api1-br").slideUp();
    $("#web_tool-api2").slideUp();
    $("#web_tool-api2-input").slideUp();
    $("#web_tool-api2-br").slideUp();
    $("#web_tool-api3").slideUp();
    $("#web_tool-api3-input").slideUp();
    $("#web_tool-api3-br").slideUp();
  });
  $("#web_tool-tos-yes").change(function() {
    $("#web_tool-service-tos").slideDown();
    $("#web_tool-service-tos-input").slideDown();
  });
  $("#web_tool-tos-no").change(function() {
    $("#web_tool-service-tos").slideUp();
    $("#web_tool-service-tos-input").slideUp();
  });
  $("#web_tool-code-yes").change(function() {
    $("#web_tool-open-code").slideDown();
    $("#web_tool-open-code-input").slideDown();
  });
  $("#web_tool-code-no").change(function() {
    $("#web_tool-open-code").slideUp();
    $("#web_tool-open-code-input").slideUp();
  });
  $("#web_tool-beta-yes").change(function() {
    $("#web_tool-beta-change").slideDown();
    $("#web_tool-beta-change-input").slideDown();
  });
  $("#web_tool-beta-no").change(function() {
    $("#web_tool-beta-change").slideUp();
    $("#web_tool-beta-change-input").slideUp();
  });

  $("#desktop_tool-api-yes").change(function() {
    $("#desktop_tool-api1").slideDown();
    $("#desktop_tool-api1-input").slideDown();
    $("#desktop_tool-api1-br").slideDown();
    $("#desktop_tool-api2").slideDown();
    $("#desktop_tool-api2-input").slideDown();
    $("#desktop_tool-api2-br").slideDown();
    $("#desktop_tool-api3").slideDown();
    $("#desktop_tool-api3-input").slideDown();
    $("#desktop_tool-api3-br").slideDown();
  });
  $("#desktop_tool-api-no").change(function() {
    $("#desktop_tool-api1").slideUp();
    $("#desktop_tool-api1-input").slideUp();
    $("#desktop_tool-api1-br").slideUp();
    $("#desktop_tool-api2").slideUp();
    $("#desktop_tool-api2-input").slideUp();
    $("#desktop_tool-api2-br").slideUp();
    $("#desktop_tool-api3").slideUp();
    $("#desktop_tool-api3-input").slideUp();
    $("#desktop_tool-api3-br").slideUp();
  });
  $("#desktop_tool-tos-yes").change(function() {
    $("#desktop_tool-service-tos").slideDown();
    $("#desktop_tool-service-tos-input").slideDown();
  });
  $("#desktop_tool-tos-no").change(function() {
    $("#desktop_tool-service-tos").slideUp();
    $("#desktop_tool-service-tos-input").slideUp();
  });
  $("#desktop_tool-code-yes").change(function() {
    $("#desktop_tool-open-code").slideDown();
    $("#desktop_tool-open-code-input").slideDown();
  });
  $("#desktop_tool-code-no").change(function() {
    $("#desktop_tool-open-code").slideUp();
    $("#desktop_tool-open-code-input").slideUp();
  });
  $("#desktop_tool-beta-yes").change(function() {
    $("#desktop_tool-beta-change").slideDown();
    $("#desktop_tool-beta-change-input").slideDown();
  });
  $("#desktop_tool-beta-no").change(function() {
    $("#desktop_tool-beta-change").slideUp();
    $("#desktop_tool-beta-change-input").slideUp();
  });

  $("#video-submit").click(function() {
    var twitchname = getUrlParameter("twitchname"),
        url = $("#video-url").val(),
        description = $("#video-description").val();
    var owner;
    if ($('#video-owner-yes').is(':checked')) { owner = "Yes"; }
    else if ($('#video-owner-no').is(':checked')) { owner = "No"; }

    if (url !== "" && description !== "" && owner !== undefined) {
      var requestdata = {
        url: url,
        owner: owner,
        description: description
      },
          id = Math.floor(Math.random() * 99999) + 10000,
          redditname = $(this).data("username"),
          type = "video",
          yesvotes = [],
          novotes = [],
          open = true,
          approved = false;

      $.post("/submit_request/", {
        id: id,
        redditname: redditname,
        twitchname: twitchname,
        type: type,
        yesvotes: yesvotes,
        novotes: novotes,
        open: open,
        approved: approved,
        requestdata: requestdata
      });
      window.location.href = '/success/';
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  });

  $("#web_tool-submit").click(function() {
    var twitchname = getUrlParameter("twitchname"),
        name = $("#web_tool-name").val(),
        url = $("#web_tool-url").val(),
        description = $("#web_tool-description").val(),
        data = $("#web_tool-data").val();

    var api;
    if ($('#web_tool-api-yes').is(':checked')) { api = "Yes"; }
    else if ($('#web_tool-api-no').is(':checked')) { api = "No"; }

    if (api == "Yes") {
      var apidata = $("#web_tool-apidata").val(),
          scopes = $("#web_tool-scopes").val(),
          scopesdescription = $("#web_tool-scopesdescription").val();

      if (apidata === "" && scopes === "" && scopesdescription === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    var tos;
    if ($('#web_tool-tos-yes').is(':checked')) {
      tos = "Yes";
    }
    else if ($('#web_tool-tos-no').is(':checked')) {
      tos = "No";
    }

    if (tos == "Yes") {
      var toslink = $("#web_tool-tos").val();

      if (toslink === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    var code;
    if ($('#web_tool-code-yes').is(':checked')) { code = "Yes"; }
    else if ($('#web_tool-code-no').is(':checked')) { code = "No"; }

    if (code == "Yes") {
      var codelink = $("#web_tool-code").val();

      if (codelink === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    var beta;
    if ($('#web_tool-beta-yes').is(':checked')) { beta = "Yes"; }
    else if ($('#web_tool-beta-no').is(':checked')) { beta = "No"; }

    if (beta == "Yes") {
      var betachanges = $("#web_tool-beta").val();

      if (betachanges === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    if (name !== "" && url !== "" && description !== "" && data !== "" && api !== undefined && tos !== undefined && beta !== undefined) {
      var requestdata = {
        name: name,
        url: url,
        description: description,
        data: data,
        api: api,
        tos: tos,
        beta: beta,
        apidata: apidata,
        scopes: scopes,
        scopesdescription: scopesdescription,
        toslink: toslink,
        codelink: codelink,
        betachanges: betachanges
      },
          id = Math.floor(Math.random() * 99999) + 10000,
          redditname = $(this).data("username"),
          type = "web_tool",
          yesvotes = [],
          novotes = [],
          open = true,
          approved = false;

      $.post("/submit_request/", {
        id: id,
        redditname: redditname,
        twitchname: twitchname,
        type: type,
        yesvotes: yesvotes,
        novotes: novotes,
        open: open,
        approved: approved,
        requestdata: requestdata
      });
      window.location.href = '/success/';
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  });

  $("#desktop_tool-submit").click(function() {
    var twitchname = getUrlParameter("twitchname"),
        name = $("#desktop_tool-name").val(),
        url = $("#desktop_tool-url").val(),
        description = $("#desktop_tool-description").val(),
        data = $("#desktop_tool-data").val();

    var api;
    if ($('#desktop_tool-api-yes').is(':checked')) { api = "Yes"; }
    else if ($('#desktop_tool-api-no').is(':checked')) { api = "No"; }

    if (api == "Yes") {
      var apidata = $("#desktop_tool-apidata").val(),
          scopes = $("#desktop_tool-scopes").val(),
          scopesdescription = $("#desktop_tool-scopesdescription").val();

      if (apidata === "" && scopes === "" && scopesdescription === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    var tos;
    if ($('#desktop_tool-tos-yes').is(':checked')) { tos = "Yes"; }
    else if ($('#desktop_tool-tos-no').is(':checked')) { tos = "No"; }

    if (tos == "Yes") {
      var toslink = $("#desktop_tool-tos").val();

      if (toslink === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    var code;
    if ($('#desktop_tool-code-yes').is(':checked')) { code = "Yes"; }
    else if ($('#desktop_tool-code-no').is(':checked')) { code = "No"; }

    if (code == "Yes") {
      var codelink = $("#desktop_tool-code").val();

      if (codelink === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    var beta;
    if ($('#desktop_tool-beta-yes').is(':checked')) { beta = "Yes"; }
    else if ($('#desktop_tool-beta-no').is(':checked')) { beta = "No"; }

    if (beta == "Yes") {
      var betachanges = $("#desktop_tool-beta").val();

      if (betachanges === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    if (name !== "" && url !== "" && description !== "" && data !== "" && api !== undefined && tos !== undefined && beta !== undefined) {
      var requestdata = {
        name: name,
        url: url,
        description: description,
        data: data,
        api: api,
        tos: tos,
        beta: beta,
        apidata: apidata,
        scopes: scopes,
        scopesdescription: scopesdescription,
        toslink: toslink,
        codelink: codelink,
        betachanges: betachanges
      },
          id = Math.floor(Math.random() * 99999) + 10000,
          redditname = $(this).data("username"),
          type = "desktop_tool",
          yesvotes = [],
          novotes = [],
          open = true,
          approved = false;

      $.post("/submit_request/", {
        id: id,
        redditname: redditname,
        twitchname: twitchname,
        type: type,
        yesvotes: yesvotes,
        novotes: novotes,
        open: open,
        approved: approved,
        requestdata: requestdata
      });
      window.location.href = '/success/';
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  });

  $("#ama-streamer-submit").click(function() {
    var twitchname = getUrlParameter("twitchname"),
        viewers = $("#ama-streamer-viewers").val(),
        start = $("#ama-streamer-start").val(),
        length = $("#ama-streamer-length").val();

    var partner;
    if ($('#ama-streamer-partner-yes').is(':checked')) { partner = "Yes"; }
    else if ($('#ama-streamer-partner-no').is(':checked')) { partner = "No"; }

    if (partner == "Yes") {
      var partnertime = $("#ama-streamer-partner-time").val();

      if (partnertime === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    if (viewers !== "" && start !== "" && length !== "" && partner !== undefined) {
      var requestdata = {
        viewers: viewers,
        start: start,
        length: length,
        partner: partner,
        partnertime: partnertime
      },
          id = Math.floor(Math.random() * 99999) + 10000,
          redditname = $(this).data("username"),
          type = "ama_streamer",
          yesvotes = [],
          novotes = [],
          open = true,
          approved = false;

      $.post("/submit_request/", {
        id: id,
        redditname: redditname,
        twitchname: twitchname,
        type: type,
        yesvotes: yesvotes,
        novotes: novotes,
        open: open,
        approved: approved,
        requestdata: requestdata
      });
      window.location.href = '/success/';
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  });

  $("#ama-business-submit").click(function() {
    var twitchname = getUrlParameter("twitchname"),
        name = $("#ama-business-name").val(),
        productname = $("#ama-business-product-name").val(),
        userdata = $("#ama-business-data").val(),
        start = $("#ama-business-start").val(),
        length = $("#ama-business-length").val();

    var permission;
    if ($('#ama-business-permission-yes').is(':checked')) { permission = "Yes"; }
    else if ($('#ama-business-permission-no').is(':checked')) { permission = "No"; }

    var tos;
    if ($('#ama-business-tos-yes').is(':checked')) { tos = "Yes"; }
    else if ($('#ama-business-tos-no').is(':checked')) { tos = "No"; }

    if (tos == "Yes") {
      var toslink = $("#ama-streamer-partner-time").val();

      if (toslink === "") {
        Materialize.toast("Please make sure to complete all questions!", 4000);
        return;
      }
    }

    if (name !== "" && productname !== "" && start !== "" && userdata !== "" && length !== "" && permission !== undefined && tos !== undefined) {
      var requestdata = {
        name: name,
        productname: productname,
        userdata: userdata,
        start: start,
        length: length,
        permission: permission,
        tos: tos,
        toslink: toslink,
      },
          id = Math.floor(Math.random() * 99999) + 10000,
          redditname = $(this).data("username"),
          type = "ama_business",
          yesvotes = [],
          novotes = [],
          open = true,
          approved = false;

      $.post("/submit_request/", {
        id: id,
        redditname: redditname,
        twitchname: twitchname,
        type: type,
        yesvotes: yesvotes,
        novotes: novotes,
        open: open,
        approved: approved,
        requestdata: requestdata
      });
      window.location.href = '/success/';
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  });

  $("#other-submit").click(function() {
    var twitchname = getUrlParameter("twitchname"),
        description = $("#other-description").val();

    if (description !== "") {
      var requestdata = {
        description: description
      },
          id = Math.floor(Math.random() * 99999) + 10000,
          redditname = $(this).data("username"),
          type = "other",
          yesvotes = [],
          novotes = [],
          open = true,
          approved = false;

      $.post("/submit_request/", {
        id: id,
        redditname: redditname,
        twitchname: twitchname,
        type: type,
        yesvotes: yesvotes,
        novotes: novotes,
        open: open,
        approved: approved,
        requestdata: requestdata
      });
      window.location.href = '/success/';
    }
    else {
      Materialize.toast("Please make sure to complete all questions!", 4000);
    }
  });
});
