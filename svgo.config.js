// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          sortAttrs: true,
          removeOffCanvasPaths: true,
        },
      },
    },
  ],
};
