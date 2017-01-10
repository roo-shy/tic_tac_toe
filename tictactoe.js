var WINNER = false;
var BOARD = [
  ['', '', ''], // [column 0, column 1, column 2]
  ['', '', ''],
  ['', '', '']
];

var CELL = 'X';

$('#table').click(function(winGame) {
  if(WINNER) {
    return;
  }
  
  //Write down if pass
  var target = $(winGame.target);
  var column = parseInt(target.data('column'));
  var row = parseInt(target.data('row'));
  if (!BOARD[row][column]) {
    BOARD[row][column] = COLOR;
  } else {
    alert('Incorrect!');
    return;
  }
  
  //Toggle who is palying
  if (COLOR == 'X') {
    COLOR = '0'; 
  } else {
    COLOR = 'X';
  }
  
  //Update board state:
  $('#table').each(function() {
    var cell = $(winGame.target);
    var column = parseInt(target.data('column'));
    var row = parseInt(target.data('row'));
    if (BOARD[row][column]) {
      cell.text(BOARD[row][column]);
      cell.addClass('play-' + BOARD[row][column]);
      
    } else {
      cell.html('&nbsp;');
      cell.attr('class', '');
    }
  });
  
  // Check who is winning - horizontal
  for (var i = 0; i < 3; i++) {
    if (BOARD[i][0] &&
    BOARD[i][1] == BOARD[i][1] &&
    BOARD[i][1] == BOARD[i][2]) {
      alert(BOARD[i][0] + 'a Winner!');
      WINNER = true;
      return;
    }
  }
  
  // Check who is winning - vertical
      for (var i = 0; i < 3; i++) {
        if (BOARD[0][i] &&
            BOARD[0][i] == BOARD[1][i] &&
            BOARD[1][i] == BOARD[2][i]) {
          alert(BOARD[0][i] + ' has won!');
          WINNER = true;
          return;
        }
      }

  // Check who is winning diagonal
      if (BOARD[0][0] &&
          BOARD[0][0] == BOARD[1][1] &&
          BOARD[1][1] == BOARD[2][2]) {
        alert(BOARD[0][0] + ' has won!');
        WINNER = true;
        return;
      }
      if (BOARD[0][2] &&
          BOARD[0][2] == BOARD[1][1] &&
          BOARD[1][1] == BOARD[2][0]) {
        alert(BOARD[0][2] + ' has won!');
        WINNER = true;
        return;
      }
    });
