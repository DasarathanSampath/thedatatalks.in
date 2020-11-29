const languagesList = require('./locales/languageList')
const englishLang = require('./locales/en')
const tamilLang = require('./locales/ta')
const path = require("path")
const autometa_options = {
  site: {
    name   : 'thedatatalks',
    twitter: 'thedatatalks',
  },
  canonical_base: 'https://thedatatalks.in'
};

module.exports = {
  plugins: [
    // require('./plugins/firebase'),
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['feed', {
      canonical_base: 'https://thedatatalks.in',
      posts_directories: ['/politics/', '/economics/', '/education/', '/others/'],
    }],
    '@vuepress/nprogress',
    '@vuepress/google-analytics',
      {
        'ga': 'UA-144761111-2'
      },
    "vuepress-plugin-google-adsense",
      {
        ad_client: "ca-pub-3042269102042405" // replace it with your ad_client
      },
    ['autometa', autometa_options],
    'sitemap', 
      {
        hostname: 'https://thedatatalks.in'
      }
  ],
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    // The core Firebase JS SDK is always required and must be listed first -->
    // ['script', { src: "/__/firebase/8.1.1/firebase-app.js"}],
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries -->
    // ['script', { src: "/__/firebase/8.1.1/firebase-analytics.js"}]
    // Initialize Firebase
    // ['script', { src: "/__/firebase/init.js"  }]
  ],
  locales: languagesList.list,
  themeConfig: {
    locales:{
      '/': englishLang.list,
      '/ta/': tamilLang.list
    },
    logo: '/favicon.png',
    lastUpdated: 'Last Updated'
  },  
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets')
      }
    }
  },
  chainWebpack (config) {
    config.plugin('injections').tap(([options]) => [
      Object.assign(options, {
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ])
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-katex'))
    }
  }
}
