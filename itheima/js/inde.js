function initProduct()
{
    var tabs=$('.nav-tabs-product');
    var lis=tabs.find('li');
    $.each(lis,function(i,item)
    {
        width+=$(this).innerWidth();
    });
    tabs.width(width);

    itcast.iScroll(
        {
            swipeDom:document.querySelector('.nav-tabs-product-parent'),
            siwpeType:'x',
            swipeDistance:1000
        });
}