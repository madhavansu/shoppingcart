// Webpack uses this to work with directories
const path = require('path');

// Extract all that transformed CSS into separate bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  // Path to entry point.
  entry: './app/index.js',

  // Path and filename of the result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development'
};