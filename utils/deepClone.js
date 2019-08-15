/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-08-02 11:16:34
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
// 功能
// 深拷贝

const clone = (obj) => {
  var o;
  // 如果  他是对象object的话  , 因为null,object,array  也是'object';
  if (typeof obj === 'object') {

    // 如果  他是空的话
    if (obj === null) {
      o = null;
    } else {

      // 如果  他是数组arr的话
      if (obj instanceof Array) {
        o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(clone(obj[i]));
        }
      }
      // 如果  他是对象object的话
      else {
        o = {};
        for (var j in obj) {
          o[j] = clone(obj[j]);
        }
      }

    }
  } else {
    o = obj;
  }
  return o;
};

export default clone;