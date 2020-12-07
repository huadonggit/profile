
window.onresize=function(){
    var widths=$(window).width();
    if(widths>=660){
        $(".nav1").css("display","block");
        $(".nav2").css("display","none");
    }else{
        $(".nav1").css("display","none");
        $(".nav2").css("display","block");
    }
}
$(function(){
    window.onresize();
    $(".nav2 .navright").click(function(){
        $(".navlist").slideToggle(300);
    })
})
