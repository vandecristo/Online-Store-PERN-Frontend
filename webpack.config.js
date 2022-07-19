module.exports = {
    //mode: "production",
    mode: "development", devtool: "inline-source-map",

    entry: ["./src/App.tsx"/*main*/],
    output: {
        filename: "./bundle.js"  // in /dist
    },
    resolve: {
        resolve: {
            extensions: ['', '.js', '.jsx', '.css', '.png'],//add '.css' "root": __dirname }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader' ]
                },

            ]
        },
    }
}
