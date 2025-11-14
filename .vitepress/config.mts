import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  title: "wjunming note",
  description: "wjunming note",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '示例', link: 'markdown-examples' },
    //   { text: '技术', link: 'technology', },
    //   { text: '业务', link: 'business' },
    //   { text: '其他', link: 'other' }
    // ],
    nav: nav(),

    sidebar: {
      '/technology/': {
        base: '/technology/',
        items: sidebarTechnology()
      }
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: 'markdown-examples' },
    //       { text: 'Runtime API Examples', link: 'api-examples' }
    //     ]
    //   },
    //   {
    //     text: '技术',
    //     items: [
    //       { text: 'curl用法', link: 'technology/curl' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'www',
      copyright: '@'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '技术',
      link: '/technology/curl',
      activeMatch: '/technology/'
    },
    {
      text: '业务',
      link: '/business',
      activeMatch: '/business/'
    },
    {
      text: '其他',
      link: '/other',
      activeMatch: '/other/'
    }
  ]
}

function sidebarTechnology(): DefaultTheme.SidebarItemp[] {
  return [
    {
      text: '技术',
      items: [
        { text: 'curl用法', link: 'curl' }
      ]
    }
  ]
}
