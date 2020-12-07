$(function(){
    var left=$(".tul");
    var right=$(".tur");
    var tulun=$(".tulun");
    var box=$(".tulunbox");
  // ti1=setInterval(fmove(),3000);
 // $(".tul").click(function(){
 	
    // $(".tulunbox").animate({left:"-260px"},1000);
    // var fi=$(".tulunbox").is("img:first");
    // $(".tulunbox").append("div:fi");

	    	var num=1;
	    	setInterval(function(){
	    		
	    		if (num==3) {
	    			$(box).animate({left:-260*num},500,function(){
	    				$(this).css("left","0");
	    				num=1;
	    			});// num=0;
	    			// box.style.left=0;
	    		}else{
	    		$(box).animate({left:-260*num},500);
                num++;}
                // animate(box,{left:-810*num},500);
                // num++;

	    	},2000);	

      /*$(".tulunbox").each(function(index,obj){
      	 
      	    $(this).animate({left:"-260px"},1000);
            $(this).is("img:first").end().appendTo("this").css("left","0px");

            // $(this).first();
            // $(this).append(first);
            // $(this).css("left","0px");
    
  


	  })*/
  


    /*$(tulunbox).animate({left:"-33.33%"},1000,function(){
    	$(tulunbox).each(function(index,obj){
            var first=$(this).first();
            $(this).append(first);
            $(this).css("left","0px");
    	})
      
    }) */

  /*var ti1;
  $(left).click(function(){
    ti1=fmove();
  });
  $(right).click(function(){
  	$(tulunbox).each(function(index,obj){
            var last=$(this).last();
            $(this).prepend(last);
            $(this).css("left","-33.33%");
            $(this).animate({left:"0"},1000);
    	})
  	// var last=$(tulunbox).last();
  	// $(tulunbox).prepend(last);
   //      $(tulunbox).css("left","-33.33%");
   //      $(tulunbox).animate({left:"0"},1000);
  })*/
  
  // $(left).hover(function(){clearInterval(ti1);}
  // ,function(){
  //      ti1=setInterval(fmove(),1000)});
  
  //  $(right).hover(function(){
  // $(right).click(
  //       $(tulunbox).append($(tulunbox).first())
  //       $(tulunbox).css("left","-33.33px");
  //       $(tulunbox).animate({left:"0"},1000);)
  // })

// })
})