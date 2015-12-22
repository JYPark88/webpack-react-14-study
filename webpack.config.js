module.exports = {
  entry: {
    tutorial: ['./app/js/CommentBox.js']
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
    path: __dirname + '/app/dist',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js']
  }
}
