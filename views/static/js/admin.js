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
