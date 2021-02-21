// Game.js
// Controls the logic of the game.

class Game {
	constructor() {
		// Available players (can potentially be expanded)
		this.players = ["player1", "player2"];
		this.boards = {}; // needs to be an dict to have key/value pairs
		this.numShips = 0; // This needs to go away

		for (var player of this.players) {
			this.boards[player] = {}; // Needs to hold Board object
		}

		let game = this;
		this.button = document.getElementById("button");
		button.onclick = function() {game.buttonClicked()}; // this isn't necessary

		this.showTitleScreen();
	}

	showTitleScreen() {
		var title = document.createElement("div");
		//title.innerHTML = "Look at me, I'm a title!";
		document.body.appendChild(title);

		button.innerHTML = "START";
		this.buttonClicked = function() {
			title.remove();
			this.setup();
		}
	}

	// Sets up a new game
	setup() {
		// Creates two game boards on screen
		this.boards["player1"] = new Board("player1");
		this.boards["player2"] = new Board("player2");

		let game = this;

		// The following must be done for Player 1 AND Player 2
		for (var player of this.players) {

			// Adds eventListener for each cell onClick
			// If you can manage to do this in Board class, I will love you.
			for (var row of this.boards[player].cells) {
				for (var cell of row) {
					cell.onclick = function() {game.cellClicked(this)};
				}
			}
<<<<<<< HEAD

		}
		var myBtn = document.querySelector('#change');
		console.log(myBtn);

		myBtn.innerHTML = "End Player 1 Setup";
		this.placeShips('player1');
		myBtn.onclick = function () {
			document.game.boards['player1'].hideShips();
			console.log('entering player 2 setup');
			myBtn.innerHTML = "End Player 2 Setup";
			document.game.placeShips('player2');
			myBtn.onclick = function () {
				document.game.boards['player2'].hideShips();
				myBtn.disabled = true;
				myBtn.innerHTML = "Click Play Game to Start";
				//integrate myBtn into the play game btn? 
			}
			
			
||||||| acefc08
			
			this.placeShips(player);
=======

			this.placeShips(player);
>>>>>>> f9df827156cb133256debf6d6790690a0fbcef67
		}


			// Start game
			this.button.innerHTML = "Play Game";
			this.buttonClicked = function() {
				this.play(game.players[Math.round(Math.random())]);
			}
	}

	// Runs a game while playing
	play(activePlayer) {
		//console.log("It is " + activePlayer + "'s turn");

		// Defines inactivePlayer for use later
		let inactivePlayer = activePlayer == "player1" ? "player2" : "player1";

		this.boards[activePlayer].showShips();
		this.changeInstruction(activePlayer);
		this.button.innerHTML = "pogger";
		this.buttonClicked = function() {};


		let game = this;
		this.cellClicked = function(cell) {
			var board = cell.parentElement.parentElement.parentElement.id;
			if (board == inactivePlayer && this.boards[inactivePlayer].isEmpty(cell.location)) {

				// Check for game over
				var win = true;
				for (var ship of this.boards[inactivePlayer].ships) {
					console.log('ship = ' + Object.keys(ship.locations));
					if (ship.hit(cell.location)) {
						game.boards[inactivePlayer].drawCell(cell.location, "hit");
					} else {
						game.boards[inactivePlayer].drawCell(cell.location, "miss");
					}

					if (!ship.isSunk()) {
						win = false;
					}
				}

				// Game over stuff
				if (win) {
					game.game_over(activePlayer);
				} else { // End turn
					game.cellClicked = function() {};
					game.boards[activePlayer].hideShips();
					game.button.innerHTML = "End turn";
					game.buttonClicked = function() {game.play(inactivePlayer)};
				}
			}
		}
	}

	// Triggered when one player wins
	game_over(winner) {
		var title = document.createElement("div");
		title.innerHTML = winner + " wins!";
		document.body.appendChild(title);

		for (var board of Object.values(this.boards)) {
			board.remove();
			this.boards = {};
		}

		button.innerHTML = "Play again?";
		this.buttonClicked = function() {
			title.remove();
			this.setup();
		}
	}

	placeShips(player) {
		// Prompt player for number of ships to place
		if (!(this.numShips > 0  && this.numShips < 7)) { //replace with a try throw catch?
			var numShips = prompt("# of ships (1 - 6): ");
			this.numShips = numShips;
			console.log('num ships = ' + this.numShips);
		}

		if (this.numShips < 6) {
			for (var j = 1; j <= this.numShips; j++) {
				document.querySelector('#button_' + player + "_" + j).disabled = false;
			}
		}

		let game = this;
		this.cellClicked = function(cell) {
			//this one is gonna be complicated
		}


		// Creating test set of ships
		//this.boards[player].ships.push(new Ship(["A1", "B1", "C1"]));
	}

	// This function gets called everytime a cell is clicked.
	// Can be altered
	cellClicked(cell) {

	}

	buttonClicked() {

	}

	changeInstruction(activePlayer){
		var player = activePlayer;

		//if(activePlayer == "player1"){
			document.querySelector("#inst").innerText = player + "'s Turn!";
		/*}
		else{
			document.querySelector("#inst").innerText = player + "'s Turn!";
		}*/
	}

}
