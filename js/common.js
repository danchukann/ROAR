$(document).ready(function(){
    $(".select-style label #classic").click(function(){
        $(this).addClass("checked");
        $(".select-style label #mix").removeClass("checked");
        $(".select-style label #bold").removeClass("checked");
    });
    $(".select-style label #mix").click(function(){
        $(this).addClass("checked");
        $(".select-style label #classic").removeClass("checked");
        $(".select-style label #bold").removeClass("checked");
    });
    $(".select-style label #bold").click(function(){
        $(this).addClass("checked");
        $(".select-style label #mix").removeClass("checked");
        $(".select-style label #classic").removeClass("checked");
    });
});

$(document).ready(function(){
    $(".items-container-gender .item #men").click(function(){
        $(this).addClass("yellow");
        $(".items-container-gender #women").removeClass("yellow");
        
    });
    $(".items-container-gender #women").click(function(){
        $(this).addClass("yellow");
        $(".items-container-gender #men").removeClass("yellow");
        
    });
});

$(document).ready(function(){
    $(".items-container-size #s").click(function(){
        $(this).addClass("yellow");
        $(".items-container-size #m").removeClass("yellow");
        $(".items-container-size #l").removeClass("yellow");
        $(".items-container-size #xl").removeClass("yellow");
    });
    $(".items-container-size #m").click(function(){
        $(this).addClass("yellow");
        $(".items-container-size #s").removeClass("yellow");
        $(".items-container-size #l").removeClass("yellow");
        $(".items-container-size #xl").removeClass("yellow");
    });
    $(".items-container-size #l").click(function(){
        $(this).addClass("yellow");
        $(".items-container-size #m").removeClass("yellow");
        $(".items-container-size #s").removeClass("yellow");
        $(".items-container-size #xl").removeClass("yellow");
    });
    $(".items-container-size #xl").click(function(){
        $(this).addClass("yellow");
        $(".items-container-size #m").removeClass("yellow");
        $(".items-container-size #l").removeClass("yellow");
        $(".items-container-size #s").removeClass("yellow");
    });
});

