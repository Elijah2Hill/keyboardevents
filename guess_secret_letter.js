const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomAlphabet = "";

computerChoosesLetter();
console.log("The letter the computer chose is: " + randomAlphabet);
let oList = document.getElementById('ol');

document.body.addEventListener('keyup', function(event){
    isSecretLetter(event.key, randomAlphabet);
});

function isSecretLetter(userChoice, computerChoice){
	if (userChoice == computerChoice) {
		oList.innerHTML = oList.innerHTML + '<li><b>SECRET KEY PRESSED: ' + userChoice + '</b></li>';
		computerChoosesLetter();
		console.log("The letter the computer chose is: " + randomAlphabet);
    }
}

function computerChoosesLetter(){
	const alphabetIndex = Math.floor(Math.random() * 26);
	randomAlphabet = alphabet[alphabetIndex];
}
