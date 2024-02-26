const path = require("path");
// https://ithelp.ithome.com.tw/users/20111948/ironman/4306?page=3
// https://ithelp.ithome.com.tw/articles/10314121
// https://ithelp.ithome.com.tw/users/20113277/ironman/2937
// https://ithelp.ithome.com.tw/users/20111948/ironman/4306?page=3



module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "src", "index.js"),
        rules: [
          {
            enforce: "pre",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "a2",
            },
          },
          {
            enforce: "pre",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "a1",
            },
          },
          {
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "b2",
            },
          },
          {
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "b1",
            },
          },
          {
            enforce: "post",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "d2",
            },
          },
          {
            enforce: "post",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "d1",
            },
          },
        ],
      },
    ],
  },
};