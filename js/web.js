$(function(){
    var down=$(".downwork");
    var er=$(".erweima");
    $(down).hover(function(){
        $(er).slideDown();
    },function(){
        $(er).slideUp();
    })
    $(".upwork").each(function(index){
		$(this).hover(function(){
			$(".work-con").finish();//不写，快速移入移除时，离开动画没执行完，不执行移入动画
			$(".work-con").css("display","none");
			$(this).css({"animation":"scale 500ms linear"}).find("div[class*='work-con']").css("display","block").animate({width:"100%"},500);
		},function(){
			$(this).css({"animation":"scale2 500ms linear"}).find("div[class*='work-con']").animate({width:0},500,
				function(){
					$(".work-con").css("display","none");
				})
		})
	})
	$(".downwork").each(function(index){
		$(this).hover(function(){
			$(".erweima").finish();//不写，快速移入移除时，离开动画没执行完，不执行移入动画
			$(".erweima").css("display","none");
			$(this).find("div[class*='erweima']").css("display","block").animate({height:"150px",top:"-150px"},500);
		},function(){
			$(this).find("div[class*='erweima']").animate({height:0,top:0},500,
				function(){
					$(".erweima").css("display","none");
				})
		})
	})
	/*$(".downwork").each(function(index,obj){
		$(this).hover(function(){
			// $(obj).find("div[class*='erweima']").css("display","block");
			$(this).find("div[class*='erweima']").css({"height":"150px","top":"-150px","display":"block"});
		},function(){
			$(this).find("div[class*='erweima']").css("height",0);
			$(".downwork").find("div[class*='erweima']").css("display","none");
		})
	})*/
})