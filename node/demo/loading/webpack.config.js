
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:"./src/entry.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")

    },
    mode:"production",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'loadding.html',
            template:'./src/index.html'
        })
    ],
    devServer:{
        port:9999,
       
    }
}