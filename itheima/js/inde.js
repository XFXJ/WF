$(function()
{
    bannner();
    $('[data-toggle="tooltip"]').tooltip();
});

function bannner()
{
    var myData;
    var getData=function(callback)
    {
        if(myData)
        {
            callback && callback(myData);
            return false;
        }
        $.ajax({
            url:'js/inde.json',
            type:'get',
            data:{},
            dataType:'json',
            success:function(data)
            {
                myData=data;
                callback && callback(myData);
            }
        });
    };
    var render=function()
    {
        var width=$(width).width();
        var isMobile=false;
        if(width<=768)
        {
            isMobile=true;
        }
        getData(function(data)
        {
            var templatePoint=_.template($('#template_point').html());
            var templateImage=_.template($('#template_image').html());
            var htmlPoint=templatePoint({model:data});
            var htmlImage=templateImage({model:data,isMobile:isMobile});

            $('.carousel-indicators').html(htmlPoint);
            $('.carousel-inner').html(htmlImage);
        });
    };
    $(width).on('resize',function()
    {
        render();
    }).trigger('resize');
    var startX=0;
     var moveX=0;
     var distanceX=0;
     var isMove=false;
     $('.carousel-inner').on('touchstart',function(e)
     {
         startX=e.originalEvent.touches[0].clientX;
     });
     $('.carousel-inner').on('touchmove',function(e)
    {
        moveX=e.originalEvent.touches[0].clientX;
        distanceX=moveX-startX;
        isMove=true;
    });
    $('.carousel-inner').on('touchend',function(e)
    {
        if(Math.abs(distanceX)>50 && isMove)
        {
            if(distanceX>0)
            {
                $('.carousel').carousel('prev');
            }
            else
            {
                $('.carousel').carousel('next');
            }
        }

    });
}