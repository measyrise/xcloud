/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-03 21:48:15
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
import MenuItem from './aria-menuitem'

const Menu = function(domNode) {
  this.domNode = domNode
  this.init()
}

Menu.prototype.init = function() {
  let menuChildren = this.domNode.childNodes
  ;[].filter
    .call(menuChildren, child => child.nodeType === 1)
    .forEach(child => {
    new MenuItem(child); // eslint-disable-line
    })
}
export default Menu
