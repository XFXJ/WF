//页面加载完成之后执行
window.onload=function()
{
    //搜索区块的颜色变化
    search();
}
//搜索区块的颜色变化
function search()
{//获取搜索盒子
    var searchBox=document.querySelector('.hm_header_box');
    var bannerBox=document.querySelector('.hm_banner');
    var h=bannerBox.offsetHeight;
//监听window的滚动事件
    window.onscroll=function()
    {
//不断的获取离顶部的距离
var top=document.body.scrollTop;
var opacity=0;
if(top<h)
{
    opacity=top/h * 0.85
}
else
{
    opacity=0.85
}
searchBox.style.background="rgba(201,21,35,"+opacity+")";

    }
}

window.onload=function()
{
    function downTime()
    {
        var time=5*60*60;
        var timer=null;
        var skTime=document.querySelector('.sk_time');
        var spams=skTime.querySelector('span')
        timer=setInterval(function()
        {
            if(time<=0)
            {
                clearInterval(timer);
                return false;
            }
            time --;

            var h=Math.floor(time/3600);
            var m=Math.floor(time%3600/60);
            var s=time%60;
            console.log(h);
            console.log(m);
            console.log(s);
            spans[0].innerHtml=Math.floor(h/10);
            spans[1].innerHtml=s%10;
            spans[3].innerHtml=Math.floor(h/10);
            spans[4].innerHtml=s%10;
            spans[6].innerHtml=Math.floor(h/10);
            spans[7].innerHtml=s%10;
            
        },1000)
    }
}
var imagesA = document.getElementById("images").children;
var txtList = document.querySelector(".txtbox").children;

var currentNo = 0;
const nodeLength = 8;

function changeImg() 
{
    for (var i = 0; i < nodeLength; i++) 
    {
        imagesA[i].className = "hiddenImg";
        txtList[i].className = "txtItem normalColor";
    }
    
    imagesA[currentNo].className = "displayImg";
    txtList[currentNo].className = "txtItem heighlightColor";
   
}

function leftImg()
{     
    if (currentNo > 0) 
    { 
        currentNo--; 
    }
    else {
        currentNo = 7;
    } 
}

function rightImg() 
{
    if (currentNo < 7) 
    { 
        currentNo++; 
    }
    else 
    {
        currentNo = 0;
    }  
}


var timer = window.setInterval(rightImgGo, 1000);

function stopChange() 
{
    window.clearInterval(timer);
 
}

function startChange() 
{
    timer = window.setInterval(rightImgGo, 1000);
}


var sliderX = document.querySelector(".slider");

sliderX.addEventListener('mouseover', stopChange);
sliderX.addEventListener('mouseout', startChange);


for (var i = 0; i < txtList.length; i++)
 {
    txtList[i].addEventListener('mouseover', gotoImg);
    txtList[i].no = i;
}


function gotoImg()
 {
    currentNo = this.no;
    changeImg();
}

var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');

leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);

function leftImgGo()
{
    leftImg();
    changeImg();
}

function rightImgGo()
{
    rightImg();
    changeImg();
}

