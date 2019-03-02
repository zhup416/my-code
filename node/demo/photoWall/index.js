var wrap = $('.wrapper')
var wrapWidth = wrap.width()
var wrapHeight = wrap.height()
var liWidth = wrapWidth / 5;
var liHeight = wrapHeight / 5;
init()
function init() {
    createWall()
    bindEvent()
}
function createWall() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            $('<li><div><img src="./src/img/' + (i * 5 + j) + '.jpg"></div></li>')
                .css({
                    'width': liWidth + 'px',
                    'height': liHeight + 'px',
                    'top': i * liHeight + 'px',
                    'left': j * liWidth + 'px',
                    'transform': 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg) translateX(' + (Math.random() * 50 - 30) + 'px) translateY(' + (Math.random() * 50 - 30) + 'px) translateZ(' + (Math.random() * 500 - 500) + 'px)'

                })
                .appendTo(wrap)
        }
    }
}
function bindEvent() {
    var change = true;
    wrap.find('li').on('click', function () {

        if (change) {
            var bgImg = $(this).find('img').attr('src')
            var bgLeft = 0, bgTop = 0;
            $('li').each(function (index) {
                var $this = $(this)
                $this.delay(index * 10).animate({ 'opacity': 0 }, 200, function () {
                    $this.css({
                        'transform': 'rotate(0deg) translateX(0px) translateY(0px) translateZ(0px)'
                    })
                })
                $this.find('img').attr('src', bgImg).css({
                    'position': 'absolute',
                    'width': wrapWidth + 'px',
                    'height': wrapHeight + 'px',
                    'left': -bgLeft,
                    'top': - bgTop,
                })
                bgLeft += liWidth
                if (bgLeft >= wrapWidth) {
                    bgLeft = 0
                    bgTop += liHeight
                }
                $(this).delay(500).animate({ 'opacity': 1 }, 1000)
            })
            change = false
        } else {
            change = true
            $('li').each(function (index) {
                var i = index % 5
                var j = Math.floor(index / 5)
                $(this).animate({ 'opacity': 1}, 200, function () {
                    $(this).find('img').css({
                        'position': 'absolute',
                        'width': '100%',
                        'height': '100%',
                        'left': 0,
                        'top': 0,
                    })
                    $(this).find('img').attr('src', './src/img/' + (i * 5 + j) + '.jpg')
                    $(this).css({
                        'transform': 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg) translateX(' + (Math.random() * 50 - 30) + 'px) translateY(' + (Math.random() * 50 - 30) + 'px) translateZ(' + (Math.random() * 500 - 500) + 'px)'
                    })
                })

            })
        }
    })
}