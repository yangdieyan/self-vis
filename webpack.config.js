// this file is to pack all the things used in index.js
// to a browser understandable js file - self-vis.js
const path = require('path');
const webpack = require('webpack');
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;
const cssRules = require('vtk.js/Utilities/config/dependency.js').webpack.css.rules;

const entry = path.join(__dirname, './src/index.js');
const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

module.exports = {
    mode: 'development',
    // the module entry
    entry,
    // where to put the dest js
    output: {
        path: outputPath,
        filename: 'self-vis.js'
    },
    // the rules to pack the module
    module: {
        rules: [
            { test: entry, loader: 'expose-loader?self-vis' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.js/, loader: 'babel-loader'},
            { test: /\.(png|jpg)$/, use: 'url-loader?limit=81920'},
        ].concat(vtkRules, cssRules)
    },
    // config how to find the needed modules
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ]
    },

};