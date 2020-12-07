$(function(){
    var exp=$(".experience");
    var top=$(".exp-top");
    var center=$(".exp-center");
    var bottom=$(".exp-bottom");
    $(exp).mouseover(function(){
        $(top).css("left","15%");
    })
    $(exp).mouseover(function(){

        $(center).css("right","5%");
    })
    $(exp).mouseover(function(){

        $(bottom).css("left","15%");
    })
})