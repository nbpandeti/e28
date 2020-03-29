/**
 * Created by npandeti on 3/26/20.
 */
Vue.component('game-results', {
	props: {
		playerWins: {
			type: Number
		},
		houseWins: {
			type: Number
		},
		playerRounds: {
			type: Array,
			default: function () { return [] }
		},
		houseRounds: {
			type: Array,
			default: function () { return [] }
		},
		bet: {
			type: String
		},
		endGame: {
			type: Boolean
		},
		betResult: {
			type: String
		},
	},
	template: '#game-results',
	methods: {
	}
})

let app = new Vue({
        el:'#app',
        data: {
		min: 10,
		max: 70,
		numGames: 10,
		gameRound: 0,
		gamePlayLevel: 1,
		answer: 'hii',
		playerChoice: '',
		guessLeft: 0,
		guesses: [],
		newGame: true,
		endGame: false,
		gamePlay: false,
		showResult: false,
		win: false,
		direction: false,
		less: false,
		more: false,
		error: false,
		levels: [
			15,  //easy
			10,  //normal
			5    //hard
		],
		bet: '0',
		betResult: '',
		stats: {
			numPlayerWins: 0,
			numHouseWins: 0,
			playerRounds: [],
			houseRounds: []
		}
        },
        methods: {
		newStart: function () {
			this.newGame = true;
			this.gamePlay = false;
			this.endGame = false;
			this.betResult = '';
			this.bet = '0';
			this.stats.numPlayerWins = 0;
			this.stats.numHouseWins = 0;
			this.stats.playerRounds = [];
			this.stats.houseRounds = [];
			this.gameRound = 0;
		},
		startGame() {
			this.guessLeft = this.levels[this.gamePlayLevel];
			this.newGame = false;
			this.gamePlay = true;
			this.play();
		},
                play() {
			this.playerChoice = '';
			this.guesses = [];
			this.gameRound++;
			this.answer = 'hii';
			this.showResult = false;
			this.win = false;
			this.direction = false;
			this.less = false;
			this.more = false;
			this.error = false;
			
			this.answer = Math.floor(Math.random() * (this.max - this.min)) + this.min;
		},
		guessNumber() {
			this.showResult = false;
                        this.win = false;
                        this.direction = false;
			this.less = false;
                        this.more = false;
                        this.error = false;

			if (this.answer == 'hii') {
				this.play();
			}
			
			this.guessLeft = this.guessLeft - 1;
			this.guesses.push(this.playerChoice);
			if (this.guessLeft == 0) {
				this.stats.numHouseWins++;
				this.stats.houseRounds.push(this.gameRound);

				if (this.gameRound == 10) {
					this.endGame = true;
				}
			} else {
				// Player wins if their choice matches the flip
				this.win = this.playerChoice == this.answer;
				this.error = this.playerChoice < this.min || this.playerChoice > this.max;
			
				if (this.win != true && this.error != true) {
					this.less = this.playerChoice < this.answer;
                        		this.more = this.playerChoice > this.answer;
                                	this.direction = true;
				}

				if (this.win == true) {
					this.stats.numPlayerWins++;
                                	this.stats.playerRounds.push(this.gameRound);

					if (this.gameRound == 10) {
						this.endGame = true;
					}

				}
			}

			if (this.endGame == true) {
				if (this.stats.numPlayerWins == this.bet) {
					this.betResult = 'CORRECT!! Yayy! You won your bet!';
				} else {
					this.betResult = 'WRONG  :(  You lost your bet. HOUSE WINS!!!';
				}
			}
			this.showResult = true;

		}
        }
});

