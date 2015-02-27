//= require jquery-2.1.1.min
//= require jstree.min
//= require underscore.min
//= require moment
//= require clndr.min

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

  $('.calendar-container').clndr({
    template: $('#calendar').html()
  });
});
