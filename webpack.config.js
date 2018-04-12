// webpack.config.js
//将app文件夹打包后形成bundle.js，放入public文件夹
//__dirname 是 node.js 中的一个全局变量，它指向当前 js 文件所在的目录.
module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/public/", //存放打包后文件的地方路径
        filename: "bundle.js" //打包后的文件名
    },
    devServer: {
        contentBase: "./public",
        port: "9000",
        inline: true,
        historyApiFallback: true
    },
    module: {
        rules: [{
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //编译打包时需要排除 node_modules 文件夹
                loader: "babel-loader"
                    //已在.bebelrc中设置，所以config.js里的query可以去掉
                    // query: {
                    //     presets: ["es2015", "react"]
                    // }
            },
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader" //添加对样式表的处理,感叹号的作用在于使同一文件能够使用不同类型的 loader
                // loader: "style-loader!css-loader?modules" //跟上面相比就在后面加上了 ?modules，这样就可以将css限定在当前模块
                loader: "style-loader!css-loader?modules!postcss-loader" //跟上面相比又增加了自动处理后缀的loader
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".json"]
            // alias: {
            //   vue$: "vue/dist/vue.esm.js",
            //   "@": resolve("src")
            // }
    },
    plugins: [
        // new webpack.BannerPlugin("Copyright Flying Unicorns inc.") //在这个数组中new一个实例就可以了
    ]
};