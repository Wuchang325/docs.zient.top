import type { ThemeSidebarMulti } from 'vuepress-theme-plume'

const sidebar: ThemeSidebarMulti = {
  '/guide/': [
    { 
      text: '介绍', 
      link: 'intro', 
      icon: 'icon-park-outline:compass'
    },
    {
        text: '游戏指南',
        // 默认展开
        collapsed: false,
        items: [
          { text: '快速开始', icon: 'icon-park-outline:rocket', link: '/guide/quick-start' },
        ]
      },
  ]
  
}

export default sidebar