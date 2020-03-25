/**
 * Created by npandeti on 2/19/20.
 */
// All the elements on the page we'll work with
var playBtn = document.querySelector('#playBtn');
var guessBtn = document.querySelector('#guessBtn');
var results = document.querySelector('#results');
var winMessage = document.querySelector('#winMessage');
var directionMessage = document.querySelector('#directionMessage');
var errorMessage = document.querySelector('#errorMessage');
var min = 10;
var max = 70;
var answer = 'hii';

playBtn.addEventListener('click', play);
guessBtn.addEventListener('click', guess);

function play() {
    answer = 'hii';
    winMessage.style.display = 'none';
    directionMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    answer = Math.floor(Math.random() * (max - min)) + min;
}

function guess() {

    winMessage.style.display = 'none';
    directionMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    if (answer == 'hii') {
        play();
    }

    // Which radio to the player choose - heads or tails?
    var playerChoice = document.querySelector('#playerChoice').value;

    // Player wins if their choice matches the flip
    var win = playerChoice == answer;
    var less = playerChoice < answer;
    var more = playerChoice > answer;

    var error = playerChoice < min || playerChoice > max;

    results.style.display = 'none';
    setTimeout(function () {
        results.style.display = 'block';
    }, 100);

    // Show the appropriate message
    if (error) {
        errorMessage.style.display = 'block';
    } else {
        if (win) {
            winMessage.style.display = 'block';
        } else {
            if (less) {
                directionMessage.innerHTML = 'Your GUESS is LOW, guess higher!!'
            } else {
                directionMessage.innerHTML = 'Your GUESS is HIGH, guess lower!!'
            }
            directionMessage.style.display = 'block';
        }
    }
}