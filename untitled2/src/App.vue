<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import LogIn from "@/pages/LogIn";
  import PageHeader from "@/pages/PageHeader";
  export default {
    // eslint-disable-next-line vue/no-unused-components
    components:{PageHeader, LogIn},
    name: 'App',
  }
</script>

<style lang="less" scoped>
#app{
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  border: hidden;
  height: 100%;
  width: 100%;
  background-color: bisque;
}
</style>
