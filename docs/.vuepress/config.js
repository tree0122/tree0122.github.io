// .vuepress/config.js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      {
        text: '后端',
        items: [
          {
            text: '编程语言',
            items: [
              { text: 'Java', link: '/java/' },
              { text: 'Python', link: '/python/' },
              { text: 'js', link: '/js/' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: '数据库', link: '/db/' },
              { text: 'MQ', link: '/mq/' },
            ]
          },
        ]
      },
      {
        text: '前端',
        items: [
          {
            text: '基础',
            items: [
              { text: 'h5', link: '/h5' },
              { text: 'css', link: '/css' },
            ]
          },
          { text: '框架', items: [{ text: 'vue', link: '/vue/' },] }
        ]
      },
      {
        text: '运维',
        items: [
          { text: 'linux', link: '/linux/' },
          { text: 'nginx', link: '/nginx/' },
          { text: '云原生', link: '/cloud/' },
        ],
      },
      { text: 'Github', link: 'https://github.com/tree0122/tree0122.github.io' },
    ]
  }
}