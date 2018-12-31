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
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css'
      // }
    ],
    // html head 中创建 script 标签
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
  css: ['normalize.css/normalize.css', '~/assets/styles/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/mock/mock.js', ssr: true },
    {
      src: '~/plugins/lang/index.js',
      ssr: true
    },
    {
      src: '~/plugins/axios/index.js',
      ssr: true
    },
    {
      src: '~/plugins/route/index.js',
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
    // prefix: '/api',
    proxy: true, // Can be also an object with default options
    credentials: true
  },
  proxy: {
    '/api': {
      target: 'http://icanhazip.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' //将 /api 替换掉
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
    },
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 75
    //   })
    // ],
    vendor: ['vue-i18n'] // webpack vue-i18n.bundle.js
  },
  env: {
    __ENV: process.env.__ENV
  }
}
