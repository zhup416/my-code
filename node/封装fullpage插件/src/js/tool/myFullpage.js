$.fn.extend({
    myFullpage: function (config) {
        var colorConfig = config.configColor;
        var $W = $(this);
        var $Section = $W.find('.section');
        var clientHeight = $(window).outerHeight();
        var clientWidth = $(window).outerWidth();
        var curIndex = 0;
        var SliderIndex = 0
        var lock = true;
        //初始化
        $('html')
            .add('body')
            .css({ position: "relative", overflow: "hidden", margin: 0 })
            .add($W)
            .add($Section)
            .css({ width: "100%", height: "100%" })
        $W.css({ position: "absolute", top: 0, left: 0 })
            .find($Section)
            .each(function (index, ele) {
                $(ele).css({ backgroundColor: colorConfig[index], position: "relative" })
                    .find(".slider")
                    .css({ width: clientWidth, height: clientHeight, float: "left" })
                    .wrapAll("<div class='sliderWrapper'></div>")
            })
        $Section
            .find(".sliderWrapper")
            .each(function (index, ele) {
                $(ele).css({ width: $(ele).find(".slider").length * clientWidth, height: clientWidth, position: 'absolute', top: 0, left: 0 })
            })
        //js控制
        $Section.eq(0).addClass("active")
            .end().find('.sliderWrapper').each(function (index, ele) {
                $(ele).find(".slider").eq(0).addClass("innerActive")
            })

        $(document).on("keydown", function (e) {

            if (lock) {

                if (e.which == 38 || e.which == 40) {
                    // 垂直
                    if (lock) {
                        lock = false
                        var curTop = $W.offset().top;
                        var direction = null
                        if (e.which == 38 && curIndex != $Section.length - 1) {
                            direction = "up"
                            config.onLeave(curIndex,direction)
                            curIndex++;
                            curTop -= clientHeight                          
                        } else if (e.which == 40 && curIndex != 0) {
                            direction = "down"
                            config.onLeave(curIndex,direction)
                            curIndex--
                            curTop += clientHeight  
                        }
                        $W.animate({
                            top: curTop
                        }, 400, function () {
                            lock = true;
                            if (direction == "up") {
                                $Section.eq(curIndex - 1).removeClass("active")
                            } else {
                                $Section.eq(curIndex + 1).removeClass("active")
                            }
                            $Section.eq(curIndex).addClass('active');
                            config.afterLoad(curIndex,direction)
                        })
                    }
                    
                } else if (e.which == 37 || e.which == 39) {
                    // 水平
                    if (lock) {
                        var $SW = $(".active").find('.sliderWrapper')
                        var CurSlider = $SW.find('.innerActive')
                        var sliderLen =  $SW.find('.slider').length //不存在时为 0
                        var sliderDirection = null
                       
                        if (e.which == 37 && SliderIndex != sliderLen -1 && sliderLen != 0) {//没有slider进不来
                            lock = false
                            SliderIndex ++   
                            var  curLeft = $SW.offset().left
                            curLeft -= clientWidth
                            sliderDirection = "left"                      
                        } else if (e.which == 39 && SliderIndex != 0) {
                            lock = false
                            SliderIndex --
                            var curLeft = $SW.offset().left
                            curLeft += clientWidth
                            sliderDirection = "right"
                        }
                        $SW.animate({
                            left: curLeft
                        }, 400, function () {
                            lock = true
                            sliderDirection != null ? CurSlider.removeClass('innerActive') : ''
                            if (sliderDirection == "left") {
                                CurSlider.next().addClass('innerActive')
                            } else if(sliderDirection == "right"){
                                CurSlider.prev().addClass('innerActive')
                            }
                        })

                    }
                    
                }
            }
        })

    }
})