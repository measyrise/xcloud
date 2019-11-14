<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-11-01 13:41:12
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <label
    :style="{'display':displayType}"
    class="v-checkbox-wrapper">
    <span :class="checkboxClasses">
      <input
        :value="label"
        v-model="model"
        class="v-checkbox-input"
        type="checkbox"
        @change="change"
      >

      <span class="v-checkbox-inner"/>
    </span>
    <span><slot v-if="showSlot">{{ label }}</slot></span>
  </label>
</template>

<style>
.v-checkbox-wrapper {
  cursor: pointer;
  font-size: 12px;
  display: inline-block;
  position: relative;
}

.v-checkbox {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: text-bottom;
}

/*把原来的框隐藏掉，并重叠*/
.v-checkbox-input {
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  top: 0;
  bottom: 0;
  right: 0;
  /* width: 100%;
    height: 100%;*/
}

/* 自定义框  外框灰色*/
.v-checkbox-inner {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid #abbacc;
  border-radius: 2px;
  background-color: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

/* 当选中，和模糊状态时，种时背景与边框都为蓝 */
.v-checkbox-checked .v-checkbox-inner,
.v-checkbox-indeterminate .v-checkbox-inner {
  background-color: #108ee9;
  border-color: #108ee9;
}

/*当HOVER,FOCUS,时v-checkbox-inner边框为蓝色*/
.v-checkbox-input:focus .v-checkbox-inner,
.v-checkbox-wrapper:hover .v-checkbox-inner,
.v-checkbox:hover .v-checkbox-inner {
  border-color: #108ee9;
}

/*选中状态时 框内为勾*/
.v-checkbox-checked .v-checkbox-inner:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 1px;
  width: 8px;
  height: 5px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
  cursor: not-allowed;
}

/*模糊状态时 框内为一横*/
.v-checkbox-indeterminate .v-checkbox-inner:after {
  content: " ";
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  position: absolute;
  left: 2px;
  top: 4px;
  width: 8px;
  height: 1px;
  border-bottom: 2px solid white;
  cursor: not-allowed;
}

/*禁止选择时的光标显示 */
.v-checkbox-disabled {
  cursor: not-allowed;
}

.v-checkbox-disabled .v-checkbox-checked .v-checkbox-inner:after {
  -webkit-animation-name: none;
  animation-name: none;
  border-color: rgba(0, 0, 0, 0.25);
}

.v-checkbox-disabled .v-checkbox-input {
  cursor: not-allowed;
}

.v-checkbox-disabled .v-checkbox-inner {
  border-color: #d9d9d9 !important;
  background-color: #f7f7f7;
}

.v-checkbox-disabled .v-checkbox-inner:after {
  -webkit-animation-name: none;
  animation-name: none;
  border-color: #f7f7f7;
}

.v-checkbox-disabled + span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}

.v-checkbox-indeterminate.v-checkbox-disabled .v-checkbox-inner:after {
  border-color: rgba(0, 0, 0, 0.25);
}

.v-select-items-multiple {
  display: table;
  width: 100%;
  padding: 5px;
}

.v-select-items-multiple span {
  vertical-align: middle;
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
}

.v-select-items-multiple:hover {
  background-color: #e6f7ff;
}
</style>


<script>
import utils from "../../utils/utils";

export default {
  name: "XCheckbox",
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
    disabled: {
      type: Boolean,
      default: false
    },
    // partial selection effect
    indeterminate: {
      type: Boolean,
      default: false
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
    };
  },

  computed: {
    checkboxClasses() {
      if (this.indeterminate) {
        return [
          "v-checkbox",
          {
            ["v-checkbox-disabled"]: this.disabled,
            ["v-checkbox-indeterminate"]: this.indeterminate
          }
        ];
      } else {
        return [
          "v-checkbox",
          {
            ["v-checkbox-checked"]: this.model,
            ["v-checkbox-disabled"]: this.disabled
          }
        ];
      }
    },

    isCheckBoxGroup() {
      return this.checkboxGroup ? true : false;
    },

    // 是否横向显示还是纵向显示
    displayType() {
      var style = "inline-block";

      if (this.checkboxGroup) {
        style = this.checkboxGroup.isVerticalShow ? "block" : "inline-block";
      }
      return style;
    }
  },

  watch: {
    value(val) {
      debugger;
      this.updateModelBySingle();
    }
  },

  created() {
    this.initModel();
  },

  methods: {
    change(event) {
      //如果无效，就返回不处理
      debugger;
      if (this.disabled) {
        this.model = !this.model;
        return false;
      }

      //获得状态
      const checked = event.target.checked;

      //子线件发射消费给父组件
      this.$emit("input", checked);
      this.$emit("change");

      if (this.isCheckBoxGroup) {
        this.checkboxGroup.updateModel(this.label, checked);
      }
    },

    initModel() {
      this.checkboxGroup = utils.getParentCompByName(this, "XCheckboxGroup");

      if (this.isCheckBoxGroup) {
        let checkboxGroup = this.checkboxGroup;
        if (
          Array.isArray(checkboxGroup.value) &&
          checkboxGroup.value.length > 0
        ) {
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
      debugger;
      if (!this.disabled) {
        this.model = this.value;
      }
    },

    // 父组件调用更新 model
    updateModelByGroup(checkBoxGroup) {
      //有值的
      if (checkBoxGroup.indexOf(this.label) > -1) {
        //没选的给选上
        if (!this.disabled) {
          this.model = true;
        }
      } else {
        //无值的
        if (!this.disabled) {
          this.model = false;
        }
      }
    }
  }
};
</script>
