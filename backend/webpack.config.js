const path = require("path");

const paths = {
  appSrc: path.resolve(__dirname, "src"),
  appBuild: path.resolve(__dirname, "dist"),
};

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(ts)$/,
        enforce: "pre",
        use: [
          {
            options: {
              failOnError: true,
              eslintPath: require.resolve("eslint"),
              resolvePluginsRelativeTo: __dirname,
              fix: true,
            },
            loader: require.resolve("eslint-loader"),
          },
        ],
        include: paths.appSrc,
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: paths.appSrc,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "server.js",
    path: paths.appBuild,
  },
};
