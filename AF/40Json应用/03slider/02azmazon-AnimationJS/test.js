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
var imagesA=document.getElementById('images').children;
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
function changeImg()
{//排他原理，先去掉同类
    for(var i=0;i<imagesA.length;i++)
    {
        imagesA[i].className="hiddenImg";
    }
    // for(const item of imagesA)
    // {
    //     item.className="hiddenImg"
    // }
//再突出自己
    imagesA[currentNo].className="displayImg";
//换个元素，为下一次计时器调用做准备
imagesA[currentNo].className="displayImg";
if(currentNo<7)
{
    currentNo ++;
}
else
{
    currentNo=0;
}
}
var timer=window.setInterval(changeImg,1000);


var imagesX=document.querySelector('#images')
console.log(imagesX);
function startChange()
{
    timer=window.setInterval(changeImg,1000);
}

function stopChange()
{
    window.clearInterval(timer);
   
}

imagesX.addEventListener('mouseover',stopChange);
imagesX.addEventListener('mouseout',startChange);