$(document).ready(function(){
   
    var topLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".top img");
    var $first;
    var $last;
    
    $img.each(function(){
       $(this).css("left",topLeft);
        topLeft += $(this).width();
        $(this).attr("id","banner"+(++imgCnt));
    });
    
    if(imgCnt > 2) {
        
        last = imgCnt;

        setInterval(function(){
            
            $img.each(function(){
             $(this).css("left", $(this).position().left-1000);   
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            
            
            if($first.position().left < 0) {
                $first.css(             "left",$last.position().left);
                             
                first++;
                last++;
                
                if(last > imgCnt) {last = 1;}
                if(first > imgCnt) {first = 1;}
            }
        },2000);
    }
    
});//레디펑션