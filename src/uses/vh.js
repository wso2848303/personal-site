import { onMounted } from 'vue'
import $ from 'jquery'
export default () => {
  function setViewHeight() {
    // 获取窗口的高度，单位为像素
    let windowVH = window.innerHeight / 100
    // 设置文档的高度，单位为像素
    document.documentElement.style.setProperty('--vh', windowVH + 'px')
    // 获取窗口的宽度，单位为像素
    let windowVW = window.innerWidth / 100
    // 设置文档的宽度，单位为像素
    document.documentElement.style.setProperty('--vw', windowVW + 'px')
  }
  onMounted(() => {
    $(window).on('resize', setViewHeight)
    $(window).on('orientationchange', setViewHeight)
    setViewHeight()
  })
}
