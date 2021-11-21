<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LogIn msg ="这里是父组件传入的字符串"></LogIn>
  </div>
</template>

<script>
import LogIn from "@/pages/LogIn";

export default {
  name: 'App',
  components: {
    LogIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
