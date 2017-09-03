import webpack from "webpack";
import path from "path";
import HtmlWebpackPugPlugin from "html-webpack-pug-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

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
    ? __dirname + "/tmp/static"
    : __dirname + "/src/client";

  return {
    entry: removeEmpty([
      ifDev("react-hot-loader/patch"),
      ifDev("webpack-dev-server/client?http://localhost:8080"),
      ifDev("webpack/hot/only-dev-server"),
      path.join(__dirname, "src/client/index.js")
    ]),
    output: {
      path: path.join(__dirname, "tmp/static"),
      publicPath: env.prod ? "/" : "http://localhost:8080/",
      filename: env.prod ? "[name].[chunkhash].js" : "[name].bundle.js"
    },
    devtool: env.dev ? "eval-source-map" : "eval",
    devServer: {
      hot: true,
      publicPath: "http://localhost:8080/",
      contentBase: contentBase,
      historyApiFallback: true,
      headers: { "Access-Control-Allow-Origin": "*" }
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
    plugins: removeEmpty([
      ifDev(new webpack.HotModuleReplacementPlugin()),
      ifProd(
        new HtmlWebpackPlugin({
          title: "Summer",
          filename: "templates/index.pug",
          template: path.join(__dirname, "src/server/templates/index.prod.pug")
        })
      ),
      ifProd(new HtmlWebpackPugPlugin()),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module) {
          // this assumes your vendor imports exist in the node_modules directory
          return (
            module.context && module.context.indexOf("node_modules") !== -1
          );
        }
      }),
      //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest" //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      ifProd(
        new CopyWebpackPlugin([
          {
            from: "static"
          }
        ])
      )
    ])
  };
};
