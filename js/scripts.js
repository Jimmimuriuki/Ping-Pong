//business logic
var myNumber = function(countUp) {
var result = [];
for (var i=1; i<=countUp; i ++) {
          if (i % 15 === 0) {
          result.push ('pingpong');
          }else if (i % 5 === 0) {
          result.push ('pong');
          }else if (i % 3 === 0) {
          result.push ('ping');
        }else {
          result.push (i);
        }

}

return result;
};

//user-interface logic
$(document).ready(function() {
  $("form#pingform").submit(function(event) {
     event.preventDefault();
    $("#pingpongresult").empty();
    var countUp = parseInt($("input#countUp").val());
    var output = myNumber(countUp);
    var result = [];


    output.forEach(function(myNumber) {
      console.log(myNumber);
   $("#pingpongresult").append('<li>' + myNumber + '</li>');
   });


 });
});
