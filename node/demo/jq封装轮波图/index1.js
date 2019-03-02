(function () {
    function Init(options) {
        this.parent = options.parent;
        this.width = options.width || this.parent.width();
        this.height = options.height || this.parent.height();
        this.direction = options.direction || "next";
        this.speed = options.speed || 1500;
        this.images = options.images;
        this.index = 0;
        this.lock = false;
        this.timer = null;
        this.createDom()
        this.createCss()
        this.bindEvent()
        this.autoPlay()
        this.changeIndex()
    }
    Init.prototype.createDom = function () {
        var imagesArr = this.images;
        var imagesLen = imagesArr.length
        var ul = $("<ul></ul>")
        var indexDiv = $("<div class ='indexDiv'></div>")
        var addImg = imagesArr[0]
        var liStr = ""
        var indexStr = ""
        $.each(imagesArr, function (index, ele) {
            liStr += `<li>
                        <img src="${ele}">
                   </li>`
        })
        for (var i = 0; i < imagesLen; i++) {
            indexStr += "<span class='index'></span>"
        }
        $(ul).append(liStr).append($('<li><img src="' + addImg + '"/></li>'))
        $(indexDiv).append(indexStr)
        $(this.parent)
            .append($(ul))
            .append($("<span class = 'btn leftBtn'>&lt;</span>"))
            .append($("<span class = 'btn rightBtn'>&gt;</span>"))
            .append($(indexDiv))


    }
    Init.prototype.createCss = function () {
        $('*').css({
            padding: 0,
            margin: 0,
        })
        $(this.parent)
            .css({
                position: "relative",
                height: this.height,
                width: this.width,
                overflow: 'hidden'
            })
            .find('ul')
            .css({
                position: 'absolute',
                width: this.width * (this.images.length + 1),
                height: this.height,
                listStyle: "none"
            })
            .find("li")
            .css({
                float: 'left',
                width: this.width,
                height: this.height
            })
            .find('img')
            .css({
                width: this.width,
                height: this.height
            })
        $(".btn")
            .css({
                display: "none",
                position: "absolute",
                top: this.height / 2,
                marginTop: -this.width / 20,
                width: this.width / 10,
                height: this.width / 10,
                borderRadius: "50%",
                backgroundColor: "rgba(255,0,255,.3)",
                fontSize: this.width / 10 * 3 / 4 + "px",
                lineHeight: this.width / 10 + "px",
                textAlign: "center",
                cursor: "pointer"
            })
        $('.leftBtn').css({ left: 40 })
        $('.rightBtn').css({ right: 40 })
        $(".indexDiv").css({
            display: "flex",
            'justify-content': 'space-around',
            width: this.width / 2,
            position: "absolute",
            left: "50%",
            marginLeft: -this.width / 2 / 2,
            bottom: "40px",

        })
            .find('span').css({
                display: "inline-block",
                width: 20,
                height: 20,
                margin: "0 10px",
                backgroundColor: "white",
                borderRadius: '50%',
                cursor: "pointer"
            })
    }
    Init.prototype.bindEvent = function () {
        var self = this
        $(this.parent).hover(function () {
            $('.btn').fadeIn()
            clearInterval(self.timer)
        }, function () {
            $('.btn').fadeOut()
            self.autoPlay()
        })
        $('.rightBtn', this.parent).on("click", function () {
            clearInterval(self.timer)
            self.move("next")

        })
        $('.leftBtn', this.parent).on("click", function () {
            clearInterval(self.timer)
            self.move("prev")
        })
        $(".indexDiv",this.parent).on("click","span",(e)=>{
           this.move($(e.target).index()) 
        })
    }
    Init.prototype.autoPlay = function () {
        this.timer = setInterval(() => {
            this.move(this.direction)
        }, this.speed)
    }
    Init.prototype.move = function (dir) {
        if (this.lock) {
            return false
        }
        this.lock = true

        if (dir == "next") {
            if (this.index == this.images.length) {
                this.index = 0
                $("ul", this.parent).css({ left: 0 })
            }
            this.index ++
            $('ul', this.parent).animate({
                left: - (this.index * this.width)
            }, 1000, () => {
                this.lock = false
                this.changeIndex()
            })
        } else if (dir == "prev") {
            if (this.index == 0) {
                this.index = this.images.length
                $("ul", this.parent).css({ left: -(this.index * this.width) })
            }
            this.index -- 
            $('ul', this.parent).animate({
                left: - (this.index * this.width)
            }, 1000, () => {
                this.lock = false
                this.changeIndex()
            })
        }else if(typeof dir == "number"){
            this.index = dir
            $('ul', this.parent).animate({
                left: - (this.index* this.width)
            }, 1000, () => {
                this.lock = false
                this.changeIndex()
            })
        }


    }
    Init.prototype.changeIndex = function () {
        $(".index",this.parent).css({backgroundColor:"#fff"})
       
        if(this.index == this.images.length){
            $(".index",this.parent).eq(0).css({backgroundColor:"#f40"})
        }else{
            $(".index",this.parent).eq(this.index).css({backgroundColor:"#f40"})
        }
    }
    $.fn.extend({
        swider: function (options) {
            options.parent = this;
            new Init(options)
        }
    })
})()