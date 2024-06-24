import comp from "D:/nzhi_website/docs/.vuepress/.temp/pages/download-center.html.vue"
const data = JSON.parse("{\"path\":\"/download-center.html\",\"title\":\"下载中心\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"下载中心\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"download-center.md\"}")
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
