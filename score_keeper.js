var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var defaultVal = 5;
var gameOver = false;
var p1Score = 0;
var p2Score = 0;

// var h1 = document.querySelector("#score");
var p1Disp = document.getElementById("p1Disp");
var p2Disp = document.getElementById("p2Disp");

// var result = p1Score + " to " + p2Score;
// h1.innerHTML = result;
// setInterval(function(){
//   var input = document.getElementById("total");
//   var value = input.value;
//   if(value !== ""){
//     defaultVal = value;
//   var totalResult = "Playing to: " + value;
//   var finalVal = document.getElementById("finalVal");
//   finalVal.innerHTML = totalResult;
//   }
// },500);
var input = document.querySelector("input");
input.addEventListener("change", function(){
    //console.log("input event changed");
    defaultVal = Number(input.value);
    var str = "Playing to: " + defaultVal;
    var finalVal = document.getElementById("finalVal");
    finalVal.innerHTML = str;
    resetGame();
});
//console.log(p1Score + " to " + p2Score);
// while(p1Score !== defaultVal || p2Score != defaultVal){
p1.addEventListener("click", function(){
  if(!gameOver){
  p1Score += 1;
  // var result = p1Score + " to " + p2Score;
  if(p1Score === defaultVal){
    gameOver = true;
    p1Disp.classList.add("winnerDisp");
  }
}
  // h1.innerHTML = updateScore();
  p1Disp.innerHTML = p1Score;
//  console.log(p1Score + " to " + p2Score);
});

p2.addEventListener("click", function(){
  if(!gameOver){
  p2Score += 1;
  if(p2Score === defaultVal){
    gameOver = true;
    p2Disp.classList.add("winnerDisp");
  }
}
  // h1.innerHTML = updateScore();
  p2Disp.innerHTML = p2Score;
//  console.log(p1Score + " to " + p2Score);
});

// function updateScore(){
//  var result = p1Score + " to " + p2Score;
//  return result;
// }
// }

reset.addEventListener("click", function(){
    resetGame();
});

function resetGame(){
  p1Score = 0;
  p2Score = 0;
  // h1.innerHTML = updateScore();
  p1Disp.innerHTML = p1Score;
  p2Disp.innerHTML = p2Score;
  p1Disp.classList.remove("winnerDisp");
  p2Disp.classList.remove("winnerDisp");
  gameOver = false;
}
