var player = 1;
function clickBtn(btn) {
  if (player == 1) {
  document.getElementById(btn).value = "X";
  player -= 1;
  } 
    else {
    document.getElementById(btn).value = "0";
    player += 1;
    }
}