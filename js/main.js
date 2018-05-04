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
                
                // 다시 오른쪽으로 보내려는 엘리먼트를 일단 투명하게 만든다.
                $first.css("opacity","0");
                
                $first.css("left",$last.position().left);
                
                // 내가 작업했던 녀석을 기억하기 위해서 따로 저장해둔다.
                var $dd = $first;
                
                setTimeout(function() {
                    // 2초 뒤에 내가 아까 opacity 를 0으로 만들었던 녀석을 원상복구 시킨다.
                    $dd.css("opacity","1");
                }, 2000);
                             
                first++;
                last++;
                
                if(last > imgCnt) {last = 1;}
                if(first > imgCnt) {first = 1;}
            }
        },2000);
    }
    
});//레디펑션
