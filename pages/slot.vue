<template>
  <!-- // 插槽使用总结：
      1.当提供插槽时，插槽只能插到指定的位置，而不管提供的须序如何
      2.如果插槽没有默认值，必须提供默认值，才有显示，如这种类型的<slot name="girl"/>
      3.有默认值的时候，使用时不填的话显示插槽默认值，否则显示提供的值如
       <template slot="girl"></template>，显示 漂亮、美丽、购物、逛街
    而 <template slot="girl">提供的女人</template> 显示 提供的女人
       4.当父级窗体传用错误时，会引起整个调用出错,传参时类型不对特别容易出错
       5.作用域插槽在于父组件引用子组件的数据，也想当于子组件给外部提供数据的接口



  -->
  <div style="margin-top:20px">
    <h4>这个世界不仅有男人和女人</h4>

    <slot name="girl">漂亮、美丽、购物、逛街</slot>

    <div style="height:1px;background-color:red;"/>

    <slot name="boy"/>

    <div style="height:1px;background-color:red;"/>

    <header>
      "header"
      <slot name="header"/>
    </header>
    <main>
      "main"
      <slot name="main"/>
    </main>
    <footer>
      "footer"
      <slot name="footer"/>
    </footer>
    <div>
      <slot name="dd">{{ sslot }}</slot>
    </div>

    <!-- //作用域插槽 -->
    <div>
      <slot say="你好"></slot>
    </div>

    <div>
      <slot shit="狗尿"></slot>
    </div>

    <div>
      <ul>
        <li v-for="(list,index) in lists" :key="index">
          <slot :menu="list"></slot>
        </li>
      </ul>
      <!-- <slot v-for="(list) in lists" :menu="list"></slot> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slotdemo',
  props: {
    lists: {
      type: Array,
      default: null
    },
    sslot: {
      type: String,
      default: '3'
    }
  }
}
</script>