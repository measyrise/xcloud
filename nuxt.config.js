/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 */
const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        'http-equiv': 'pragma',
        content: 'no-cache'
      },
      {
        'http-equiv': 'cache-control',
        content: 'no-cache'
      },
      {
        'http-equiv': 'expires',
        content: '0'
      },
      {
        content: 'telephone=no',
        name: 'format-detection'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
      //引入全局性连接
      //   {
      //     rel: 'stylesheet',
      //     href:
      //       'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css'
      //   }
    ],
    // html head 中创建 script 标签,也相当于全局性功能
    script: [
      {
        innerHTML: require('./assets/js/global.js'),
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script']
  },

  router: {
    // customize nuxt.js router (vue-router).
    middleware: 'i18n' // middleware all pages of the application
  },
  //当运行 nuxt generate 命令或在编码中调用 nuxt.generate() 时，Nuxt.js 会使用 generate 属性的配置。
  // generate: {
  //   routes: ['/', '/about', '/en', '/en/about']
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  // 每个
  css: [
    'normalize.css/normalize.css',
    '~/assets/styles/global.scss',
    '~assets/styles/variables.scss',
    '~assets/styles/xmixin.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/mock/mock.js', ssr: true },
    //语言设置
    {
      src: '~/plugins/lang/index.js',
      ssr: true
    },
    //拦截器设置
    {
      src: '~/plugins/axios/index.js',
      ssr: true
    },
    //路由配置
    {
      src: '~/plugins/route/index.js',
      ssr: true
    },
    //全局变量
    {
      src: '~/plugins/var.js',
      ssr: true
    },
    {
      src: '~/utils/index.js',
      ssr: true
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    prefix: '/api/',
    proxy: true, // Can be also an object with default options
    credentials: true
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/' //意思  /=/API/
      }
    },
    '/ip/': {
      target: 'http://icanhazip.com',
      changeOrigin: true,
      pathRewrite: {
        '^/ip/': '/'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // 如果需要在项目中全局使用某个 scss 文件（ 如 mixins, vars 等），
        // 需要借助 sass - resources - loader: yarn add sass - resources - loader— dev，
        // 还需要在 nuxt.config.js 的 build 配置中调整导出的 loader 配置：

        // const sassResourcesLoader = {
        //   loader: 'sass-resources-loader',
        //   options: {
        //     resources: [
        //       // 填写需要全局注入 scss 的文件。引入后，所有页面均有效。
        //       'assets/styles/mixins.scss'
        //     ]
        //   }
        // }

        // // 修改 scss sass 引用的 loader。
        // config.module.rules.forEach(rule => {
        //   if (rule.test.toString() === '/\\.vue$/') {
        //     rule.options.loaders.sass.push(sassResourcesLoader)
        //     rule.options.loaders.scss.push(sassResourcesLoader)
        //   }
        //   if (
        //     ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
        //   ) {
        //     rule.use.push(sassResourcesLoader)
        //   }
        // })

        config.module.rules.push(
          ...[
            {
              enforce: 'pre',
              test: /\.(js|vue)$/,
              loader: 'eslint-loader',
              exclude: /(node_modules)/,
              options: {
                fix: true
              }
            }
            // {
            //   test: /\.css$/,
            //   use: ['style-loader']
            // },
            // {
            //   test: /\.(scss|sass)$/,
            //   use: ['sass-loader']
            // },
            // {
            //   test: /\.(png|svg|jpg|gif)$/,
            //   use: ['file-loader']
            // }
          ]
        )
        // (config.output.publicPath = '/')
      }
      // 添加 alias 配置
      // Object.assign(config.resolve.alias, {
      //   utils: path.resolve(__dirname, 'utils')
      // })
    }
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 75
    //   })
    // ],
    // vendor: ['vue-i18n'] // webpack vue-i18n.bundle.js
  },
  env: {
    __ENV: process.env.__ENV
  }
}
