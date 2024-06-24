import comp from "D:/nzhi_website/docs/.vuepress/.temp/pages/carmi-shop.html.vue"
const data = JSON.parse("{\"path\":\"/carmi-shop.html\",\"title\":\"购买卡密\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"购买卡密\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"carmi-shop.md\"}")
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
