import type { ThemeSidebarMulti } from 'vuepress-theme-plume'

const sidebar: ThemeSidebarMulti = {
  '/guide/': [
    { 
      text: '介绍', 
      link: 'intro', 
      icon: 'icon-park-outline:compass'
    },
    { 
      text: '服务器历史', 
      link: 'server-history', 
      icon: 'icon-park-outline:history'
    },

    {
        text: '游戏指南',
        // 默认展开
        collapsed: false,
        items: [
          { 
            text: '快速开始', 
            icon: 'icon-park-outline:rocket', 
            link: '/guide/game/quick-start' 
          },
        ]
      },
  ]
  
}

export default sidebar