/**
 * Created by npandeti on 2/19/20.
 */
// All the elements on the page we'll work with
let app = new Vue({
	el:'#app',
	data: {
		name: '',
		guess: '',
		playing: false,
		guessing: false,
		correct: null,
		randomWordIndex: 0,
		words: [
		    ['apple', 'Sometimes red, sometimes delicious'],
		    ['washington', 'Rushmore’s left edge'],
		    ['pumpkin', 'Halloween’s favorite fruit'],
		    ['football', 'Play with your hands or feet, depending on your location']
		],
		playingWord: {
			word: '',
			hint: '',
			scramble: ''
		}
	},
	methods: {
		startGame() {
			this.playing = true;
			this.guessing = false;
			this.randomWordIndex = Math.floor((Math.random()*4));
			this.playingWord.word = this.words[this.randomWordIndex][0];
			this.playingWord.hint = this.words[this.randomWordIndex][1];
			this.playingWord.scramble = this.scramble(this.playingWord.word);
		},
		guessAnswer() {
			this.playing = true;
			if(this.guess == this.playingWord.word) {
				this.correct = true;
			} else {
				this.correct = false;
			}
			this.guessing = true;

		},
		scramble(word) {
			var newArr = [];
  			var neww = '';
  			var text = word.replace(/[\r\n]/g, '').split(' ');

  			text.map(function(v) {
    				v.split('').map(function() {
      					var hash = Math.floor(Math.random() * v.length);
      					neww += v[hash];
      					v = v.replace(v.charAt(hash), '');
    				});
    				newArr.push(neww);
    				neww = '';
  			});
  			var x = newArr.map(v => v.split('').join('')).join('\n');
  			return x.split('').map(v => v.toLowerCase()).join('');
		}
	}
});

