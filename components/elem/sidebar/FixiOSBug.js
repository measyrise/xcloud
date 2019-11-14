/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-04 17:57:00
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
export default {
  computed: {
    device() {
      return this.$store.state.app.device;
    }
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseeleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS();
  },
  methods: {
    fixBugIniOS() {
      const $submenu = this.$refs.submenu;
      if ($submenu) {
        const handleMouseleave = $submenu.handleMouseleave;
        $submenu.handleMouseleave = e => {
          if (this.device === "mobile") {
            return;
          }
          handleMouseleave(e);
        };
      }
    }
  }
};
