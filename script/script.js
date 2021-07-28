$(function(){

    // GNB 시작(세로형 1열)
    // $(".mainLi").mouseover(function(){
    //     $(this).children("ul.subMenu").stop().slideDown(400);
    // });    
    // $(".mainLi").mouseout(function(){
    //     $(this).children("ul.subMenu").stop().slideUp(900);
    // });
    // GNB 끝(세로형 1열)

    // GNB 시작(세로형 2열)
    $(".mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(800);
    });    
    $(".mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });
    // GNB 끝(세로형 2열)



    // 슬라이드쇼 시작
    setInterval(fnSlide, 3000);
    
    // slideshow (세로형)
    // function fnSlide() {
    //     $("#shuttleFrame").animate(
    //         {"margin-top": "-350px"},
    //         1600,
    //         function() {
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({"margin-top": "0"});
    //         }
    //     );
    // }
    
    
    // slideshow (가로형)
    // function fnSlide() {
    //     $("#shuttleFrame").animate(
    //         {"margin-left": "-780px"},
    //         1600,
    //         function() {
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({"margin-left": "0"});
    //         }
    //     );
    // }
    
    
    // slideshow (교차 전환형)
    function fnSlide() {
        $("#slide a").eq(0).fadeOut(
            500,
            function(){
                $(this).insertAfter("#slide a:last-child");        
            }
            );
        $("#slide a").eq(1).fadeIn(1000)
    }
    // 슬라이드쇼 끝


    // 레이어 팝업 시작
    $("tr#popPoint").click(function(){
        $("div#layerBG").css("display", "block");
    });
    $("#closeBtnArea>button").click(function(){
        $("div#layerBG").css("display", "none");
    });
    // 레이어 팝업 끝



});