var component = function (config) {
    // var cmp = $("<div class = 'component' style='display:none;text-align:center'><span>duyi</span></div>")

    var cmp = $('<div class="component"></div>')
    // console.log(config)
    config.className && cmp.addClass(config.className)
    config.width && cmp.width(config.width)
    config.height && cmp.height(config.height)
    config.text && cmp.text(config.text)
    config.center && cmp.css({ position: "absolute", top: "50%", left: "50%", marginLeft: (-config.width / 2), marginTop: (-config.height / 2) })
    config.css && cmp.css(config.css)
    config.delay && cmp.delay(config.delay)
    if (config.bindEvent) {
        for (var eventType in config.bindEvent) {
            cmp.on(eventType, config.bindEvent[eventType])
        }
    }
    cmp.on("cmpLeave", function () {
        config.animateOut && $(this).animate({
            opacity: config.animateOut.opacity || 0
        }, config.animateOut.delay || config.delay || 0);
        // console.log("cmpLeave")
    })
    cmp.on("cmpLoad", function () {
        config.animateIn && $(this).animate({
            opacity: config.animateIn.opacity || 0
        }, config.animateIn.delay || config.delay || 0);
    })
    return cmp
}