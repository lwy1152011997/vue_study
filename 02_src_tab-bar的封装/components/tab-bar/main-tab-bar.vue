<template>
 <div class="main_tab_bar">
   <Tabbar>
     <TabBarItem linkPath="/home">
       <img src="./img/home.svg" alt="" slot="item-icon">
       <img src="./img/home_active.svg" alt="" slot="item-icon-active">
       <div slot="item-text">首页</div>
     </TabBarItem>
     <TabBarItem linkPath="/category">
       <img src="./img/category.svg" alt="" slot="item-icon">
       <img src="./img/category_active.svg" alt="" slot="item-icon-active">
       <div slot="item-text">分类</div>
     </TabBarItem>
     <TabBarItem linkPath="/carts">
       <img src="./img/shopcart.svg" alt="" slot="item-icon">
       <img src="./img/shopcart_active.svg" alt="" slot="item-icon-active">
       <div slot="item-text">购物车</div>
     </TabBarItem>
     <TabBarItem linkPath="/profile" activeTextColor="cadetblue">
       <img src="./img/profile.svg" alt="" slot="item-icon">
       <img src="./img/profile_active.svg" alt="" slot="item-icon-active">
       <div slot="item-text">我的</div>
     </TabBarItem>
   </Tabbar>
 </div>

</template>

<script>
import Tabbar from './tab-bar'
import TabBarItem from './tab-bar-item'

export default {
  name: "Main-tab-bar",
  components: {
    Tabbar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>