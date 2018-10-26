var timer;//设计定时计时器

//启动定时器函数定义---若启动定时器动作单一，可以直接调用window定时器
function startTimer(speed)
{
timer=window.setInterval(changeNum,speed);
}
//调用定时器，使程序从一开始就执行变化
startTimer(100);
//获取h2
var h20bj=document.querySelector('h2');
console.log(h20bj);
//设置当前变化的好码变量及初值
var currentNo=0;
//定义变化数字函数， 0到9，到9后在变化到0
function changeNum()
{
if(currentNo < 9) currentNo++;
else currentNo=0;
h20bj.textContent=currentNo;
}
// console.log(timer);

//获取控制按钮
var btnObj=document.getElementById('btnObj')
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startChange()
{
    startTimer(500);
    btnObj.textContent="停止"
  
}
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function stopChange()
{
    window.clearInterval(timer);
    btnObj.textContent="启动"
}
//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);