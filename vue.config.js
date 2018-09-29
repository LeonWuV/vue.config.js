module.exports = {
  //在router的mode为history时会用到，上线部署的重要参数
  //如果你部署在https://www.123.com/aaa/index.html
  //那么值就为 baseUrl: "/aaa/",
  baseUrl: "/",

  //打包输出的文件路径
  outputDir: "dist",

  //eslint的开关true，false，error三个值
  lintOnSave: true,

  //静态资源存放的文件路径
  assetsDir: 'assets',
 
  // 服务的相关配置
  devServer: {
    port: "8888", 			//端口
    https: false,			//是否为https协议
    host: "localhost",		//主机地址
    open: "true",			//项目启动完后是否在浏览器中自动打开
    proxy: null				//本地代理配置
  }

  // 待添加。。。。。
}