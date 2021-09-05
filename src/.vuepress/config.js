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
    // ['disqus', { /* options */ }],
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
    ['@vuepress/google-analytics', {'ga': 'UA-144761111-2'}],
    // ['vuepress-plugin-google-adsense', {ad_client: "ca-pub-3042269102042405"}],
    ['autometa', autometa_options],
    ['sitemap', {hostname: 'https://thedatatalks.in'}],
    [ 'mermaidjs', { er: { width: 100, height: 100 }, sequence: { width: 100, height: 100 }, flowchart: { width: 100, height: 100 }}]
  ],
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel:"preconnect", href:"https://fonts.gstatic.com"}],
    ['link', { rel: "preload", as: "style", href:'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'}],
    ['link', {href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap', rel:'stylesheet'}],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', async: true }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',  crossorigin: 'anonymous', async: true}],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-auth.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-database.js", async: true }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-firestore.js", async: true }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-analytics.js", async: true }],
    // ['script', { src: "https://www.googletagmanager.com/gtag/js?id=UA-144761111-2",async: true}],
    ['script', {},
                "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-144761111-2');"],    
    ['script', { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", async: true}],
    // ['ins', {}, '(class:"adsbygoogle", style:"display:block", data-ad-format:"fluid", data-ad-layout-key:"-5h+c4-1q-6w+t7", data-ad-client: "ca-pub-3042269102042405", data-ad-slot: "1900291914")'],
    ['script', {},
                '(adsbygoogle = window.adsbygoogle || []).push({class: "adsbygoogle", style: "display:block", google_ad_client: "ca-pub-3042269102042405", enable_page_level_ads: "true"});']
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
