module.exports = {
  title: 'Ruta Frontend',
  description: 'Ruta Frontend',
  dest: 'docs',
  base: '/ruta-frontend/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    // sidebar: {
    //   '/guide/': [
    //     {
    //       title: 'Guide',
    //       collapsable: false,
    //       children: [
    //         '',
    //         'using-vue',
    //       ]
    //     }
    //   ],
    // }
    sidebar: [
      '/',
      '/01-bases/',
      '/02-especializacion/',
      // '/03-react/',
      // '/04-vue/',
      '/05-bonus/',
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
