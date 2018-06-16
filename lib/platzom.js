let platzo = function(str) {
	let translatedWord = str;	
	var lastTwoLetters = translatedWord.slice(-2, translatedWord.length);
	var firstLetter = translatedWord[0];
	var palindromo = checkPalindromo(translatedWord);
	
	if(palindromo) {
		translatedWord = toggleUpperLowerCase(translatedWord);
	}

	if(lastTwoLetters.toLowerCase() === 'ar' && !palindromo) {		
		translatedWord = trimAr(translatedWord);
	}
	if(firstLetter.toLowerCase() === 'z' && !palindromo) {	
		translatedWord = addPe(translatedWord); 
	}
	if (translatedWord.length >= 10 && !palindromo) {
		var firstHalf = translatedWord.slice(0, Math.ceil(translatedWord.length/2));
		var secondtHalf = translatedWord.slice(Math.ceil(translatedWord.length/2), translatedWord.length);
		translatedWord = firstHalf + '-' + secondtHalf;
	}
	return translatedWord;
}

let trimAr = function(translatedWord) {
	var translatedWordTrimmed = translatedWord.slice(0, -2);
	return translatedWordTrimmed 
}

let addPe = function(translatedWord) {
	return translatedWord + 'pe';
}

let checkPalindromo = function(translatedWord) {
	var i = 0;
	while(i<translatedWord.length) {
		if(translatedWord[i] != translatedWord[translatedWord.length-1-i]) {
			return false;
		}
		i++;
	}
	return true
}

let toggleUpperLowerCase = function(translatedWord) {
	var str = ''
	var capitalize = true
	for(var i = 0; i<translatedWord.length; i++) {
		str += capitalize ? translatedWord[i].toUpperCase() : translatedWord[i].toLowerCase()
		capitalize = !capitalize
	}
	return str;
}

module.exports.platzo = platzo;