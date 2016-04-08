$(document).ready(function(){
  $('.modal-trigger').leanModal();
});

$('#mail-tags-post').on('click', function() {
  var id = $('#mail-tags-post').data('id');
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
