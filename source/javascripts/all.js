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

  $(document).on("click", ".menu-toggle", function() {
    var sidebar = $("#sidebar");
    var content = $(".content");
    sidebar.toggleClass("show-nav");
    content.toggleClass("show-nav")
  });

  var calendar = $('.calendar-container').clndr({
    template: $('#calendar').html(),
    clickEvents: {
      // fired whenever a calendar box is clicked.
      // returns a 'target' object containing the DOM element, any events, and the date as a moment.js object.
      click: function(target){ },
      // fired when a user goes forward a month. returns a moment.js object set to the correct month.
      nextMonth: function(month){
        calendar.forward();
      },
      // fired when a user goes back a month. returns a moment.js object set to the correct month.
      previousMonth: function(month){
        calendar.back();
      },
      // fired when a user goes back OR forward a month. returns a moment.js object set to the correct month.
      onMonthChange: function(month){
        console.log(month);
      },
      // fired when a user goes to the current month/year. returns a moment.js object set to the correct month.
      today: function(month){ }
    },
    adjacentDaysChangeMonth: true,
    events: [
      { date: moment("2015-03-03").format("MM-DD-YY"),
        name: "Coaching",
        location: "The diamond"
      },
      { date: moment("2015-03-06").format("MM-DD-YY"),
        name: "Practicing Duck Call",
        location: "Wherever I want"
      },
    ]
  });
});
