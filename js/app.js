// // Create list item when clicking the add button
/*$("#add-button").click(function () {

  var inputValue = $("#add-input").val();

  if (inputValue === '') {
    alert("You gotta type in something!");
  } else {
    $("#list-holder").append("<li>" + inputValue + "</li>");
    inputValue = '';
  }

});

$("#add-input").keypress(function (e) {

  var inputValue = $("#add-input").val();

  if (e.which == 13 && inputValue === '') {
    alert("You gotta type in something!");
  } else if (e.which == 13){
    $("#list-holder").append("<li>" + inputValue + "</li>");
    inputValue = '';
  }

});*/

function submit() {

  var inputValue = $("#add-input").val();
  if (inputValue === '') {
    alert("You gotta type in something!");
  } else {
    $("#list-holder").append("<li>" + inputValue + "</li>");
    $("#add-input").val('');
  }
}

$("#add-button").on("click", submit);
$("#add-input").keypress(function (e) {
  if (e.which == 13) {
    submit()
  }
});
