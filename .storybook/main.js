const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue",
  babel: async (options) => ({
    ...options,

    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-proposal-private-property-in-object"
    ]
  }),
  webpackFinal: async (config, { configType }) => {
    // Use Sass loader for vuetify components
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        "style-loader",
        "vue-style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          // Requires sass-loader@^9.0.0
          options: {}
        }
      ],
      include: path.resolve(__dirname, "../")
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "vue-style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          // Requires sass-loader@^9.0.0
          options: {}
        }
      ],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          vue: "vue/dist/vue.js",
          vue$: "vue/dist/vue.esm.js"
        }
      }
    });

    // Return the altered config
    return config;
  }
};
