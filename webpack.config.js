const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

let mode = "development";


if (process.env.NODE_ENV === "production")
{
    mode = "production";
}

module.exports = {
    mode: mode,
    
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }

                    },
                    ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    plugins: [ new MiniCssExtractPlugin() ], 
    
    devtool: 'source-map',
    devServer: {
        static: "./dist",
        hot: true,
    },
};