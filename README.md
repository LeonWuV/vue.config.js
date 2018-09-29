### vue.config.js

configuration file for vue-cli3

vue-cli3有默认的配置文件，只有需要自定义一些字段时才会用到这个配合文件。

这个配置文件是因项目而异的，一般都会修改一些字段，如果做成模块之后就需要导入并且merge到根目录下的vue.config.js文件中，这样做是没有任何意义的，因为自定义共性基本上不存在。

所以我的解决方式是，根据自己的习惯，配置一套配置，然后复制到根目录下的vue.config.js里。

