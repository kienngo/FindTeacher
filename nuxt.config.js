export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ketnoitrungtam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'js/jquery.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/bootstrap.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/modernizr-2.6.2.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.easing.1.3.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.waypoints.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.stellar.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/owl.carousel.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.flexslider-min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.countTo.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.magnific-popup.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/magnific-popup-options.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/simplyCountdown.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/main.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/style.css',
    '@/assets/css/animate.css',
    '@/assets/css/icomoon.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/magnific-popup.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/css/owl.theme.default.min.css',
    '@/assets/css/flexslider.css',
    '@/assets/css/pricing.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
