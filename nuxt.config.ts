// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Ваш супергерой в мире технологий! Реализуем любые Ваши потребности и желания!',
      meta: [
        { name: 'title', content: 'MSA-IT: Ваш супергерой в мире технологий!' },
        {
          name: 'description',
          content:
            'IT компания, работающая более 10 лет. Мы находимся в Беларуси, но благодаря гибкой структуре, сотрудничаем онлайн с клиентами по всему миру.',
        },
        { name: 'url', content: 'https://msa-it.ru/' },
        { name: 'type', content: 'website' },
        { name: 'image', content: 'https://msa-it.ru/images/superhero-flying.png' },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    apiInnerUrl: process.env.NUXT_API_INNER_URL,
  },
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }],
  },
  modules: ['nuxt-svgo', '@nuxtjs/i18n', '@nuxt/image', 'vuetify-nuxt-module', '@pinia/nuxt'],
  vite: {
    resolve: {
      alias: {
        '@utils': '/components/utils',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/config" as *;',
          api: 'modern',
        },
      },
    },
  },

  //              ---------------
  //              конфиги модулей

  i18n: {
    locales: ['ru'],
    strategy: 'prefix_and_default',
    defaultLocale: 'ru',
  },

  svgo: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // removeDimensions: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },

  vuetify: {
    moduleOptions: {
      styles: {
        configFile: './assets/styles/modules/vuetify-settings.scss',
      },
      disableVuetifyStyles: true,
    },
  },
})
