



var initSmSilder = function(smSilderconfig){
    //初始化数据
    var cur_img_index = 0;//当前slider的index
    var isEnableEvent = true;
    var scroll_offset = smSilderconfig.scroll_offset || 115;//小图偏右scroll_offset减，小图偏左scroll_offset加
    var imgCount = smSilderconfig.imgData.length || 0;//图片总数

    //取消carousel自动滚动
    setTimeout(function(){
        $('.carousel').carousel('pause');
    },1000)

    if(imgCount==0){
        //获取图片数量
        imgCount = $(".wrap img").size();
    }
    else{
        //构造dom
        var ssilderImageHtmlString = "";
        var msilderImageHtmlString = "<div class=\"placeholder\"></div>";
        for(var i=0;i<imgCount;i++){
            if(i==0){
                ssilderImageHtmlString += " <div class=\"item active\"><img src='"+ smSilderconfig.imgData[i].src+"'></div>";
                msilderImageHtmlString += " <img class=\"cur\" src='"+ smSilderconfig.imgData[i].src+"'>";
            }
            else{
                ssilderImageHtmlString += " <div class=\"item\"><img src='"+ smSilderconfig.imgData[i].src+"'></div>";
                msilderImageHtmlString += " <img src='"+ smSilderconfig.imgData[i].src+"'>";
            }

        }
        msilderImageHtmlString+= "  <div class=\"placeholder\"></div>";
        $('.slider .carousel-inner').html(ssilderImageHtmlString);
        $('.slider .silderThun .wrap').html(msilderImageHtmlString);
    }

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
}




//var cur_img_index = 0;
//var curr_silderThun_scroll = 0;
//var scroll_offset = 125;//箭头偏右数scroll_offset减，箭头偏左scroll_offset加
//var imgCount = 0;
//var isEnableEvent = true;



 