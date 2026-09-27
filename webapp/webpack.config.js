const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevEnv = true;
const mode =  isDevEnv ? 'development' : 'production';

module.exports = {
    entry: './src/main.tsx',
    mode,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    }
};