const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:'development',
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
        })
    ]
}