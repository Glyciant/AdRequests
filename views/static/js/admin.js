$(document).ready(function(){
  $('.modal-trigger').leanModal();
});

$(document).delegate("#mail-tags-post", "click", function() {
  var id = $(this).data('id');
  var username = $(this).data('user');
  var comment = $('#add-comment-' + id).val();
  $.ajax({
    url: '/data/update-comments',
    type: "POST",
    data: {
      id: id,
      comment: comment
    },
    success: function(data) {
      $('#comment-' + id + '-' + username).text(data.comments[data.username]);
    }
  });
});

$(document).delegate("#vote-approve", "click", function() {
   var id = $(this).data("id"),
       user = $(this).data("user")

   $.post("/admin/vote/approve/", {
     id: id,
     user: user
   })
   Materialize.toast("Your vote has been registered.", 4000)
});

$(document).delegate("#vote-reject", "click", function() {
   var id = $(this).data("id"),
       user = $(this).data("user")

   $.post("/admin/vote/reject/", {
     id: id,
     user: user
   })
   Materialize.toast("Your vote has been registered.", 4000)
});

$(document).delegate("#delete-request", "click", function() {
   var id = $(this).data("id"),
       user = $(this).data("user")

   $.post("/admin/delete/", {
     id: id
   })
   Materialize.toast("Request deleted.", 4000)
});

$(document).delegate("#change-approved", "click", function() {
   var id = $(this).data("id"),
       status = $(this).data("status");

   if (status == "Pending") {
     var approved = "Approved";
   }
   else if (status == "Approved") {
     var approved = "Rejected";
   }
   else {
     var approved = "Pending";
   }

   $(this).data("status", approved);
   $("#approved-" + id).html(approved)

   $.post("/admin/approved/", {
     id: id,
     approved: approved
   })
});

$(document).delegate("#change-status", "click", function() {
   var id = $(this).data("id"),
       status = $(this).data("status");

   if (status === true) {
     var open = false;
     $(this).data("status", open);
     $("#status-" + id).html("Closed")
   }
   else {
     var open = true;
     $(this).data("status", open);
     $("#status-" + id).html("Open")
   }

   $.post("/admin/status/", {
     id: id,
     status: open
   })
});

$('#hide-closed').click(function() {
  $(".request-closed").toggle(!(this.checked));
});

$(document).delegate("#search-reddit", "change", function() {
  var query = $(this).val().toLowerCase()
  if (query !== "") {
    $("#request-wrapper div:not([data-redditname*='"+ query +"'])[id*='request']").hide()
  }
})

$(document).delegate("#search-twitch", "change", function() {
  var query = $(this).val().toLowerCase()
  if (query !== "") {
    $("#request-wrapper div:not([data-twitchname*='"+ query +"'])[id*='request']").hide()
  }
})

$(document).delegate("#search-approved", "change", function() {
  var query = $(this).val().toLowerCase()
  if (query !== "") {
    $("#request-wrapper div:not([data-approved*='"+ query +"'])[id*='request']").hide()
  }
})

$(document).delegate("#search-status", "change", function() {
  var query = $(this).val().toLowerCase()
  if (query == "open") {
    var query2 = true;
  }
  else if (query == "closed") {
    var query2 = false;
  }
  if (query !== "") {
    $("#request-wrapper div:not([data-status*='"+ query2 +"'])[id*='request']").hide()
  }
})

$(document).delegate("#search-type", "change", function() {
  var query = $(this).val().toLowerCase().replace(" ", "_").replace("(", "").replace(")", "")
  if (query !== "") {
    $("#request-wrapper div:not([data-type*='"+ query +"'])[id*='request']").hide()
  }
})

$(document).delegate("#search-all", "click", function() {
  $("#request-wrapper div[id*='request']").show()
  $("#search-reddit").val("");
  $("#search-twitch").val("");
  $("#search-approved").val("Search Approval");
  $("#search-status").val("Search Status");
  $("#search-type").val("Search Type");
})
