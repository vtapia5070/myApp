const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, '/node_modules')
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, '/node_modules')
            }
        ]
    }
};