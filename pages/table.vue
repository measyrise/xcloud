<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-01 08:10:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <div style="overflow:hidden;">
    <button @click="ontest">合并单元格</button>
    <button @click="ontest">单元格可编辑</button>
    <button @click="emtest($event,'name')"
            ref="emtest"
            style="margin-bottom:30px"
            >单元格调整</button>

    <xtable :height=300
            :width=1000
            :columns="columns"
            :headRows="titleRows"
            :tableData="tableData"
            ></xtable>

  </div>

</template>


<script>

import xtable from '../components/xtable/table'
export default {
  components: {xtable},

 data() {
    return {
      titleRows: [
        [
          {
            fields: ['custome'],
            title: '排序',
            titleAlign: 'center',
            rowspan: 2
          },
          {
            fields: ['name', 'gender', 'height'],
            title: '基础信息',
            titleAlign: 'center',
            colspan: 3
          },
          {
            fields: ['tel', 'email'],
            title: '联系方式',
            titleAlign: 'center',
            colspan: 2
          },
          {
            fields: ['hobby', 'address'],
            title: '爱好及地址',
            titleAlign: 'center',
            rowspan: 2,
            colspan: 2
          }
        ],

        [
          { fields: ['name'], title: '姓名', titleAlign: 'center' },
          {
            fields: ['gender'],
            title: '性别',
            titleAlign: 'center',
            orderBy: 'asc'
          },
          {
            fields: ['height'],
            title: '身高',
            titleAlign: 'center',
            orderBy: 'desc'
          },
          { fields: ['tel'], title: '手机号码', titleAlign: 'center' },
          { fields: ['email'], title: '邮箱', titleAlign: 'center' }
        ],

        [
          {
            fields: ['custome', 'name', 'gender', 'height'],
            title: '平均值',
            titleAlign: 'center',
            colspan: 4,
            titleCellClassName: 'title-cell-class-name-test1'
          },
          {
            fields: ['tel'],
            title: '000',
            titleAlign: 'center',
            titleCellClassName: 'title-cell-class-name-test2'
          },
          {
            fields: ['email'],
            title: '111',
            titleAlign: 'center',
            titleCellClassName: 'title-cell-class-name-test2'
          },
          {
            fields: ['hobby'],
            title: '222',
            titleAlign: 'center',
            titleCellClassName: 'title-cell-class-name-test2'
          },
          {
            fields: ['address'],
            title: '333',
            titleAlign: 'center',
            titleCellClassName: 'title-cell-class-name-test2'
          }
        ]
      ],
      columns: [
        {
          field: 'custome',
          width: 50,
          titleAlign: 'center',
          columnAlign: 'center',
          formatter: function (rowData, index) {
            return index < 3
              ? '<span style="color:red;font-weight: bold;">' +
              (index + 1) +
              '</span>'
              : index + 1
          },
          isFrozen: true,
          isEdit: true
        },
        {
          field: 'name',
          width: 100,
          columnAlign: 'center',
          isFrozen: true,
          isEdit: true
        },
        {
          field: 'gender',
          width: 150,
          columnAlign: 'center',
          isFrozen: false,
          isEdit: true
        },
        {
          field: 'height',
          width: 150,
          columnAlign: 'center',
          isFrozen: false,
          isEdit: true
        },
        { field: 'tel', width: 190, columnAlign: 'center', isEdit: false,isFrozen: false },
        { field: 'email', width: 230, columnAlign: 'center', isEdit: true ,isFrozen: false},
        { field: 'hobby', width: 230, columnAlign: 'center', isEdit: true ,isFrozen: false},
        { field: 'address', width: 330, columnAlign: 'left', isEdit: true ,isFrozen: false}
      ],

      tableData: [
        {
          name: '赵伟',
          gender: '男',
          height: '183',
          email: 'zhao@gmail.com',
          tel: '156*****1987',
          hobby: '钢琴、书法、唱歌',
          address: '上海市黄浦区金陵东路569号17楼'
        },
        {
          name: '李伟',
          gender: '男',
          height: '166',
          email: 'li@gmail.com',
          tel: '182*****1538',
          hobby: '钢琴、书法、唱歌',
          address: '上海市奉贤区南桥镇立新路12号2楼'
        },
        {
          name: '孙伟',
          gender: '女',
          height: '186',
          email: 'sun@gmail.com',
          tel: '161*****0097',
          hobby: '钢琴、书法、唱歌',
          address: '上海市崇明县城桥镇八一路739号'
        },
        {
          name: '周伟',
          gender: '女',
          height: '188',
          email: 'zhou@gmail.com',
          tel: '197*****1123',
          hobby: '钢琴、书法、唱歌',
          address: '上海市青浦区青浦镇章浜路24号'
        },
        {
          name: '吴伟',
          gender: '男',
          height: '160',
          email: 'wu@gmail.com',
          tel: '183*****6678',
          hobby: '钢琴、书法、唱歌',
          address: '上海市松江区乐都西路867-871号'
        },
        {
          name: '冯伟',
          gender: '女',
          height: '168',
          email: 'feng@gmail.com',
          tel: '133*****3793',
          hobby: '钢琴、书法、唱歌',
          address: '上海市金山区龙胜路143号一层'
        }
      ]
    }
  }
  }
</script>
