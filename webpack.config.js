var path = require('path');

module.exports = {
    entry: './src/index.tsx',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        inline: true,
        port: 3000,
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/build/'),
        publicPath: 'build/',
        chunkFilename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'source-map-loader', enforce: 'pre' },
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    watchOptions: {
        poll: true
    },
    mode: 'development'
}