/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-03 21:48:15
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
import { hasOwn } from './util'

export function isVNode(node) {
  return (
    node !== null &&
    typeof node === 'object' &&
    hasOwn(node, 'componentOptions')
  )
}

export function getFirstComponentChild(children) {
  return children && children.filter(c => c && c.tag)[0]
}
