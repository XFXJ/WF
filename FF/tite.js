var randomNumber=Math.floor((Math.random()*100))+1;
console.log(randomNumber);

/*var guessField=document.querySelector('.guessField') ;
console.log(guessField);
console.log(guessField.value);*/

var guessSubmit=document.querySelector('.guessSubmit');
console.log(guessSubmit);

var resultParas=document.querySelector('.resultParas');
console.log(resultParas);

var guesses=document.querySelector('.guesses');
console.log(guesses);

var lastResult=document.querySelector('.lastResult');
console.log(lastResult);

var lowOrHi=document.querySelector('.lowOrHi');
console.log(lowOrHi);

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess()
{
    guesses.textContent+=guessField.value+" ";
    guesses.style.backgroundColor="red";
}

//checkGuess();