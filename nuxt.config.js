import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s',
    title: '식사파트너',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'font/woff',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700'
      }
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_MAP_APIKEY + '&libraries=places&v=weekly'
      }
    ]
  },

  css: [
  ],

  plugins: [
    '@/plugins/vee-validate.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          header: '#FFFFFF',
          contents: '#FFFBEA',
          footer: '#4B4A46',
          primary: '#F5BE00',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: '#F5BE00',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    transpile: [
      'vee-validate'
    ]
  },

  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    GOOGLE_MAP_APIKEY: process.env.GOOGLE_MAP_APIKEY
  }
}
