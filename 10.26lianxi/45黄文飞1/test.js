// var hiddenImg=document.querySelector('.hiddenImg')
// console.log(hiddenImg);
//css选择器
// var img4=document.querySelector('#images>a:nth-child(4)');
// //id
// var img4=document.getElementById('images').children[4];
// //类名
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名
// var img4=document.getElementsByName('a')[4];

// console.log(img4);

// img4.style.display="block";



//获取一组带图的超链接

var imagesA=document.getElementById("images").children;
// var txtList=document.querySelectorAll(".txtItem");
var txtList=document.querySelector('.txtbox').children;
// console.log(imagesA);

// var imagesb=document.getElementById('images').children;
// console.log(imagesb);

// imagesb[0].style.display="none";
// imagesb[4].style.display="block";

// console.log(imagesb[4].herf);

// imagesb[0].className="hiddenImg";
// imagesb[4].className="displayImg";

//利用计时器间隔1秒显示一张图片，其他隐藏
var currentNo=0;
const nodeLength=8;

function changeImg()
{//排他原理，先去掉同类
    var nodeLength=txtList.length
    for(var i=0;i<nodeLength;i++)
    {
        imagesA[i].className="hiddenImg";
        txtList[i].className="txtItem normalColor";
    }
    // for(const item of imagesA)
    // {
    //     item.className="hiddenImg"
    // }
//再突出自己
    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem heighlightColor";
//换个元素，为下一次计时器调用做准备

if(currentNo<7)
{
    currentNo ++;
}
else
{
    currentNo=0;
}
}

function leftImg()
{
    if(currentNo>0)
    {
        currentNo --;
    }
    else
    {
        currentNo=7;
    }
   
}

function rightImg()
{
    if(currentNo<7)
    {
        currentNo ++;
    }
    else
    {
        currentNo=0;
    }
  
}

var timer=window.setInterval(rightImgGo,1000);


// console.log(sliderX);
function stopChange()
{
    window.clearInterval(timer);
   
}
function startChange()
{
    timer=window.setInterval(rightImgGo,1000);
}

var sliderX=document.querySelector('.slider');

sliderX.addEventListener('mouseover',stopChange);
sliderX.addEventListener('mouseout',startChange);

// 为所有文本Li注册鼠标移入事件，移入之后，当前Li高亮，跳转到对应图片
for(var i=0;i<txtList.length;i++)
{
txtList[i].addEventListener('mouseover',gotoImg);

txtList[i].no=i;
// console.log(txtList[i].no);
}
function gotoImg()
{
// console.log(this.no);
currentNo=this.no;
changeImg();
}

var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');

leftButton.addEventListener('click',leftImgGo);
rightButton.addEventListener('click',rightImgGo);

function leftImgGo()
{
    leftImg();
    changeImg();
}
function rightImgGo()
{
    leftImg();
    changeImg();
}
