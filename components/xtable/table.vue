<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-01 08:10:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>

  <!-- //表容器 -->
  <div class="x-table-view-container">

    <!-- //表外框 -->
    <div :style="{'width': width +'px','height': height +'px'}"
         class="x-table-view-wrapper">

      <!-- 左表、为了固定列 -->
      <template :if="frozenCols.length>0">
        <div class="x-table-view-left-wrapper"
             :style="{'width':leftViewWidth+'px','height': height +'px'}">
          <!-- 左表头 -->
          <div class="x-table-view-head-wrapper">
            <table border="0"
                   cellspacing="0"
                   cellpadding="0">
              <tbody>
                <!-- //表头行 -->
                <tr v-for="(headrow,headrowindex) in frozenTitleCols"
                    :key="headrowindex">
                  <td v-for="(headcol,headcolindex) in headrow"
                      :key="headcolindex"
                      :colspan="headcol.fields.length"
                      :rowspan="headcol.rowspan">
                    <div :class="['x-table-title-cell',showVerticalBorder?'vertical-border':'',showHorizontalBorder?'horizontal-border':'']"
                         :style="{'width':titleColumnWidth(headcol.fields)+'px','height':titleColumnHeight(headcol.rowspan)+'px',
                               'line-height':titleColumnHeight(headcol.rowspan)+'px',
                               'text-align':headcol.titleAlign}">
                      <span>{{ headcol.title }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 左表内容 -->
          <div class="x-table-view-body-wrapper">
            <table border="0"
                   cellspacing="0"
                   cellpadding="0">
              <tbody>
                <tr v-for="(bodyrow,bodyrowindex) in tableData"
                    :key="bodyrowindex">
                  <td v-for="(bodycol,bodycolindex) in frozenCols"
                      :key="bodycolindex">
                    <div :class="['x-table-title-cell',showVerticalBorder?'vertical-border':'',showHorizontalBorder?'horizontal-border':'']"
                         :style="{'width':bodycol.width+'px','height':rowHeight+'px','line-height':rowHeight+'px','text-align':bodycol.columnAlign}">
                      <span>{{ bodyrow[bodycol.field] }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 左表底 -->
          <div class="x-table-view-foot-wrapper">
            <table />
          </div>
        </div>
      </template>

      <div class="x-table-view-right-wrapper"
           :style="{'width':rightViewWidth+'px','height': height +'px'}">

        <!-- 右表头 -->
        <div class="x-table-view-head-wrapper">
          <table border="0"
                 cellspacing="0"
                 cellpadding="0">
            <tbody>
              <!-- //表头行 -->
              <tr v-for="(headrow,headrowindex) in noFrozenTitleCols"
                  :key="headrowindex">
                <td v-for="(headcol,headcolindex) in headrow"
                    :key="headcolindex"
                    :colspan="headcol.fields.length"
                    :rowspan="headcol.rowspan">
                  <div :class="['x-table-title-cell',showVerticalBorder?'vertical-border':'',showHorizontalBorder?'horizontal-border':'']"
                       :style="{'width':titleColumnWidth(headcol.fields)+'px','height':titleColumnHeight(headcol.rowspan)+'px',
                               'line-height':titleColumnHeight(headcol.rowspan)+'px',
                               'text-align':headcol.titleAlign}">
                    <span>{{ headcol.title }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 右表内容 -->

        <div class="x-table-view-body-wrapper">
          <table border="0"
                 cellspacing="0"
                 cellpadding="0">
            <tbody>
              <tr v-for="(bodyrow,bodyrowindex) in tableData"
                  :key="bodyrowindex">
                <td v-for="(bodycol,bodycolindex) in noFrozenCols"
                    :key="bodycolindex">
                  <div :class="['x-table-title-cell',showVerticalBorder?'vertical-border':'',showHorizontalBorder?'horizontal-border':'']"
                       :style="{'width':bodycol.width+'px','height':rowHeight+'px','line-height':rowHeight+'px','text-align':bodycol.columnAlign}">

                    <!-- 必须设定宽度，不然要其要根据内容自动缩小 -->
                    <input :value="bodyrow[bodycol.field]"
                           :readonly="bodycol.isEdit==false"
                           :style="{'text-align':bodycol.columnAlign,'border':'0px','height':'100%','line-height':'100%','width':'100%'}"
                           type="text"
                           class="sp-cell-input"
                           @keyup="cellEditClick($event,bodycol,bodyrow,bodyrowindex)"
                           @blur="onblur($event,bodycol,bodyrow,bodyrowindex)"
                           @focus="onfocus($event,bodycol,bodyrow,bodyrowindex)" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 右表底 -->
        <div class="x-table-view-foot-wrapper">
          <table />
        </div>

      </div>

      <table ref="mtable"
             border="0"
             cellspacing="0"
             cellpadding="0"
             width="100%"
             class="v-table-class"
             style="display:none">
        <thead>

          <tr v-for="(rowtitle,index) in headRows"
              :key="index">
            <th v-for="(coltitle,index) in rowtitle"
                :colspan="coltitle.colspan"
                :rowspan="coltitle.rowspan"
                :key="index">
              {{ coltitle.title }}
            </th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="(rowdata,rowindex) in tableData "
              :key="rowindex"
              class="v-row-class">
            <!-- 单元格 -->
            <th v-for="(col,colindex) in columns"
                :key="colindex"
                :data-colname="col.field"
                :ref="col.field+rowindex"
                :style="{'width':col.width+'px','height': rowHeight+'px','line-height':rowHeight+'px'}">
              <div :class="['v-table-body-cell','cellEdit']"
                   :style="{'width':'100%','height': '100%','line-height':'100%','text-align':col.columnAlign}">
                <!-- 必须设定宽度，不然要其要根据内容自动缩小 -->
                <input :value="rowdata[col.field]"
                       :readonly="col.isEdit==false"
                       :style="{'text-align':col.columnAlign,'border':'0px','height':'100%','line-height':'100%','width':col.width+'px'}"
                       type="text"
                       class="sp-cell-input"
                       @keyup="cellEditClick($event,col,rowdata,rowindex)"
                       @blur="onblur($event,col,rowdata,rowindex)"
                       @focus="onfocus($event,col,rowdata,rowindex)">
              </div>

            </th>

          </tr>

        </tbody>

        <tfoot bgcolor="#00ccff"
               align="right"
               valign="middle">
          <tr>
            <td colspan="16">表格创建日期:2013-6-8</td>
          </tr>
        </tfoot>

      </table>

      <!-- //拖动时的虚线，点是怎么设置的还得看 -->
      <div class="v-table-drag-line"
           style="display:none" />
    </div>

  </div>

</template>


<script>
import utils from '../../utils/utils.js'
import { hasClass, addClass, removeClass } from '../../utils/dom.js'
import bodyCellMergeMixin from '../../utils/body-cell-merge-mixin'
import deepClone from '../../utils/deepClone'

function mc(tableId, startRow, endRow, icol) {
  var tb = tableId
  var tablechilds = tableId.children
  var tbody = null
  for (var i = 0; i < tablechilds.length; i++) {
    if (tablechilds[i].nodeName == 'TBODY') tbody = tablechilds[i]
  }

  var rowitem = null
  var rowSpan = 1

  for (var row = 0; row < tbody.rows.length; row++) {
    var subCol = tbody.rows[0].cells.length - tbody.rows[row].cells.length

    var item = null
    if (subCol == 0) {
      item = tbody.rows[row].cells[icol]
    } else {
      item = tbody.rows[row].cells[icol - subCol]
    }

    if (rowitem == null || rowitem.innerHTML != item.innerHTML) {
      rowitem = item
      rowSpan = 1
    } else {
      rowSpan = rowSpan + 1
      rowitem.style.height = rowitem.style.height + item.style.height
      //用hidden,不要用removeChild,引起各种算法，向前向后移动
      //  tbody.rows[row].removeChild(item);
      item.hidden = true
    }
    rowitem.rowSpan = rowSpan
  }
}

export default {
  mixins: [bodyCellMergeMixin],
  props: {
    //  表宽
    width: {
      type: Number,
      default: 50
    },

    minWidth: {
      type: Number,
      default: 50
    },
    //表高
    height: {
      type: Number,
      require: false,
      default: 50
    },

    minHeight: {
      type: Number,
      default: 50
    },

    // 内容行高
    rowHeight: {
      type: Number,
      default: 40
    },

    columns: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },

    // 特殊表头
    headRows: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },

    headrowheight: {
      type: Number,
      default: 40
    },

    tableData: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },

    footer: {
      type: Array,
      default: function () {
        return []
      }
    },

    footerRowHeight: {
      type: Number,
      default: 40
    },
    showVerticalBorder: {
      type: Boolean,
      default: true
    },
    showHorizontalBorder: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // 冻结的列集合
    frozenCols() {
      return this.columns.filter(x => x.isFrozen === true)
    },

    // 冻结的表头列集合
    frozenTitleCols() {
      // debugger
      var frozenTitleCols = [],
        self = this

      var cheadRows = deepClone(this.headRows)

      if (cheadRows.length > 0) {
        // 获取当前锁定的字段集合
        var frozenFields = this.frozenCols.map(x => x.field)

        //循环表头每一行
        cheadRows.forEach(function (rows) {
          //循环表头每一单元格
          var frozenTitleRows = []
          for (var x = 0; x < rows.length; x++) {
            //var frozenTitleRows = rows.filter(function (cell) {
            var cell = rows[x]
            //获取这一行每个单元格字段的字段名
            var fields = [];
            for (var i = 0; i < cell.fields.length; i++) {
              // debugger
              var pos = frozenFields.indexOf(cell.fields[i])
              if (pos >= 0) {
                fields.push(cell.fields[i])
              }
            }
            //更改原数组
            cell.fields = fields
            if (cell.fields.length > 0) {
              frozenTitleRows.push(cell)
            }
          }


          // })

          //哪果一行有过虑的字段
          if (frozenTitleRows.length > 0) {
            frozenTitleCols.push(frozenTitleRows)

            // var minRowspan = self.getMinRowspan(frozenTitleRows)

            // if (minRowspan && minRowspan > 0) {
            //   for (var i = 0; i < minRowspan; i++) {
            //     frozenTitleCols.push([])
            //   }
            // }
          }

        })
      }

      return frozenTitleCols
    },

    // 非冻结列集合
    noFrozenCols() {
      return this.columns.filter(x => x.isFrozen !== true)
    },

    // 未的表头列集合
    noFrozenTitleCols() {
      debugger
      var frozenTitleCols = [],
        self = this
      var cheadRows = deepClone(this.headRows)
      if (cheadRows.length > 0) {
        // 获取当前锁定的字段集合
        var frozenFields = this.noFrozenCols.map(x => x.field)

        var cheadRows = deepClone(this.headRows)

        //循环表头每一行
        cheadRows.forEach(function (rows) {
          //循环表头每一单元格
          var frozenTitleRows = []
          for (var x = 0; x < rows.length; x++) {
            //var frozenTitleRows = rows.filter(function (cell) {
            var cell = rows[x]
            //获取这一行每个单元格字段的字段名
            var fields = [];
            for (var i = 0; i < cell.fields.length; i++) {
              debugger
              var pos = frozenFields.indexOf(cell.fields[i])
              if (pos >= 0) {
                fields.push(cell.fields[i])
              }
            }
            //更改原数组
            cell.fields = fields
            if (cell.fields.length > 0) {
              frozenTitleRows.push(cell)
            }
          }


          // })

          //哪果一行有过虑的字段
          if (frozenTitleRows.length > 0) {
            frozenTitleCols.push(frozenTitleRows)

            // var minRowspan = self.getMinRowspan(frozenTitleRows)

            // if (minRowspan && minRowspan > 0) {
            //   for (var i = 0; i < minRowspan; i++) {
            //     frozenTitleCols.push([])
            //   }
            // }
          }

        })
      }

      return frozenTitleCols
    },
    // 左侧区域宽度
    leftViewWidth() {
      var result = 0
      if (this.frozenCols.length > 0) {
        result = this.frozenCols.reduce((total, curr) => total + curr.width, 0);
      }
      return result
    },
    // 右侧区域宽度
    rightViewWidth() {
      var result = 0
      debugger
      if (this.noFrozenCols.length > 0) {
        result = this.noFrozenCols.reduce((total, curr) => total + curr.width, 0);
      }
      return result
    }
  },

  methods: {
    // 获取每个表头列的宽度
    titleColumnWidth(fields) {
      var result = 0
      if (Array.isArray(fields)) {
        var matchItems = this.columns.filter((item, index) => {
          return fields.some(x => x === item.field)
        })

        //用于计算多列的宽度总得
        result = matchItems.reduce((total, curr) => total + curr.width, 0)
      } else {
        console.error(
          this.errorMsg + 'the fields attribute must be a array in titleRows'
        )
      }
      return result
    },

    // 获取每个表头列的高度
    titleColumnHeight(rowspan) {
      if (rowspan && rowspan > 0) {
        return this.headrowheight * rowspan
      } else {
        return this.headrowheight
      }
    },

    created() {
      // debugger
      // mc(this.$refs.mtable, 0)
    },
    ontest() {
      let tb = this.$refs.mtable
      mc(tb, 0, 0, 0)
      mc(tb, 0, 0, 2)
      mc(tb, 0, 0, 3)
    },

    emtest(e, v) {
      var field = this.columns.filter((item, index) => {
        return item.field == v
      })
      // debugger

      field[0].width = field[0].width + 10
      // alert(field[0].field)
    },

    // 单元格点击
    cellEditClick(e, cell, rowData, rowIndex) {
      // debugger
      // alert(field)
      // if (isEdit) {
      //   let self = this
      //   // 单元格内容变化后的回调
      //   let onCellEditCallBack = function (newValue, oldVal) {
      //     // self.cellEditDone &&
      //     //   self.cellEditDone(newValue, oldVal, rowIndex, rowData, field)
      //   }
      //   this.cellEdit(e, onCellEditCallBack, rowIndex, rowData, field)

      //   //
      // }

      this.cellEdit(e, cell, rowData, rowIndex)
    },

    // 单元格编辑回调
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue

      // 接下来处理你的业务逻辑，数据持久化等...
    },

    // cell edit
    // cellEdit(e, callback, rowIndex, rowData, field) {

    cellEdit(e, cell, rowData, rowIndex) {
      let target = e.target,
        self = this,
        oldVal,
        editInput,
        editInputLen,
        actionFun,
        textAlign,
        childTarget,
        rowTarget = e.target,
        tableTarget = e.target,
        cellTarget,
        nextcellTarget,
        tbodyTarget,
        nextrowTarget,
        nextchildTarget,
        nextcoldata

      //获得单元格的DIV
      while (
        (target.className &&
          target.className.indexOf('v-table-body-cell') === -1) ||
        !target.className
      ) {
        target = target.parentNode
      }

      cellTarget = target.parentNode

      //获得单元格的DIV
      while (
        (rowTarget.className &&
          rowTarget.className.indexOf('v-row-class') === -1) ||
        !rowTarget.className
      ) {
        rowTarget = rowTarget.parentNode
      }

      if (rowTarget != null) {
        tbodyTarget = rowTarget.parentNode
      }

      //获得单元格的DIV
      while (
        (tableTarget.className &&
          tableTarget.className.indexOf('v-table-class') === -1) ||
        !tableTarget.className
      ) {
        tableTarget = tableTarget.parentNode
      }

      //获得数据行数

      //如还在本行内
      nextcellTarget = null

      if (cellTarget.cellIndex < rowTarget.cells.length) {
        //如果是本行最后一个单元格
        if (cellTarget.cellIndex == rowTarget.cells.length - 1) {
          //有两种处理方式，转到下行的可编辑单元格
          nextcellTarget = rowTarget.cells[cellTarget.cellIndex]
          if (rowIndex < tbodyTarget.rows.length) {
            if (rowIndex == tbodyTarget.rows.length - 1) {
              var v = '0'
            }
            //转到下一行
            else {
              nextrowTarget = tableTarget.rows[rowTarget.rowIndex + 1]

              //转到下一行的可视且可编辑
              for (var i = 0; i < nextrowTarget.cells.length; i++) {
                let cell = nextrowTarget.cells[i]
                if (!cell.hidden) {
                  nextcellTarget = cell
                  break
                }
              }
            }
          }
        } else {
          //转到下一行的可视且可编辑

          for (
            var i = cellTarget.cellIndex + 1;
            i < rowTarget.cells.length;
            i++
          ) {
            let cell = rowTarget.cells[i]
            let cellcol = this.columns[cell.cellIndex]
            if (!cell.hidden && cellcol.isEdit) {
              nextcellTarget = cell
              break
            }

            // nextcellTarget = rowTarget.cells[cellTarget.cellIndex + 1]
          }
        }
      }
      nextchildTarget = nextcellTarget.children[0].children[0]

      // //如在本行最后一个
      // if((cellTarget.cellIndex)==rowTarget.cells.length)
      // {
      //   //转到下行
      //   if(rowIndex<tableTarget)

      // }

      // 子节点（span节点）
      childTarget = target.children[0]

      // 把子节点影藏掉
      // childTarget.style.display = 'none'

      // if (hasClass(target, 'cell-editing')) {
      //   return false
      // }

      // addClass(target, 'cell-editing')

      // oldVal = childTarget.innerText.trim()

      // if (target.style.textAlign) {
      //   textAlign = target.style.textAlign
      // }

      if (nextchildTarget && e.keyCode == 13) {
        nextchildTarget.focus()
        editInputLen = nextchildTarget.value.length
        // let ctr = nextchildTarget.createTextRange()
        // ctr.moveStart('character', editInputLen)
        // ctr.collapse()
        // ctr.select()
        //控制光标在哪个位置
        nextchildTarget.selectionStart = nextchildTarget.selectionEnd = editInputLen
      } else {
        childTarget.focus()
      }

      // addClass(target, 'cell-editing')

      // editInput = document.createElement('input')
      // editInput.value = oldVal
      // editInput.className = 'cell-edit-input'
      // editInput.style.textAlign = textAlign
      // editInput.style.width = '100%'
      // editInput.style.height = '100%'
      // editInput.style.border = '3px'
      // //editInput.style = `width:100%;height: 100%;text-align: ${textAlign};`;

      // target.appendChild(editInput)

      // editInput.focus()

      // editInputLen = editInput.value.length
      // if (document.selection) {
      //   let ctr = editInput.createTextRange()
      //   ctr.moveStart('character', editInputLen)
      //   ctr.collapse()
      //   ctr.select()
      // } else if (
      //   typeof editInput.selectionStart == 'number' &&
      //   typeof editInput.selectionEnd == 'number'
      // ) {
      //   editInput.selectionStart = editInput.selectionEInput.selectionEnd = editInputLen
      // }

      // actionFun = function (e) {
      //   if (
      //     typeof e.keyCode === 'undefined' ||
      //     e.keyCode === 0 ||
      //     e.keyCode == 13 ||
      //     e.keyCode == 9
      //     || e.keyCode == 16
      //   ) {
      //     if (hasClass(target, 'cell-editing')) {
      //       removeClass(target, 'cell-editing')
      // addClass(target, 'cell-editing')
      //     } else {
      //       return false
      //     }

      //     childTarget.style.display = ''

      //     // fixed this.value bug in IE9,
      //     callback(editInput.value, oldVal)

      //     utils.unbind(editInput, 'blur', actionFun)
      //     utils.unbind(editInput, 'keydown', actionFun)
      //     target.removeChild(editInput)
      //     console.log(
      //       '**********************************click*******************************************'
      //     )

      //     // var e = document.createEvent('MouseEvents')
      //     // e.initEvent('click', true, true)
      //     // let colname=nextcellTarget.attributes['data-colname'].value
      //     debugger
      //     if (e.keyCode == 13 || e.keyCode == 9 || e.keyCode == 16 ) {
      //        e.stopPropagation()
      //       e.cancelBubble=true

      //       nextcellTarget.attributes.clicktype = 'keypress'
      //       if (nextcellTarget != null) {

      //         nextcellTarget.children[0].click();
      //          e.stopPropagation()
      //          e.cancelBubble=true
      //           return false
      //       }
      //     }
      //     //  cellEditClick(e, true, rowData, colname, rowIndex)
      //     // nextcellTarget.$emit('click')
      //     // alert('bule')
      //     // self.$refs.emtest.click();
      //   }
      //         event.preventDefault()
      //          e.stopPropagation()
      //          e.cancelBubble=true
      //           return false
      // }
      // actionFun = function (e) {

      // }

      //  utils.bind(editInput, 'blur', actionFun)
      // utils.bind(editInput, 'keydown', actionFun)

      //  return false
    },
    onblur(e, isEdit, rowData, field, rowIndex) {
      // debugger
      let tr = e.target.parentNode.parentNode
      // removeClass(tr, 'cell-editing')
      // addClass(target, 'cell-editing')
    },
    onfocus(e, isEdit, rowData, field, rowIndex) {
      let tr = e.target.parentNode.parentNode
      //  addClass(tr, 'cell-editing')
      // alert('onfocus')
    }
  }
}
</script>



