module.exports = {
  plugins: {
    autoprefixer: {
      // 不需要设置这个选项，它会自动区使用.browserslistrc这个文件的配置
      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
