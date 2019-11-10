<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-11-09 11:51:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <div class="x-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import utils from '../../utils/utils'

export default {
  
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    // 是否垂直排列显示（当时checkbox组时生效）
    isVerticalShow: {
      type: Boolean,
      default: false
    }
  },

  methods: {

    updateModel(label, checkedVal) {

      let index = this.value.indexOf(label);

      //如果找到，是没选中状态那么清除值
      if (index > -1) {

        if (!checkedVal) {

          this.value.splice(index, 1);
        }
      } else {
        //如果没找到，是选中状态那么加入值
        if (checkedVal) {

          this.value.push(label);
        }
      }

      this.$emit('input', this.value);
      this.$emit('change');
    }
  },

  watch: {
    // 更新子组件选中状态
    'value'(newVal) {

      let children = utils.getChildCompsByName(this, 'v-checkbox');

      if (children.length > 0) {

        children.forEach(child => {

          child.updateModelByGroup(newVal);
        })
      }

    }
  }
}
</script>