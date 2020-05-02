// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

      '/maizuo': {
        // 目标地址，只写主机
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maizuo': ''
        }
      },

      '/fm': {
        target: 'https://www.missevan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/fm': ''
        }
      },
      '/live': {
        target: 'https://fm.missevan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/live': ''
        }
      }
    }
  }
}
