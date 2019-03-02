var $ = require('jquery')
var li = $('.item_li')
var len = li.length
var wrapper = $('.wrapper')
var d
$('button').click(function () {
    change()
})
function change() {

    wrapper.toggleClass('open')
    var deg = 360 / len
    for (var i = 0; i < len; i++) {
        var d = deg * i
        wrapper.hasClass('open') ? rotate($(li[i]),d) : rotate($(li[i]),-d)
    }

}
function rotate(l, d) {
    l.css({
        transform: 'rotate(' + d + 'deg) '
    }).find('label').css({
        transform: 'rotate(' + (-d) + 'deg) '
    })
}