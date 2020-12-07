$(function(){
    var about=$(".about")[0];
    var aboutskl=$(".about-skill");
    var aboutpers=$(".skill-percent");
    /*$(about).hover(function(){
        for(var i=0;i<$("aboutskl").length;i++){
            var pers=$("aboutpers").ep(i).text();
            $("aboutskl").ep(i).css({"width":pers});
        }
    })*/
    
    $(about).mouseover(function(){

       /* for(var i=0;i<$(this).length;i++){
            this.index=i;
            var pers=$(aboutpers).eq(this.index).text();
            $(this).eq(this.index).children("span").css({"width":pers});
        }*/
        var skl;var spans;var aa;
        $(aboutpers).each(function(index,obj){
            skl= $(aboutskl).eq(index);
            aa= $(obj).html();
            spans=$(skl).find("span").css("width",aa);
        })
        /*spans.eq(this.index).css("width",aa)
        $(aboutpers).each(function(index,obj){
            var skl= $("aboutskl").eq(index);
            var span= $("skl").is("span");
            var aa= $(obj).html();
            $("span").css("width",aa);
        })*/
       /* var span= $($($(aboutskl).eq(index)).is("span"))
        var aa= $($($(aboutskl).eq(index)).is("span")).html();
        $($($(aboutskl).eq(index)).is("span")).css({width:aa+"px"});
        var bb=$($($(aboutskl).eq(index)).is("span")).css("width");
        alert(index);
        alert(bb);*/
        /*var pers=$("aboutpers").eq(0).html();
        var perst=pers;
        alert(perst);
        $(this).eq(0).children("span").css({"width":perst});
        var pers1=$("aboutpers")[1].html(); alert(pers);
        $(this).eq(1).children("span").css({"width":pers1});
        var pers2=$("aboutpers")[2].html(); alert(pers1);
        $(this).eq(2).children("span").css({"width":pers2});
        var pers3=$("aboutpers")[3].html(); alert(pers2);
        $(this).eq(3).children("span").css({"width":pers3});
        var pers4=$("aboutpers")[4].html(); alert(pers3);
        $(this).eq(4).children("span").css({"width":pers4});
        var pers5=$("aboutpers")[5].html();4
        $(this).eq(5).children("span").css({"width":pers5});*/
    })
    var top=500;
    /*while($(".about").scrollTop()>=top){
        for(var i=0;i<$(".aboutskl").length;i++){
            var pers=$(".aboutpers").ep(i).text();
            $(".aboutskl").ep(i).css({"width":pers});
        }
    }*/




   /* about

    skill-percent
    var top="731";//无Px
    // 出现两次不行window.onscroll=function(){
    window.onscroll=function(){
        var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
        */
})