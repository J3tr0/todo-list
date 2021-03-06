$(document).ready(function() {
  $("form").on("submit", function() {
    let item = $("form input");
    let todo = { item: item.val() };

    $.ajax({
      type: "POST",
      url: "/",
      data: todo,
      success: function(data) {
        location.reload();
      }
    });
    return false;
  });

  $("li").on("click", function() {
    let item = $(this)
      .text()
      .replace(/ /g, "-");

    $.ajax({
      type: "DELETE",
      url: "/" + item,
      success: function(data) {
        location.reload();
      }
    });
  });
});
