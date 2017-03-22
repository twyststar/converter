var findCelcius = function(number1) {
  return ((number1 - 32) / 1.8).toFixed(2);
};
var findFahrenheit = function(number1) {
  return ((number1 * 1.8)  + 32).toFixed(2);
};
var findKilometers = function(number1) {
  return (number1 * 1.6).toFixed(2);
};
var findMiles = function(number1) {
  return (number1 / 1.6).toFixed(2);
};

$(document).ready(function(){
  $("#FToC").submit(function(event){
    var number1 = parseInt($("#FToC1").val());
    var result = findCelcius(number1);
    $("#outputFToC").text(result);
    event.preventDefault();
  });
  $("#CToF").submit(function(event){
    var number1 = parseInt($("#CToF1").val());
    var result = findFahrenheit(number1);
    $("#outputCToF").text(result);
    event.preventDefault();
  });
  $("#MToK").submit(function(event){
    var number1 = parseInt($("#MToK1").val());
    var result = findKilometers(number1);
    $("#outputMToK").text(result);
    event.preventDefault();
  });
  $("#KToM").submit(function(event){
    var number1 = parseInt($("#KToM1").val());
    var result = findMiles(number1);
    $("#outputKToM").text(result);
    event.preventDefault();
  });
});
