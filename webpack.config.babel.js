import webpack from "webpack";
import path from "path";

export default env => {
  return {
    entry: [path.join(__dirname, "src/client/index.js")],
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: env.prod ? "/" : "http://localhost:8080/",
      filename: env.prod ? "[name].[chunkhash].js" : "[name].bundle.js"
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
    resolve: {
      // alias: {
      //   "react/lib/ReactMount": "react-dom/lib/ReactMout",
      //   handlebars: "handlebars/dist/handlebars.js",
      //   "simplebar-css": "simplebar/dist/simplebar.css",
      //   "react-select-css": "react-select/dist/react-select.css"
      // },
      modules: [path.join(__dirname, "src/client"), "node_modules"]
    }
  };
};
