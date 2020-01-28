<template>
  <div class="tab_bar_item" @click="tabBarItemClick">
    <div v-if="!isActive"> <slot name="item-icon"></slot> </div>
    <div v-else> <slot name="item-icon-active"></slot> </div>
    <div :style="activeTextStyle"> <slot name="item-text"> </slot></div>
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    props: {
      linkPath: String,
      activeTextColor: {
        type: String,
        default: 'palevioletred'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      // 动态显示所点击是哪个路由
      isActive() {
        return this.$route.path.indexOf(this.linkPath) !== -1 // 如果找到的值不等于-1 表示路径相同
      },
      // 动态显示文字颜色,通过绑定style,将style的样式绑定到计算属性中进行编写
      activeTextStyle() {
        return this.isActive ? {color: this.activeTextColor} : {}
      }
    },
    methods: {
      // 动态跳转路由
      tabBarItemClick() {
        this.$router.replace(this.linkPath)
      }
    }
  }
</script>

<style scoped>
.tab_bar_item {
  flex: 1; /* 让每一个flex盒子均等分 */
  height: 49px;
  text-align: center;
  font-size: 13px;
  margin-top: 4px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle; /* 去除图片下边的默认有3px的空隙 */
  margin-bottom: 2px;
}

</style>