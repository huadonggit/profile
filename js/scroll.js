$(function(){
    var scene=$(".scene");
    var height=offsetWindow().height;
    for (var i = scene.length - 1; i >= 0; i--) {
        scene[i].style.height=height+"px";
    };
    var box=$(".box")[0];
    var num=0;
    var flag1=true,flag2=true;
    mousewheel(box,function(){
        if (flag1==true) {
            flag1=false;
            num--;if (num<0) {num=0};
            animate(box,{marginTop:-num*height},500,function(){
                flag1=true;flag2=true;});
            //无效，继续滚动flag1=true;flag2=true;

        };

    },function(){
        if (flag2==true) {
            flag2=false;
            num++;if (num>5) {num=5};
            animate(box,{marginTop:-num*height},500,function(){
                flag1=true;flag2=true;});
            //flag1=true;flag2=true;
        }
    })

})

