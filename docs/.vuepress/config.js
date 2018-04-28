module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Sicun",
      description: '技术札记'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'docschina/vuepress',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: 'Front-End',
            link: '/front-end/'
          },
          {
            text: 'Java',
            link: '/java/'
          },
          {
            text: 'Application',
            link: '/application/'
          },
          {
            text: '指南',
            link: '/guide/',
          },
          {
            text: '配置参考',
            link: '/config/'
          },
          {
            text: '默认主题配置',
            link: '/default-theme-config/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('指南'),
          '/front-end/':genSidebarFrontEnd('Front-End')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title:title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}

function genSidebarFrontEnd (title) {
  return [
    {
      title:title,
      collapsable: false,
      children: [
        '',
       'angular',
       'es6',
       'react',
       'vue',
       'webpack',
      ]
    }
  ]
}
