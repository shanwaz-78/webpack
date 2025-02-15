import path from "path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
