$(document).ready(function() {
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
    
      const burger_id = $(this).children(".burger_id").val();
      $.ajax({
        method: "PUT",
        url: `/burgers/update/${burger_id}`
      }).then(function(data) {
        // reload page to update the devoured burger to the right column
        location.reload();
      });
    });
  });
  