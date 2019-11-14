/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-03 21:39:35
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
export default function(ref) {
  return {
    methods: {
      focus() {
        this.$refs[ref].focus();
      }
    }
  };
}
