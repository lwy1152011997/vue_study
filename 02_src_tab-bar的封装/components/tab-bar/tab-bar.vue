<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.tab_bar {
  width: 100%;
  display: flex;
  background-color: #f7f7f7;

  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2); /* 阴影偏移的x, y 阴影模糊范围 阴影颜色 */
}
</style>