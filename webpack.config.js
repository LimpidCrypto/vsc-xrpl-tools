// webpack.config.extension.js

const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './ext-src/extension.ts',
    output: {
        path: path.resolve(__dirname, 'dist/ext-src'),
        filename: 'extension.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    externals: {
        vscode: 'commonjs vscode',
    },
};
