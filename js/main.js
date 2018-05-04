$(document).ready(function () {
 
    var count = $('.top ul li').length;
    var img_width = $('.top ul li img').css('width');
    var ul_width = count * parseInt(img_width);
    $('.top ul').css('width', ul_width + "px");
 
    var list = $('.top ul li');
    var topleft = 0;
    list.each(function () {
        $(this).css('left', topleft);
        topleft += $(this).width();
    });
 
 
    setInterval(function () {
        list.each(function () {
            var left_pos =parseInt($(this).css('left'));
            $(this).css('left', left_pos - 1000);
            if(left_pos==-1000){
                $(this).css({
                    left:'1000px',
                    opacity:0
                });
            }else {
                $(this).css('opacity','1');
            }
        });
       
    }, 2100);
 
 
});
