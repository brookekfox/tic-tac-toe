for (var boxNumber = 0; boxNumber < 9; boxNumber++) {
	var box = document.getElementById("box" + boxNumber);
	function makeClicker(num) {
		return function () {
			if (player == 1 && box.getAttribute("data-clicked") == false) {
				box.innerHTML = player1Image;
				box.setAttribute('data-clicked', true);
				if (num === 0) {
					countFirstCol1++;
					countFirstRow1++;
					countNWDiagonal1++;
				} else if (num === 1) {
					countSecondCol1++;
					countFirstRow1++;
				} else if (num === 2) {
					countThirdCol1++;
					countFirstRow1++;
					countNEDiagonal1++;
				} else if (num === 3) {
					countFirstCol1++;
					countSecondRow1++;
				} else if (num === 4) {
					countSecondCol1++;
					countSecondRow1++;
					countNWDiagonal1++;
					countNEDiagonal1++;
				} else if (num === 5) {
					countThirdCol1++;
					countSecondRow1++;
				} else if (num === 6) {
					countFirstCol1++;
					countThirdRow1++;
					countNEDiagonal1++;
				} else if (num === 7) {
					countSecondCol1++;
					countThirdRow1++;
				} else if (num === 8) {
					countThirdCol1++;
					countThirdRow1++;
					countNWDiagonal1++;
				}
				player = 0;
				turn++;
				winner();
			} else if (player == 0 && box.getAttribute("data-clicked") == false) {
				box.innerHTML = player1Image;
				box.setAttribute('data-clicked', true);
				if (num === 0) {
					countFirstCol1++;
					countFirstRow1++;
					countNWDiagonal1++;
				} else if (num === 1) {
					countSecondCol1++;
					countFirstRow1++;
				} else if (num === 2) {
					countThirdCol1++;
					countFirstRow1++;
					countNEDiagonal1++;
				} else if (num === 3) {
					countFirstCol1++;
					countSecondRow1++;
				} else if (num === 4) {
					countSecondCol1++;
					countSecondRow1++;
					countNWDiagonal1++;
					countNEDiagonal1++;
				} else if (num === 5) {
					countThirdCol1++;
					countSecondRow1++;
				} else if (num === 6) {
					countFirstCol1++;
					countThirdRow1++;
					countNEDiagonal1++;
				} else if (num === 7) {
					countSecondCol1++;
					countThirdRow1++;
				} else if (num === 8) {
					countThirdCol1++;
					countThirdRow1++;
					countNWDiagonal1++;
				}
				player = 1;
				turn++;
				winner();
			}  else {
				alert("That space is taken already!");
			}
		}
	}
	box.addEventListener('click', makeClicker(boxNumber));
}

//old count win variables
	var countFirstCol1 = 0;
	var countSecondCol1 = 0;
	var countThirdCol1 = 0;
	var countNWDiagonal1 = 0;
	var countNEDiagonal1 = 0;
	var countFirstRow1 = 0;
	var countSecondRow1 = 0;
	var countThirdRow1 = 0;

	var countFirstCol2 = 0;
	var countSecondCol2 = 0;
	var countThirdCol2 = 0;
	var countNWDiagonal2 = 0;
	var countNEDiagonal2 = 0;
	var countFirstRow2 = 0;
	var countSecondRow2 = 0;
	var countThirdRow2 = 0;


//old winner() function
function winner() {
			//if player 1 has 3 in ANY of the columns, rows, or diagonals, they win (alert) and we reset the board
			if (choice != 0 && (countFirstCol1 === 3 || countSecondCol1 === 3 || countThirdCol1 === 3 || countFirstRow1 === 3 || countSecondRow1 === 3 || countThirdRow1 === 3 || countNWDiagonal1 === 3 || countNEDiagonal1 === 3)) {
				alert(player1Name + " won!");
				reset();
				//increment the number of wins for player 1
				player1++;
				//replace the innerHTML of player1Score to reflect the win
				document.getElementById("player1Score").innerHTML = player1Name + ": " + player1;
			} else if (choice != 0 && (countFirstCol2 === 3 || countSecondCol2 === 3 || countThirdCol2 === 3 || countFirstRow2 === 3 || countSecondRow2 === 3 || countThirdRow2 === 3 || countNWDiagonal2 === 3 || countNEDiagonal2 === 3)) {
				alert(player2Name + " won!");
				reset();
				player2++;
				document.getElementById("player2Score").innerHTML = player2Name + ": " + player2;
			} else if (choice !=0 && turn === 9) {
				//9 turns have been taken but neither player has 3 in any row, column, or diagonal
				alert("It's a draw.");
				reset();
			} else if (choice == 0 && turn === 9) {
				//this is just if someone clicks the board before pressing play and selecting pieces
				alert("Click the play button!");
				reset();
			} else {}
		}




//[[col1] = 0,[col2] = 1,[col3] = 2,[row1] = 3,[row2] = 4,[row3] = 5,[nwDiag] = 6,[neDiag] = 7];










