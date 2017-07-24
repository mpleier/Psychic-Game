// function myScript(){
//     console.log("working");
// }



var chars = [
  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z"
];

var latest = "";

function randomLetter() {
  var char1 = chars[Math.floor(Math.random()*26)];
  return ""+char1;
}

var letter = randomLetter();
var wins = 0;
var losses = 0;
var guesses = 9;
var a = [];
var page;

letter = randomLetter();

// document.write("<h1>The Psychic Game</h1><br><br> Guess what letter I\'m thinking of<br><br>Wins: "+wins+"<br><br>Losses: "+losses+"<br><br>Guesses Left: "+guesses+"<br><br>Your Guesses so far: "+a)

document.onkeydown = checkKey;

function checkKey(e) {
    var event = window.event ? window.event : e;
    latest = event.key.toLowerCase();
    if (a.indexOf(latest)<0) {

    a.push(latest);
    guesses = guesses--;
	if (latest == letter) {
		wins++;
		guesses = 9;
		letter = randomLetter();
		a = [];
		document.getElementById("body").innerHTML = ("<h1>The Psychic Game</h1><br><br> Guess what letter I\'m thinking of<br><br>Wins: "+wins+"<br><br>Losses: "+losses+"<br><br>Guesses Left: "+guesses+"<br><br>Your Guesses so far: "+a)


	}
	else if (guesses < 1) {
		losses++;
		guesses = 9;
		letter = randomLetter();
		a = [];
		document.getElementById("body").innerHTML = ("<h1>The Psychic Game</h1><br><br> Guess what letter I\'m thinking of<br><br>Wins: "+wins+"<br><br>Losses: "+losses+"<br><br>Guesses Left: "+guesses+"<br><br>Your Guesses so far: "+a)

	}
	else {
		guesses--;
		document.getElementById("body").innerHTML = ("<h1>The Psychic Game</h1><br><br> Guess what letter I\'m thinking of<br><br>Wins: "+wins+"<br><br>Losses: "+losses+"<br><br>Guesses Left: "+guesses+"<br><br>Your Guesses so far: "+a)

	}
}
}


	
