var pageEngine = {
    init(selector, configColorArr) {
        this.configColorArr = configColorArr
        this.$W = $(selector)
        return this
    },
    addSection(className) {
        this.$section = $('<div class="section"></div>').addClass(className)
        this.$section.appendTo(this.$W)
        this.sliderFlag = false
        return this
    },
    addSlider(className) {
        this.$slider = $('<div class="slider"></div>').addClass(className).css({position:"relative"})
        this.$slider.appendTo(this.$section)
        this.sliderFlag =true
        return this
    },
    addComponent(config){
        var cmp = null
        switch(config.type){
            case "base":
            cmp = component(config);
            break;
        }
        this.sliderFlag ? this.$slider.append(cmp) : this.$section.append(cmp)
        return this
    },
    bindEvent(){
        this.$W.find('.section').on({
            _leave:function(){
                $(this).find(".component").trigger("cmpLeave")
            },
            _load:function(){
                $(this).find(".component").trigger("cmpLoad")
            }

        })
    },
    load(){
        var self = this
        this.bindEvent()
        this.$W.myFullpage({
            configColor:this.configColorArr,
            onLeave(index){
                self.$W.find(".section").eq(index).trigger("_leave")
            },
            afterLoad(index){
                self.$W.find(".section").eq(index).trigger("_load")
            }
            
        })
        
    }


}
