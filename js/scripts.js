$(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    var color = $("#color").val();
    var music = $("#music").val();
    var food = $("input:radio[name=food]:checked").val();

    $(".modal-content").css("background-color", color);

    $(".color").text("Your color in hex:" + color);
    $(".music").text(music);
    $(".food").text(food);
    $("#modal").show();

  });



});
