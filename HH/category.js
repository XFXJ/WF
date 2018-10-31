window.onload=function()
{
    leftSwipe();
    itcastt.iScorll({
        swipeDom:document.querySelector('.hm_category_right'),
        swipeType:'y',
        swipeDistance:100
    });
};
// 左侧的滑动效果
function leftSwipe()
{
    var parentBox=document.querySelector('.hm_category_left');
    var childBox=parentBox.querySelector('ul');
    var parentHeight=parentBox.offsetHeight;
    var childHeight=childBox.offsetHeight;

    var maxPosition=0;
    var minPosition=parentHeight-childHeight;
    var distance=150;
    var maxSwipe=maxPosition+150;
    var minSwipe=minPosition-150;

    var addTransition=function()
    {
        childBox.style.webkitTransition="all .2s";
        childBox.style.transform="all.2s";
    };


    var removeTransition=function()
    {
        childBox.style.webkitTransition="none";
        childBox.style.transform="none";
    };

    var setTranslateY=function(setTranslateY)
    {
        childBox.style.webkitTransform="setTranslateY("+setTranslateY+"px)";
        childBox.style.transform="setTranslateY("+setTranslateY+"px)";
    };

    var startY=0;
    var moveY=0;
    var distanceY=0;

    var currY=0;
    childBox.addEventListener('touchstart',function(e)
    {
        startY=e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(e)
    {
        moveY=e.touches[0].clientY;
        distanceY=moveY-startY;

        if((currY+distanceY)<maxSwipe && (currY+distanceY)>minSwipe)
        {
            removeTransition();
            setTranslateY(currY+distanceY);
        }
    });
    window.addEventListener('touchend',function(e)
    {
        if((currY+distanceY)>maxPosition)
        {
            currY=maxPosition;
            addTransition();
            setTranslateY(currY);
        }
        else if((currY+distanceY)<minPosition)
        {
            currY=minPosition;
            addTransition();
            setTranslateY(currY);
        }
        else
        {
            currY=currY+distanceY;
        }
        startY=0;
        moveY=0;
        distanceY=0;
    });
    var lis=childBox.querySelectorAll('li');
    itcastt.tap(childBox,function(e)
    {
        for(var i=0;i<lis.length;i++)
        {
            lis[i].className=" ";
            lis[i],index=i;
        }
        var li=e.target.parentNode;
        li.className='now';
        console.log(li.index);
        var translateY=-li.index*50;
        if(translateY>minPosition)
        {
            currY=translateY;
            addTransition();
            setTranslateY(currY);
        }
        else
        {
            currY=minPosition;
            addTransition();
            setTranslateY(currY);
        }
    });
}