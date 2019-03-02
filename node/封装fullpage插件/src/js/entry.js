// $('.wrapper').myFullpage({
//     colorConfig: ["red", "blue", "green", "#666", "#f40"],
//     onLeave:function(index,direction){
//         // console.log(index,direction,'leave')
//         // $('.section').eq(index).trigger('_leave')
//         $('.section').trigger('_leave')
//         // console.log(this)
//         // console.log($(this))
//     },
//     afterLoad:function(index,direction){
//         // console.log(index,direction,'int')
//         $('.section').eq(index).trigger('_load')
//     }
// })
// var configArr =  {
//     type:"base"
//     width:500,
//     height:500,
//     className:"base",
//     text:"hello world",
//     center:true,
//     css:{
//         backgroundColor:"#fff"
//     },
//     delay:1000,
//     animateIn:{
//         opacity:1,
//         delay:1000,
//     },
//     animateOut:{
//         opacity:0.1,
//         delay:400,
//     },
//     bindEvent:{
//         mouseenter:function(){
//             console.log(0)
//         },
//         click:function(){
//             console.log(1)
//         }
//     }
// }
// $('.section').each(function(index,ele){
//     $(ele).append(component(configArr));
// })
// $('.section').on("_leave",function(){
//     $(this).find('.component').trigger("cmpLeave")
// })
// $('.section').on('_load',function(){
//     $(this).find('.component').trigger("cmpLoad")
// })

pageEngine.init('.container',["red", "blue", "green"])
    .addSection("section-1")
        .addComponent({
            type: "base",
            width: 500,
            height: 500,
            className: "base",
            text: "hello world section-1",
            center: true,
            css: {
                backgroundColor: "#999"
            },
            delay: 1000,
            animateIn: {
                opacity: 1,
                delay: 1000,
            },
            animateOut: {
                opacity: 0.1,
                delay: 400,
            },
            bindEvent: {
                mouseenter: function () {
                    console.log(0)
                },
                click: function () {
                    console.log(1)
                }
            }
        })
    .addSection("section-2")
    .addSlider("slider-1")
        .addComponent({
            type: "base",
            width: 500,
            height: 500,
            className: "base",
            text: "hello world slider-1",
            center: true,
            css: {
                backgroundColor: "red"
            },
            delay: 1000,
            animateIn: {
                opacity: 1,
                delay: 1000,
            },
            animateOut: {
                opacity: 0.1,
                delay: 400,
            },
            bindEvent: {
                mouseenter: function () {
                    console.log(0)
                },
                click: function () {
                    console.log(1)
                }
            }
        })
    .addSlider("slider-2")
        .addComponent({
            type: "base",
            width: 500,
            height: 500,
            className: "base",
            text: "hello world",
            center: true,
            css: {
                backgroundColor: "#e2e58e"
            },
            delay: 1000,
            animateIn: {
                opacity: 1,
                delay: 1000,
            },
            animateOut: {
                opacity: 0.1,
                delay: 400,
            },
            bindEvent: {
                mouseenter: function () {
                    console.log(0)
                },
                click: function () {
                    console.log(1)
                }
            }
        })
    .addSlider("slider-3")
        .addComponent({
            type: "base",
            width: 500,
            height: 500,
            className: "base",
            text: "hello world slider-3",
            center: true,
            css: {
                backgroundColor: "#888"
            },
            delay: 1000,
            animateIn: {
                opacity: 1,
                delay: 1000,
            },
            animateOut: {
                opacity: 0.1,
                delay: 400,
            },
            bindEvent: {
                mouseenter: function () {
                    console.log(0)
                },
                click: function () {
                    console.log(1)
                }
            }
        })
    .addSection("section-3")
        .addComponent({
            type: "base",
            width: 500,
            height: 500,
            className: "base",
            text: "hello world section3",
            center: true,
            css: {
                backgroundColor: "#ccc"
            },
            delay: 1000,
            animateIn: {
                opacity: 1,
                delay: 1000,
            },
            animateOut: {
                opacity: 0.1,
                delay: 400,
            },
            bindEvent: {
                mouseenter: function () {
                    console.log(0)
                },
                click: function () {
                    console.log(1)
                }
            }
    }).load()