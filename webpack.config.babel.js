import webpack from "webpack";
import path from "path";

export default env => {
  // utilities to add features based on env

  const addEntity = (add, entity) => {
    return add ? entity : undefined;
  };
  const ifProd = entity => addEntity(env.prod, entity);
  const ifDev = entity => addEntity(env.dev, entity);
  const removeEmpty = array => array.filter(i => !!i);

  // set contentBase
  const contentBase = env.prod
    ? __dirname + "/dist"
    : __dirname + "/src/client";

  return {
    entry: removeEmpty([
      ifDev("react-hot-loader/patch"),
      ifDev("webpack-dev-server/client?http://localhost:8080"),
      ifDev("webpack/hot/only-dev-server"),
      path.join(__dirname, "src/client/index.js")
    ]),
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: env.prod ? "/" : "http://localhost:8080/",
      filename: env.prod ? "[name].[chunkhash].js" : "[name].bundle.js"
    },
    devServer: {
      hot: true,
      publicPath: "http://localhost:8080/",
      contentBase: contentBase,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
          include: path.join(__dirname, "./src/client")
        }
      ]
    },
    plugins: removeEmpty([ifDev(new webpack.HotModuleReplacementPlugin())])
  };
};
