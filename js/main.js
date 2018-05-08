$(document).ready(function(){
    
    //배너 광고 열기
    $(".wrap section .top_right button").click(function(){
       $("body .ad").removeClass("btn_close"); 
    });
    
    //배너 광고 닫기
    $(".ad button").click(function(){
       $("body .ad").addClass("btn_close"); 
    });
    
    //서브메뉴 드롭다운
    
    $(".wrap .main li").hover(function(){
        $("ul",this).slideToggle("fast");
    });
    
    //슬라이드 쇼
    
    var count = $('.wrap .visual ul li').length;
    var img_width = $('.wrap .visual ul li img').css('width');
    var ul_width = count * parseInt(img_width);
    
    $('.wrap .visual ul').css('width',ul_width+"px");
    
    var list = $('.wrap .visual ul li')
    var visual_left = 0;
    
    list.each(function(){
       $(this).css('left',visual_left);
        visual_left += $(this).width();
    });
    
    setInterval(function(){
       
        list.each(function(){
           var left_pos = parseInt($(this).css('left'));
            
            $(this).css('left',left_pos - 1000);
            
            if(left_pos==-1000){
                $(this).css({left:'1000px'});
                $(this).children().css({display:'none'});
            } else {
                $(this).children().css({display:'inline-block'});
            }
        });
    },2000);
   
    
});//다큐멘트 레디 펑션

//start();
 //var imgs =2;
 //var now =0;
/*
function start() {
    $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval(function(){slide();},2000);
}


function slide() {
    now = now ==imgs ?0 : now +=1;
    $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".imgs>img").eq(now).css({"margin-left":"0px"});
}
*/
