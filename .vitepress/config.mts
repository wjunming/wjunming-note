// https://vitepress.dev/reference/site-config
export default ({
  title: "WJUNMING NOTE",
  description: "wjunming note",
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  srcDir: 'src',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/tech/curl', activeMatch: '/tech/' },
      { text: '业务', link: '/business/seal', activeMatch: '/business/' },
      { text: '其他', link: '/other/finishes/material-list', activeMatch: '/other/' }
    ],
    sidebar: {
      '/tech/': [
        {
          text: '技术',
          base: '/tech/',
          items: [
            { text: 'curl用法', link: 'curl' }
          ]
        }
      ],
      '/business/': [
        {
          text: '业务',
          base: '/business/',
          items: [
            { text: '印章基本信息', link: 'seal' },
            { text: '签章基本信息', link: 'sign' }
          ]
        }
      ],
      '/other/': [
        {
          text: '其他',
          base: '/other/',
          items: [
            { text: '装修', items: [
              { text: '材料清单', link: 'finishes/material-list' }
            ]}
          ]
        }
      ]
    },
    outline: { label: '页面导航' },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress'
      }
    ],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: `
        <span style="display: inline-block; margin: 0 0.5em;">
          <a href="https://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">京ICP备2026079819号</a>
        </span>
        <span style="display: inline-block; margin: 0 0.5em;">
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010502050029" rel="noreferrer" target="_blank"><img src="/beian.png" alt="" style="display: inline-block; width: 16px; height: 18px; vertical-align: middle; margin-right: 4px;">京公网安备11010502050029号</a>
        </span>
      `,
      copyright: 'Copyright © 2026-present Wjunming'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
  }
})
