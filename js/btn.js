$(function(){
    var scene=$(".scene");
    var height=offsetWindow().height;
    for (var i = scene.length - 1; i >= 0; i--) {
        scene[i].style.height=height+"px";
    };
    var box=$(".box")[0];
    var num=0;
    /* mousewheel(box,function(){

     num--;if (num<0) {num=0};
     animate(box,{marginTop:-num*height},500);


     },function(){

     num++;if (num>4) {num=4};
     animate(box,{marginTop:-num*height},500);
     })*/

    /**/
    var btns=$("div",$(".btnbox")[0]);
    // newnum=this.index;
    var z=2;

    for (var i = 0; i < btns.length; i++) {
        btns[i].index=i;

        btns[i].onclick=function(){
            var newnum=this.index;//var newnum=btns[i].index;
            if (newnum>num) {
                scene[this.index].style.top=height+"px";
                scene[this.index].style.zIndex=z++;
                animate(scene[this.index],{top:0},500);
                animate(scene[num],{top:-height},500);
                // scene[num].style.top=0+"px";
                // scene[this.index].style.top=height+"px";

                num=this.index;

            }else{

                scene[this.index].style.top=-height+"px";
                scene[this.index].style.zIndex=z++;
                animate(scene[this.index],{top:0},500);
                animate(scene[num],{top:height},500);
                // scene[num].style.top=0+"px";
                num=this.index;

                // scene[num].style.top=0+"px";

            };

        }}
})