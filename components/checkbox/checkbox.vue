<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-11-01 13:41:12
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <label>
    <input type="checkbox"
             :value="label"
              v-model="model"
               @change="change"
           class="check-box"/>
    <span></span>
  </label>
 </template>

<style>
.check-box {
  display: none;
}
.check-box + span {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 2px;
}

.check-box:checked + span {
  background-color: #108ee9;
}

/*通过绝对定位来确定对勾的位置*/
.check-box:checked + span:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 5px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
}

/*不要忘了给span添加相对定位*/
.check-box:checked + span {
  background-color: #108ee9;
  position: relative;
}

.check-box:focus + span,
.check-box:hover + span {
  border-color: #108ee9;
}
</style>


<script>

import utils from '../../utils/utils'

export default {
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    // use in checkbox-group
    label: {
      type: [String, Number],
      require: true,
       default: null
    },
    disabled:{
         type:Boolean,
         default:false
    },
    // partial selection effect
    indeterminate:{
      type: Boolean,
      default: true
    },
    showSlot: {
      type: Boolean,
      default: true
    }

  },
  data() {
    return {
      model: this.value,
      checkboxGroup: {}
    }
  },

  computed: {

    checkboxClasses() {

      return [
        'v-checkbox',
        {
          ['v-checkbox-checked']: this.model,
          ['v-checkbox-disabled']: this.disabled,
          ['v-checkbox-indeterminate']: this.indeterminate,
        }
      ]
    },

    isCheckBoxGroup() {
      
      return this.checkboxGroup ? true : false;
    },

    // 是否横向显示还是纵向显示
    displayType() {

      var style = 'inline-block';

      if (this.checkboxGroup) {
        style = this.checkboxGroup.isVerticalShow ? 'block' : 'inline-block';
      }
      return style;
    },
  },

  methods: {

    change(event) {

      //如果无效，就返回不处理   
      if (this.disabled) {

        this.model = !this.model;
        return false;
      }

      //获得状态
      const checked = event.target.checked;
      
      //子线件发射消费给父组件
      this.$emit('input', checked);
      this.$emit('change');

      if (this.isCheckBoxGroup) {

        this.checkboxGroup.updateModel(this.label, checked);
      }
    },

    initModel() {
     this.checkboxGroup = utils.getParentCompByName(this, 'v-checkbox-group');

      if (this.isCheckBoxGroup) {

        let checkboxGroup = this.checkboxGroup;
        if (Array.isArray(checkboxGroup.value) && checkboxGroup.value.length > 0) {

          if (checkboxGroup.value.indexOf(this.label) > -1) {

            this.model = true;
          }
        }
      } else {

        this.model = this.value;
      }
    },

    // 通过单选更新 model
    updateModelBySingle() {

      if (!this.disabled) {
        this.model = this.value;
      }
    },

    // 父组件调用更新 model
    updateModelByGroup(checkBoxGroup) {

      if (checkBoxGroup.indexOf(this.label) > -1) {

        if (!this.disabled) {
          this.model = true;
        }
      } else {

        if (!this.disabled) {
          this.model = false;
        }
      }

    }
  },

  created() {

    this.initModel();
  },

  watch: {

    'value'(val) {

      this.updateModelBySingle();

    }
  }
}
</script>