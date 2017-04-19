/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/
$( document ).ready(function() {
  $("#age").change(function() {
    var ageString = $("#age").val();
    var age = parseInt(ageString);

    if (age >= 21) {
      $("#bar-result").text("YOU CAN HAVE THIS CAR!");
    } else {
      $("#bar-result").te6xt("You're too young, scram.");
    }
  });
});
