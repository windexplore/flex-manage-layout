<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
html, body, #app {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
#app{
  overflow: hidden;
}
</style>