module.exports = [
    {
      entry: './src/index.js',
      output: {
        libraryTarget: 'umd',
        library: 'tpl_project_tpl',
        filename: 'tpl_project_tpl.min.js'
      },
      module : {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      },
      optimization: { minimize: true },
      mode: 'production'
    },
    {
        entry: './src/index.js',
        output: {
            libraryTarget: 'umd',
            library: 'tpl_project_tpl',
            filename: 'tpl_project_tpl.js'
        },
        module : {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        },
        optimization: { minimize: false },
        mode: 'production'
    }
]
