/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-01-06 23:04:55
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */

/**
* 表格布局使用方法，必须先行再列，列里要再分行和列的话再嵌套表格
     <xlgrid>
       <xlrow>
           <xlcol>
             //嵌套使用
             <xlgrid>
               <xlrow>
                    <xlcol></xlcol>
               </xlrow>
             </xlgrid>
           </xlcol>
       </xlrow>
         <xlrow>
       </xlrow>
     </xlgrid>
*   h 表示高 可以填H=10PX=因定高度,H=0PX=自适应子窗口，H=10%等比，H=100%=全高或是自适应剩余高度
    W 表示宽 可以填W=10PX=因定宽度,W=0PX=自适应子窗口，W=10%等比，W=100%=全宽或是自适应剩余宽度
*/

export { default as xlgrid } from './xcontainer.vue'
export { default as xlrow } from './xrow.vue'
export { default as xlcol } from './xcol.vue'

