// .vuepress/config.js
module.exports = {
  title: 'footprint',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
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
              { text: '算法', link: '/algorithm/' },
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
          { text: '框架', items: [{ text: 'vue', link: '/front/vue/' },] }
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
      { text: 'AI', link: '/ai/' },
      { text: 'Github', link: 'https://github.com/tree0122/tree0122.github.io' },
    ]
  }
}