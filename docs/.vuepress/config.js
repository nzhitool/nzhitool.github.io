import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Nzhi手游助手',
  description: '全网最强键鼠映射软件',

  head: [
    [
        'link', { rel: 'icon', href: '/images/Nzhi.png' }
    ]
  ],

  theme: defaultTheme({
    navbar: ['/', '/get-started', '/download-center', '/miaomiao-ai'],
  }),

  bundler: viteBundler(),
})
