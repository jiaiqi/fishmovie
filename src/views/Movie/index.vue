<template>
  <div id="main" title="小鱼电影">
    <Header/>
    <div id="content">
      <div class="movie_menu">
        <div class="city_name">
          <router-link tag="span" to="city">西安</router-link>
          <i class="iconfont icon-triangle-down"></i>
        </div>
        <div class="hot_switch">
          <router-link to="nowplaying" class="hot_item">正在热映</router-link>
          <router-link to="willplaying" class="hot_item">即将上映</router-link>
        </div>
        <div class="search_entry">
          <i class="iconfont icon-xingtaiduICON_sousuo---copy"></i>
        </div>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <TabBar/>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  }
};
</script>

<style lang="css" scoped>
.movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.hot_switch {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>