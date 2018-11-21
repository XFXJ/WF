var randomNumber=Math.floor((Math.random()*100))+1;
console.log(randomNumber);

/*var guessField=document.querySelector('.guessField') ;
console.log(guessField);
console.log(guessField.value);*/
//获取选择器
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
//初始化猜数控制数字
var guessCount=1;
var resetButton;//重置游戏按钮
guessField.focus();//文本框获得焦点

//定义猜数游戏函数
function checkGuess()
{//获取输入的数据，转为数字
    var userGuess=Number(guessField.value);
//判断猜数是否正确，如正确显示从新开始游戏
if(guessCount===1){
    //猜的数并显示出来
guesses.textContent='上次猜的数: ';
}
//输入的猜数接入猜数历史中
    guesses.textContent += userGuess + ' ';
    //guesses.textContent+=guessField.value+' ';
//判断有没有猜中
    if(userGuess===randomNumber)
    {
         // 猜中显示提示信息
        lastResult.textContent = '恭喜你！猜对了！';
        //显示提示信息为绿色
        lastResult.style.backgroundColor = 'green';
         //清空高低提示字符串
         lowOrHi.textContent = '';
//调用游戏结束函数
         setGameOver();
    }
    //判断第十次没有猜中，
    else if(guessCount === 10) 
    {//游戏提示语
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    }
 else {
    lastResult.textContent = '你猜错了！';
    lastResult.style.backgroundColor = 'blue';
    guesses.style.backgroundColor="yellow";
    if(userGuess < randomNumber) {
        //小了提示
        lowOrHi.textContent = '刚才你猜低了！';
      } else if(userGuess > randomNumber) {
        //大了提示
        lowOrHi.textContent = '刚才你猜高了！';
      }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);
function setGameOver() {
     guessField.disabled = true;
     guessSubmit.disabled = true;
    resetButton = document.createElement('button');
     resetButton.textContent = '开始新游戏';
     document.body.appendChild(resetButton);
     resetButton.addEventListener('click', resetGame);
    //var resetButtonP=document.querySelector("div.resultParas p:last-child");
    //console.log(resetButtonP);
    //resetButtonP.style.dispaly="block";
  }
  function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