<style lang='scss'>
.x-table-view-wrapper {
  overflow: hidden;
  border: 1px solid #d8dfe6;
  position: relative;
  display: table-row;
}

.x-table-view-left-wrapper {
  // position: absolute;
  // top:0px;
  // left:0px;
   float: left;
}

.x-table-view-right-wrapper {
  // position: absolute;
  // top:0px;
  // right:0px;
  float: left;
}
.x-table-view-head-inner {
  float: left;
  width: 10000px;
}
td,
th {
  font-style: normal;
  font-weight: normal;
  padding: 0;
  margin: 0;
}

.cell-editing {
  border: 1px solid green;
  //  border-left-width: 1px !important;
  //  border-right-width: 1px !important;
  //  border-bottom-width: 1px !important;
  //  border-top-width: 1px !important;
}

.x-table-title-cell {
  padding: 0;
  margin: 0;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  border-width: 0;
  border-style: solid;
  border-color: rgba(221, 221, 221, 1);
  text-overflow: ellipsis;
}

.x-table-title-cell:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  /* border: 1px solid red; */
}

.v-table-drag-line {
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 2px dashed #ddd;
  z-index: 10;
}
.v-table-body-cell {
  padding: 0;
  margin: 0;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  border-width: 0;
  border-style: solid;
  border-color: rgba(221, 221, 221, 1);
  text-overflow: ellipsis;

  // input {
  //   outline: none; //去掉输入框的蓝色框
  //   align: center;
  // }
}

// .v-table-body-cell:before {
//   content: '';
//   // display: inline-block;
//   // height: 100%;
//   // vertical-align: middle;
//   /* border: 1px solid red;*/ /* so we can see what's going on */
// }
.vertical-border {
  border-right-width: 1px !important;
}

.horizontal-border {
  border-bottom-width: 1px !important;
}

.x-table-title-cell {
  border-width: 0;
  border-style: solid;
  border-color: rgba(221, 221, 221, 1);
}
</style>
