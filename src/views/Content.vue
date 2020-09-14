<template>
  <div class="content__wrapper">
    <Sidebar></Sidebar>
    <div class="content__body">
      <router-view></router-view>
      <div style="height:110px;"></div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  export default {
    components: {
      Sidebar
    },
  }
</script>


<style lang="scss">
.content{
  &__wrapper {
    min-width: 1000px;
    display: flex;
    flex-direction: row ;
    justify-content: space-between;
    width: 100%;
    // height: calc(100% -110px);
    height: 100%;
  }
  &__sidebar{
    width:300px;
    background-color: #D5DCE9;
    // height: calc(100% -110px) ;
    display: block;
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar { display: none; }
  }
  &__body{
    min-width: 700px;
    flex: 1;
    overflow-y: scroll;
  }
}
</style>