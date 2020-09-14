<template>
  <nav class="navbar">
    <div class="navbar__header">
      <h1 class="navbar__brand" @click="$router.push({ name: 'home' })">
        <a class="navbar__brand-lg" href="javascript:;">乐家园</a>
        <a class="navbar__brand-lg-other" href="javascript:;">物业管理系统1.0</a>
      </h1>
    </div>
    <ul class="navbar__menu">
      <li
        class="navbar__menu-item"
        v-for="(item,index) in list"
        :key="index"
        :class="{click:n==index}"
        @click="menu_click(item,index)"
      >
        <i :class="item.icon" aria-hidden="true"></i>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "MainNavbar",
  data() {
    return {
      list: [
        { index: 0, icon: 'fa fa-home', title: "回到首页", url: '/' },
        { index: 1, icon: 'fa fa-comments-o', title: '服务管理', url: '/service'},
        { index: 2, icon: 'fa fa-pencil-square-o', title: '财务管理', url: '/finance'},
        { index: 3, icon: 'fa fa-sliders', title: '业务管理', url: '/business'},
        { index: 4, icon: 'fa fa-folder-open-o', title: '资源管理', url: '/resource'},
        { index: 5, icon: 'fa fa-wrench', title: '系统管理', url: '/system'}
      ],
      n : -1,
    };
  },

  components: {},
  computed: {},
  methods: {
    menu_click(item,index){
      console.log(item.index, index)
      // console.log(item.title)
      this.$router.push(item.url)
      this.n = item.index;
      // console.log(this.n);

    }
  }
};
</script>



<style lang="scss" scoped>
$nav-height: 110px;
.navbar {
  min-width: 1000px;
  z-index: 1030;

  height: $nav-height;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  background-color: #234785; //$navbar--background-color;

  &__header {
    position: relative;
    float: left;
    width: 230px;
    height: $nav-height;
    overflow: hidden;
  }
  &__brand {
    display: table-cell;
    vertical-align: middle;
    width: 230px;
    height: $nav-height;
    margin: 0;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    color: #fff;

    &-lg {
      display: block;
      text-align: center;
      font-size: 40px;
      margin: 0 5px;
      padding-top: 20px;
      padding-left: 8px;

      color: #fff;
      letter-spacing: 10px;
      &:focus,
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
    &-lg-other {
      font-family: "Times New Roman", Times, serif;

      display: block;
      font-size: 12px;
      letter-spacing: 2px;
      margin: 0 5px;
      padding: 0;
      color: #fff;
      &:focus,
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // background: sienna;
    float: right;
    width: 700px;
    padding-top: 10px;
    &-item {
      cursor: pointer;
      display: inline-block;
      padding: 0 10px;
      margin: 0 10px;
      text-align: center;
      i {
        color: #fff;
        font-size: 60px;
      }
      span {
        margin-top: 5px;
        display: block;
        color: ghostwhite;
        font-size: 16px;
      }
    }
  }
}

.click {
  background-image: linear-gradient(
    0deg,
    rgba(79, 172, 254, 0.5),
    rgba(35, 71, 133, 100%)
  );
}
</style>