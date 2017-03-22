var findCelcius = function(number1) {
  return ((number1 - 32) / 1.8).toFixed(2);
};


$(document).ready(function(){
  $("#FToC").submit(function(event){
    var number1 = parseInt($("#FToC1").val());
    var result = findCelcius(number1);
    $("#outputFToC").text(result);
    event.preventDefault();
  });


});
