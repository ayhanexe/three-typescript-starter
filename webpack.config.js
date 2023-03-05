const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/main.ts"),
    resolve: {
        extensions:[".tsx", '.ts', '.js'],
        mainFields: ['es2015', 'browser', 'module', 'main'],
        alias: {
            "@sass": path.resolve(__dirname, "src/sass"),
            "@core": path.resolve(__dirname, "src/core"),
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/public/index.html")
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}