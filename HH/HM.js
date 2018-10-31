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

    //轮播图
// window.onload=function()
//  {
//     function banner()
//  {
//     var banner=document.querySelector('.hm_banner');
//     var w=banner.offsetWidth;
//     var imageBox=banner.querySelector('ul:first-child');
//     var pointBox=banner.querySelector('ul:last-child');
//     var points=pointBox.querySelector('li');
//     var addTransition=function()
//     {
//         imageBox.style.webkitTransition="all .2s";
//         imageBox.style.transition="all .2s";
//     };
//     var removeTransition=function()
//     {
//           imageBox.style.webkitTransition="none";
//           imageBox.style.transition="none";
//     };
//     var setTranslateX=function(translateX)
//     {
//         imageBox.style.webkitTransform="translateX("+translateX+"px)";
//         imageBox.style.transform="translateX("+translateX+"px)";
//     };
//     var index=1;
//     var timer=setInterval(function()
//     {
//         index ++;
//         addTransition();
//         setTranslateX(-index*w);
//     },4000);
//     itcast.transitionEnd(imageBox,function()
//     {
//         console.log('transitionEnd');
//         if(index>=9)
//         {
//             index=1;
//             removeTransition();
//             setTranslateX(-index*w);
//         }
//         else if(index<=0)
//         {
//             index=8;
//             removeTransition();
//             setTranslateX(-index*w);
//         }
//         setPpint();
//     });
//     var setPoint=function()
//     {
//         for(var i=0; i<points.length; i++)
//         {
//             points[i].className=" ";
//         }
//         points[i].className="now";
//     }
//     var startX=0;
//     var moveX=0;
//     var distanceX=0;
//     var isMove=false;

//     imageBox.addEventListener('touchstart',function(e)
//     {
//         clearInterval(timer);
//         startX=e.touches[0].clientX;
//     });
//     imageBox.addEventListener('touchmove',function(e)
//     {
//         isMove=true;
//         moveX=e.touches[0].clientX;
//         distanceX=moveX-startX;
//         console,log(distanceX);
//         var currX=-index*w+distanceX;
//         removeTransition();
//         setTranslateX(currX);
//     });
//     imageBox.addEventListener('touchend',function(e)
//     {
//         if(isMove && (Math.abs(distanceX)>w/3))
//         {
//             if(distanceX>0)
//             {
//                 index --;
//             }
//             else
//             {
//                 index ++;
//             }
//             addTransition();
//             setTranslateX(-index*w);
//         }
//         else
//         {
//             addTransition();
//             setTranslateX(-index*w);
//         }
//         startX=0;
//         moveX=0;
//         distanceX=0;
//         isMove=false;
//         clearInterval(timer);
//         timer=setInterval(function()
//         {
//             index ++;
//             addTransition();
//             setTranslateX(-index*w);
//         },4000)
//     });
//  }
// }





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

