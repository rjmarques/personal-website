const path = require("path");
const nodeExternals = require("webpack-node-externals");

const paths = {
  serverSrc: path.resolve(__dirname, "src"),
  serverBuild: path.resolve(__dirname, "dist"),
  uiSrc: path.resolve(__dirname, "../frontend/src/components"),
};

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  mode: "production",
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(ts|tsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              failOnError: true,
              eslintPath: require.resolve("eslint"),
              resolvePluginsRelativeTo: __dirname,
              fix: true,
            },
            loader: "eslint-loader",
          },
        ],
        include: [paths.serverSrc],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
      },
      {
        test: /\.less$/,
        use: "ignore-loader",
      },
      {
        test: /\.(gif|jpeg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              esModule: false,
              emitFile: false,
              publicPath: "/static/media/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "server.js",
    path: paths.serverBuild,
  },
};
