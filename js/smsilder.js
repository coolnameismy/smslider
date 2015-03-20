

$(function () {
	
	//取消carousel自动滚动
	 setTimeout(function(){
			$('.carousel').carousel('pause');
	 },1000)

	//获取图片数量
	imgCount = $(".silderThun .wrap img").size();
	
	 //绑定左右点击事件
    $(".left").click(function () {
    	if(isEnableEvent){
    		//设置当前页
        	cur_img_index = cur_img_index-1;
        	if(cur_img_index<0) cur_img_index=imgCount-1;
        	SilderScrol();
        	preventEvent();
        	$('.carousel').carousel('prev')
    	}
    })
     $(".right").click(function () {
    	 if(isEnableEvent){
    		//设置当前页
    	     	cur_img_index = cur_img_index+1;
    	     	if(cur_img_index >= imgCount) cur_img_index=0;
    	     	SilderScrol();
    	     	preventEvent();
    	     	$('.carousel').carousel('next')
    	 }
    })
    //绑定图片点击事件
    $(".silderThun .wrap img").click(function () {
    	cur_img_index =  $(this).index()-1;
    	$('.carousel').carousel(cur_img_index);
    	setImageSelectStyle();
    	SilderScrol();
    	preventEvent();
    })
    
})

var cur_img_index = 0;
var curr_silderThun_scroll = 0;
var scroll_offset = 125;//箭头偏右数scroll_offset减，箭头偏左scroll_offset加
var imgCount = 0;
var isEnableEvent = true;

var SilderScrol = function(){
	  
	   $(".silderThun").animate({scrollLeft:cur_img_index*scroll_offset},300);
	   setImageSelectStyle();
	
}
var setImageSelectStyle = function(){
	   $(".silderThun .wrap img").each(function(){
		   $(this).removeClass("cur");
	   })
	   $(".silderThun .wrap img:eq("+cur_img_index+")").addClass("cur");
}
var preventEvent = function(jqueryObj){	
	isEnableEvent = false;
	 setTimeout(function(){
		 isEnableEvent = true;//将按钮可用
	 },1000)
	
}


 