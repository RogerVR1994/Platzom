'use strict';

var platzo = function platzo(str) {
	var translatedWord = str;
	var lastTwoLetters = translatedWord.slice(-2, translatedWord.length);
	var firstLetter = translatedWord[0];
	var palindromo = checkPalindromo(translatedWord);

	if (palindromo) {
		translatedWord = toggleUpperLowerCase(translatedWord);
	}

	if (lastTwoLetters.toLowerCase() === 'ar' && !palindromo) {
		translatedWord = trimAr(translatedWord);
	}
	if (firstLetter.toLowerCase() === 'z' && !palindromo) {
		translatedWord = addPe(translatedWord);
	}
	if (translatedWord.length >= 10 && !palindromo) {
		var firstHalf = translatedWord.slice(0, Math.ceil(translatedWord.length / 2));
		var secondtHalf = translatedWord.slice(Math.ceil(translatedWord.length / 2), translatedWord.length);
		translatedWord = firstHalf + '-' + secondtHalf;
	}
	return translatedWord;
};

var trimAr = function trimAr(translatedWord) {
	var translatedWordTrimmed = translatedWord.slice(0, -2);
	return translatedWordTrimmed;
};

var addPe = function addPe(translatedWord) {
	return translatedWord + 'pe';
};

var checkPalindromo = function checkPalindromo(translatedWord) {
	var i = 0;
	while (i < translatedWord.length) {
		if (translatedWord[i] != translatedWord[translatedWord.length - 1 - i]) {
			return false;
		}
		i++;
	}
	return true;
};

var toggleUpperLowerCase = function toggleUpperLowerCase(translatedWord) {
	var str = '';
	var capitalize = true;
	for (var i = 0; i < translatedWord.length; i++) {
		str += capitalize ? translatedWord[i].toUpperCase() : translatedWord[i].toLowerCase();
		capitalize = !capitalize;
	}
	return str;
};

module.exports.platzo = platzo;