module.exports = {
    entry: __dirname + "/app/entry.js",
    mode: "development",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.json$/ //正则表达式，告诉loader应该加载以.json结尾的文件
        }]
    }
}
