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