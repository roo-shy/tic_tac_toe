var player = 1;
function clickBtn(btn) {
  if (player == 1) {
  document.getElementById(btn).value = "X";
  document.getElementById(btn).disabled = "disabled";
  player -= 1;
  winner();
  } 
  else {
  document.getElementById(btn).value = "0";
  document.getElementById(btn).disabled = "disabled";
  player += 1;
  winner();
  }
}

function winner() {
  if(document.getElementById("btn1").value == "X" && 
  document.getElementById("btn2").value == "X" &&
  document.getElementById("btn3").value == "X" ||
  document.getElementById("btn4").value == "X" && 
  document.getElementById("btn5").value == "X" &&
  document.getElementById("btn6").value == "X" ||
  document.getElementById("btn7").value == "X" && 
  document.getElementById("btn8").value == "X" &&
  document.getElementById("btn9").value == "X" ||
  document.getElementById("btn1").value == "X" && 
  document.getElementById("btn4").value == "X" &&
  document.getElementById("btn7").value == "X" ||
  document.getElementById("btn2").value == "X" && 
  document.getElementById("btn5").value == "X" &&
  document.getElementById("btn8").value == "X" ||
  document.getElementById("btn3").value == "X" && 
  document.getElementById("btn6").value == "X" &&
  document.getElementById("btn9").value == "X"
){
  alert("The Winner is X");
  reset();
}
}

function reset() {
  document.getElementById("btn1").value = "";
  document.getElementById("btn2").value = "";
  document.getElementById("btn3").value = "";
  document.getElementById("btn4").value = "";
  document.getElementById("btn5").value = "";
  document.getElementById("btn6").value = "";
  document.getElementById("btn7").value = "";
  document.getElementById("btn8").value = "";
  document.getElementById("btn9").value = "";
}