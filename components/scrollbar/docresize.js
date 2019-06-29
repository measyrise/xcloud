/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-29 10:18:27
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
import ResizeObserver from 'resize-observer-polyfill'

const listeners = entries => {
  for (let item of entries) {
    if (
      item.target &&
      item.target.resizeListeners &&
      item.target.resizeListeners.length
    ) {
      for (let func of item.target.resizeListeners) {
        func(item)
      }
    }
  }
}

export const domResize = (ele, func) => {
  if (!ele.resizeListeners) {
    ele.resizeListeners = []
    const myObserver = new ResizeObserver(listeners)
    myObserver.observe(ele)
  }
  ele.resizeListeners.push(func)
}
