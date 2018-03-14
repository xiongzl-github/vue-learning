<template>
  <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    <div id="main">
      <router-view></router-view>
      <mu-paper id="footer">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="/home" title="首页" icon="home" />
          <mu-bottom-nav-item value="/nearby" title="附近" icon="pin_drop" />
          <mu-bottom-nav-item value="/stroll" title="逛一逛" icon="language" />
          <mu-bottom-nav-item value="/order" title="订单" icon="add_shopping_cart" />
          <mu-bottom-nav-item value="/me" title="我的" icon="perm_identity" />
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </transition>

</template>

<script>
import Vue from "vue";
/* 局部注册
import "muse-components/styles/base.less"; // 加载基础的样式
import bottomNav from "muse-components/bottomNav/bottomNav";
import bottomNavItem from "muse-components/bottomNav/bottomNavItem";
import paper from "muse-components/paper";

Vue.component(paper.name, paper);
Vue.component(bottomNav.name, bottomNav);
Vue.component(bottomNavItem.name, bottomNavItem);
 */
export default {
  name: "Main",
  data() {
    return {
      bottomNav: "/home"
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.bottomNav = val;
      this.$router.push(val);
    }
  },
  mounted(){
    //console.log(this.$route.path);
    this.bottomNav = this.$route.path;
  }
};
</script>

<style>
#footer {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
