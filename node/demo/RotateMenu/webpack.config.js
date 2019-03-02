var path = require('path')

module.exports = {
    entry:"./src/entry.js",
    output:{
        filename:"output.js",
        path:path.resolve(__dirname,'dist')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        contentBase:'dist',
        port:'9999'
    }
}