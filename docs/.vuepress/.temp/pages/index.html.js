import comp from "D:/nzhi_website/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/Nzhi.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/get-started.md\",\"type\":\"primary\"},{\"text\":\"立即下载\",\"link\":\"/download-center.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"全面适配\",\"details\":\"完美支持和平精英、暗区突围、cf等多款主流手游\"},{\"title\":\"功能强大\",\"details\":\"附带支持各类fps游戏压枪教程\"},{\"title\":\"无侵入性\",\"details\":\"不修改游戏内存、不修改游戏文件，不会对游戏性能产生任何影响\"}],\"footer\":\"网站内容仅供学习与交流使用，请勿用于任何违法行为 | Copyright © N指\"},\"headers\":[],\"git\":{\"updatedTime\":1719255117000,\"contributors\":[{\"name\":\"MoY丶沫影\",\"email\":\"1840662359@qq.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
