<!-- 导航 -->
<template>
  <div>
    <mu-appbar title="">
      <mu-flat-button label="保定" class="demo-flat-button" slot="left" labelPosition="before" icon="keyboard_arrow_down" secondary/>
      <mu-text-field fullWidth icon="search" class="appbar-search-field" slot="left" hintText="海底捞火锅" />
      <mu-bottom-nav-item value="" slot="right" title="扫我" icon="crop_free" />
    </mu-appbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Navigation.vue"
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.mu-text-field{
  width: 210px;
}
</style>