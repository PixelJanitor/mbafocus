//= require_tree .

$(function() {
  $("#treeview").jstree({
    'core' : {
      "themes": {
        "dots": false,
        "icons": false
      },
    }
  });

  $(document).on("click", ".fa-star-o", function() {
    var fullStar = $(this).next(".fa-star");
    $(this).addClass("hide").removeClass("show");
    fullStar.removeClass("hide").addClass("show")
  });

  $(document).on("click", ".fa-star", function() {
    var emptyStar = $(this).prev(".fa-star-o");
    $(this).addClass("hide").removeClass("show");
    emptyStar.removeClass("hide").addClass("show")
  });
});
