<template>
  <footer id="footer">
    <ul>
      <router-link tag='li' to="/movie">
        <i class="iconfont icon-dianying">
          <p>电影</p>
        </i>
      </router-link>
      <router-link tag='li' to="/cinema">
        <i class="iconfont icon-yingyuan">
          <p>影院</p>
        </i>
      </router-link>
      <router-link tag='li' to="/mine">
        <i class="iconfont icon-wode">
          <p>我的</p>
        </i>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name:'TabBar'
};
</script>

<style lang="css" scoped>
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.router-link-active {
  color: #f03d37;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>