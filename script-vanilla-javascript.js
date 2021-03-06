// this function resets the game board to empty; it does not reset the player win count
function reset() {
	countWins = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
	box0.innerHTML = "";
	box1.innerHTML = "";
	box2.innerHTML = "";
	box3.innerHTML = "";
	box4.innerHTML = "";
	box5.innerHTML = "";
	box6.innerHTML = "";
	box7.innerHTML = "";
	box8.innerHTML = "";
	box0Clicked = false;
	box1Clicked = false;
	box2Clicked = false;
	box3Clicked = false;
	box4Clicked = false;
	box5Clicked = false;
	box6Clicked = false;
	box7Clicked = false;
	box8Clicked = false;
	turn = 0;
	player = 1;
}

function newGame() {
	reset();
	player1 = 0;
	player2 = 0;
}

//this series of lines allows the player to select which game pieces will be used via a prompt
var player1Image = "";
var player2Image = "";
var choice = 0;
document.getElementById("playButton").addEventListener('click', function () {
	choice = prompt("Choose: [1] Tina Belcher vs. Louise Belcher, [2] Mr. Darcy vs. Elizabeth Bennet, [3] Dillon Panthers vs. East Dillon Lions, [4] Ron Swanson vs. Leslie Knope, [5] Pizza vs. Mac & Cheese, [6] Harry Potter vs Voldemort, or [7] Khaleesi vs. Arya Stark");
	//depending on the user's choice, playerName and playerImage are set; in the game logic the innerHTML of the boxes will be set to the playerImages
	if(choice == 1) {
		player1Name = "Tina Belcher";
		player1Image = "<img src='http://data1.whicdn.com/images/81387822/large.png'>";
		player2Name = "Louise Belcher";
		player2Image = "<img src='http://img4.wikia.nocookie.net/__cb20140420011350/villains/images/5/5f/Louise_Belcher.png'>";
	} else if (choice == 2) {
		player1Name = "Mr. Darcy";
		player1Image = "<img src='http://i.imgur.com/QVWcz.png'>";
		player2Name = "Elizabeth Bennet";
		player2Image = "<img src='http://images2.fanpop.com/image/photos/10400000/Elizabeth-keira-knightley-as-elizabeth-bennet-10470495-1250-820.jpg'>";
	} else if (choice == 3) {
		player1Name = "Dillon Panthers";
		player1Image = "<img src='http://ih3.redbubble.net/image.10753990.0624/sticker,375x360.u1.png'>";
		player2Name = "East Dillon Lions";
		player2Image = "<img src='http://ih3.redbubble.net/image.10754016.0657/sticker,375x360.u1.png'>";
	} else if (choice == 4) {
		player1Name = "Ron Swanson";
		player1Image = "<img src='http://whatwouldronsay.com/img/ron-2.png'>";
		player2Name = "Leslie Knope";
		player2Image = "<img src='http://3.bp.blogspot.com/-eT8s321qY9Y/UyhJomfNYTI/AAAAAAAAAG8/JLvjuA3Vobg/s1600/deskpic3.png'>";
	} else if (choice == 5) {
		player1Name = "Pizza";
		player1Image = "<img src='http://img4.wikia.nocookie.net/__cb20121123053932/bravestwarriors/images/f/f4/PIzza.png'>";
		player2Name = "Mac & Cheese";
		player2Image = "<img src='http://s3.amazonaws.com/bojangles.com/content/menu/items/sizes/photos/large/29.png'>";
	} else if (choice == 6) {
		player1Name = "Harry Potter";
		player1Image = "<img src='http://fc08.deviantart.net/fs71/f/2011/189/6/e/harry_potter_png_11_by_esra99-d3le6zm.png'>";
		player2Name = "Voldemort";
		player2Image = "<img src='http://1.bp.blogspot.com/-AfKNkf_kH1Y/TiBzNl8UJoI/AAAAAAAAAwA/7PuPhx8bKiI/s1600/Harry+Potter+Lord+Voldemort%25C2%25B2.png'>";
	} else if (choice == 7) {
		player1Name = "Khaleesi";
		player1Image = "<img src='http://officialpsds.com/images/thumbs/Daenerys-Targaryen-psd95184.png'>";
		player2Name = "Arya Stark";
		player2Image = "<img src='http://pixel.nymag.com/imgs/daily/vulture/2013/05/08/08-maisie-williams.o.png/a_250x375.png'>";
	}
	//reset the game board to the beginning/to empty
	newGame();
	//player win counts
	document.getElementById("playerScores").style.display = 'block';
	document.getElementById("player1Score").innerHTML = player1Name + ": " + player1;
	document.getElementById("player2Score").innerHTML = player2Name + ": " + player2;
});

		//this array sets the total number of boxes in each column, row, and diagonal each player occupies; in order to start the game, these should be 0 (ie the players do not occupy any boxes)
		var countWins = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
		//[[col1] = 0,[col2] = 1,[col3] = 2,[row1] = 3,[row2] = 4,[row3] = 5,[nwDiag] = 6,[neDiag] = 7];

		//turn is required to determine a "cat's game" or a draw
		var turn = 0;
		//we start with player = 1 then switch to player = 0
		var player = 1;
		//win counts of each player
		var player1 = 0;
		var player2 = 0;

		//set box0 to be the first div in the board; we want it to be "open" (box0Clicked = false)
		var box0 = document.getElementById("box0");
		var box0Clicked = false;
		box0.addEventListener('click',function(){
			if (player === 1 && box0Clicked === false) {
				//when the box is clicked by player 1, we change the innerHTML to player 1's image
				box0.innerHTML = player1Image;
				//when the box is cicked we change its cicked value to true so another piece cannot try to take its place
				box0Clicked = true;
				//box0 specifically occupies space in column 1, row 1, and the NW diagonal so we must increment those values (for the win logic)
				countWins[0][0]++;
				countWins[3][0]++;
				countWins[6][0]++;
				//check for a winner
				winner();
				//switch players
				player = 0;
				//add one to the turn count (so we don't exceed 9 turns on one game)
				turn++;
			} else if (player === 0 && box0Clicked === false) {
				box0.innerHTML = player2Image;
				box0Clicked = true;
				countWins[0][1]++;
				countWins[3][1]++;
				countWins[6][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box1 = document.getElementById("box1");
		var box1Clicked = false;
		box1.addEventListener('click',function(){
			if (player === 1 && box1Clicked === false) {
				box1.innerHTML = player1Image;
				box1Clicked = true;
				countWins[1][0]++;
				countWins[3][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box1Clicked === false) {
				box1.innerHTML = player2Image;
				box1Clicked = true;
				countWins[1][1]++;
				countWins[3][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box2 = document.getElementById("box2");
		var box2Clicked = false;
		box2.addEventListener('click',function(){
			if (player === 1 && box2Clicked === false) {
				box2.innerHTML = player1Image;
				box2Clicked = true;
				countWins[2][0]++;
				countWins[3][0]++;
				countWins[7][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box2Clicked === false) {
				box2.innerHTML = player2Image;
				box2Clicked = true;
				countWins[2][1]++;
				countWins[3][1]++;
				countWins[7][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box3 = document.getElementById("box3");
		var box3Clicked = false;
		box3.addEventListener('click',function(){
			if (player === 1 && box3Clicked === false) {
				box3.innerHTML = player1Image;
				box3Clicked = true;
				countWins[0][0]++;
				countWins[4][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box3Clicked === false) {
				box3.innerHTML = player2Image;
				box3Clicked = true;
				countWins[0][1]++;
				countWins[4][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box4 = document.getElementById("box4");
		var box4Clicked = false;
		box4.addEventListener('click',function(){
			if (player === 1 && box4Clicked === false) {
				box4.innerHTML = player1Image;
				box4Clicked = true;
				countWins[1][0]++;
				countWins[4][0]++;
				countWins[6][0]++;
				countWins[7][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box4Clicked === false) {
				box4.innerHTML = player2Image;
				box4Clicked = true;
				countWins[1][1]++;
				countWins[4][1]++;
				countWins[6][1]++;
				countWins[7][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box5 = document.getElementById("box5");
		var box5Clicked = false;
		box5.addEventListener('click',function(){
			if (player === 1 && box5Clicked === false) {
				box5.innerHTML = player1Image;
				box5Clicked = true;
				countWins[2][0]++;
				countWins[4][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box5Clicked === false) {
				box5.innerHTML = player2Image;
				box5Clicked = true;
				countWins[2][1]++;
				countWins[4][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box6 = document.getElementById("box6");
		var box6Clicked = false;
		box6.addEventListener('click',function(){
			if (player === 1 && box6Clicked === false) {
				box6.innerHTML = player1Image;
				box6Clicked = true;
				countWins[0][0]++;
				countWins[5][0]++;
				countWins[7][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box6Clicked === false) {
				box6.innerHTML = player2Image;
				box6Clicked = true;
				countWins[0][1]++;
				countWins[5][1]++;
				countWins[7][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box7 = document.getElementById("box7");
		var box7Clicked = false;
		box7.addEventListener('click',function(){
			if (player === 1 && box7Clicked === false) {
				box7.innerHTML = player1Image;
				box7Clicked = true;
				countWins[1][0]++;
				countWins[5][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box7Clicked === false) {
				box7.innerHTML = player2Image;
				box7Clicked = true;
				countWins[1][1]++;
				countWins[5][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		var box8 = document.getElementById("box8");
		var box8Clicked = false;
		box8.addEventListener('click',function(){
			if (player === 1 && box8Clicked === false) {
				box8.innerHTML = player1Image;
				box8Clicked = true;
				countWins[2][0]++;
				countWins[5][0]++;
				countWins[6][0]++;
				player = 0;
				turn++;
				winner();
			} else if (player === 0 && box8Clicked === false) {
				box8.innerHTML = player2Image;
				box8Clicked = true;
				countWins[2][1]++;
				countWins[5][1]++;
				countWins[6][1]++;
				player = 1;
				turn++;
				winner();
			} else {
				alert("That space is taken already!");
			}
		});

		//this function checks for a winner after every turn
		function winner() {
		//if player 1 has 3 in ANY of the columns, rows, or diagonals, they win (alert) and we reset the board
		//to check for a winner, we loop through the countWins array
		for (var i = 0; i < countWins.length; i++) {
			//if player 1 has 3 in ANY of the columns, rows, or diagonals, they win (alert) and we reset the board
			if (countWins[i][0] === 3) {
				//say who won and reset the game board
				alert(player1Name + " won!");
				reset();
				//increment the number of wins for player 1
				player1++;
				//replace the innerHTML of player1Score to reflect the win
				document.getElementById("player1Score").innerHTML = player1Name + ": " + player1;
			} else if (countWins[i][1] === 3) {
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
			}
		}
	}
