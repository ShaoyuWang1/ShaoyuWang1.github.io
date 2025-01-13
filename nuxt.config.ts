export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  extends: ['nuxt-umami'],
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss'],
  nitro: {
    publicAssets: [
      {
        baseURL: '/', // 确保映射到根路径
        dir: 'public', // 确保 public 文件夹被正确指定
      },
    ],
    output: {
      dir: 'dist',
      publicDir: 'dist/public',
    },
    prerender: {
      routes: ['/'], // 指定需要预渲染的路由
    },
    routeRules: {
      '/dinkie-bitmap': {
        redirect: { to: 'https://dinkiebitmap.com', statusCode: 301 },
      },
      '/luohei-variable': {
        redirect: { to: 'https://luohei.atelier-anchor.com', statusCode: 301 },
      },
      '/mingkwai': {
        redirect: { to: 'https://mingkwai.atelier-anchor.com', statusCode: 301 },
      },
    },
  },
  vite: {
    define: {
      'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date()),
    },
  },
  app: {
    baseURL: '/vue_project/',
  },
  appConfig: {
    umami: {
      host: 'https://umami.dinkiebitmap.com',
      id: '442f071b-5e0a-4987-bdbe-e045c3519a41',
      version: 2,
      ignoreLocalhost: true,
    },
  },
})
