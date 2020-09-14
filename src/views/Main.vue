<template>
  <div class="main__wrapper">
    <div class="main__navbar">
      <MainNavbar></MainNavbar>
    </div>
    <div class="main__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import  MainNavbar  from "@/components/MainNavbar.vue";
export default {
  components:{
    MainNavbar
  },
};
</script>

<style lang="scss">
.main {
  &__wrapper{
    width: 100%;
    height: 100%;
    min-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__navbar{
    height: 110px;
    width: 100%;
    min-width: 1000px;
  }
  &__content {
    flex: 1;
    width: 100%;
    height: 100%;
  }
}
</style>