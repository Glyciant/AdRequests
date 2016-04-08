$(document).ready(function(){
  $('.modal-trigger').leanModal();
});

$(document).delegate("#vote-approve", "click", function() {
  var id = $(this).data("id"),
      user = $(this).data("user")

  $.post("/admin/vote/approve/", {
    id: id,
    user: user
  })
  Materialize.toast("Your vote of approval for " + user + "\'s request was registered.", 4000)
});

$(document).delegate("#vote-reject", "click", function() {
  var id = $(this).data("id"),
      user = $(this).data("user")

  $.post("/admin/vote/reject/", {
    id: id,
    user: user
  })
  Materialize.toast("Your vote of rejection for " + user + "\'s request was registered.", 4000)
});

$(document).delegate("#delete-request", "click", function() {
  var id = $(this).data("id"),
      user = $(this).data("user")

  $.post("/admin/delete/", {
    id: id
  })
  Materialize.toast("Request deleted.", 4000)
});
