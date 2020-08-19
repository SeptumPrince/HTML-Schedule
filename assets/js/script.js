// DEPENDENCIES================================
var currentDay = document.querySelector("#currentDay");

//This function waits for the document to load
$(document).ready(function () {});

// This function gets current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
currentDay.append(today);
// This function gets the current time
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}

var time = [
  00,
  01,
  02,
  03,
  04,
  05,
  06,
  07,
  08,
  09,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

$(".time-block").each(function () {
  var timeRow = $(this);
  var now = myHour();
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);
  if (now === time) {
    $(this).addClass("present");
  }
  if (now > time) {
    $(this).addClass("past");
  }
  if (now < time) {
    $(this).addClass("future");
  }
});

$(".saveBtn").on("click", function () {
  //get nearby values.
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem(time, text);
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
