module.exports = {
  entry: {
    index: './index.js',
    hello: './hello.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
        {
          presets:['react']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js']
  }
}
