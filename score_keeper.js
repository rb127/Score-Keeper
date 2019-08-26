var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var h1 = document.querySelector("#score");
var result = p1Score + " to " + p2Score;
h1.innerHTML = result;
console.log(p1Score + " to " + p2Score);
p1.addEventListener("click", function(){
  p1Score += 1;
  var result = p1Score + " to " + p2Score;
  h1.innerHTML = updateScore();
  console.log(p1Score + " to " + p2Score);
});

p2.addEventListener("click", function(){
  p2Score += 1;

  h1.innerHTML = updateScore();
  console.log(p1Score + " to " + p2Score);
});

function updateScore(){
 var result = p1Score + " to " + p2Score;
 return result;
}

reset.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    h1.innerHTML = updateScore();
});
