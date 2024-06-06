// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app : {   
     pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  css : ['~/assets/scss/main.scss','~/assets/scss/fonts.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_additionalData.scss" as *;',
        }
      }
    }
  },
  $development : {
    devtools: {
      enabled: true,
  
      timeline: {
        enabled: true
      }
    },
    app : {   
      head: {    
        title : 'Development Attorney Project'
      }
    },
    runtimeConfig: {
      // The private keys which are only available server-side
      apiSecret: '123',
      // Keys within public are also exposed client-side
      public: {
        apiBase: '/api'
      }
    }
  },

  $production : {
    app : {
      head : {
        title: "Avukat Sena Erden, Ankara"
      }
    }, 
    runtimeConfig: {
      // The private keys which are only available server-side
      apiSecret: '123',
      // Keys within public are also exposed client-side
      public: {
        apiBase: '/api'
      }
    }
  }
})