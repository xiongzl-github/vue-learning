<template>
  <div class="user">
    <h2>用户列表</h2>
    <ul>
      <li v-for="user in users" :key="user" v-text="user"></li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        users:['tom', 'jack', 'mike', 'alice']
      }
    }
  }
</script>

// scoped 表示该样式只在当前组件中有效
<style scoped>
  h2{
    color: blue;
  }
</style>
















