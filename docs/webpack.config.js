"use strict";
exports.__esModule = true;
var path = require("path");
var devOption_1 = require("./YanLingHui/src/ts/server/devOption");
var config = {
    // devtool: 'source-map',
    entry: ['./YanLingHui/src/ts/profile.ts'],
    output: {
        path: path.resolve(__dirname, devOption_1.dev.outputFolder),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*', '.ts', '.js']
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
        ]
    }
};
exports["default"] = config;
