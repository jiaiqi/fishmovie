<template>
  <section id="content">
    <div class="topbar">
      <div class="city_switch">
        西安
        <i class="iconfont icon-triangle-down"></i>
      </div>
      <div class="city_switch">
        全城
        <i class="iconfont icon-triangle-down"></i>
      </div>
      <div class="brand_switch">
        品牌
        <i class="iconfont icon-triangle-down"></i>
      </div>
      <div class="feature">
        特色
        <i class="iconfont icon-triangle-down"></i>
      </div>
    </div>
    <div class="cinema_body">
      <div class="wrapper">
        <ul>
          <li>
            <p>
              <span class="cinema_name">华夏优加影城(长和国际店)</span>
              <span class="q">
                <span class="price">19.9</span>
                元起
              </span>
            </p>
            <p class="address">
              <span class="location">未央区经济技术开发区凤城八路与明光路交汇处长和国际卜蜂中心4</span>
              <span class="distance">999km</span>
            </p>
            <div class="card">
              <div class="bl">改签</div>
              <div class="bl">退票</div>
              <div class="or">折扣卡</div>
              <div class="or">小吃</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CinemaList"
};
</script>

<style lang="css" scoped>
#content .topbar {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#content .topbar div {
  flex: 1;
  text-align: center;
  border-right: 1px solid #e6e6e6;
}
.cinema_body ul {
  padding: 20px 10px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body .cinema_name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  margin-right: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address .location {
  width: 85%;
  color: #666;
  display: block;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  margin: 10px 0;
}
.cinema_body .address .distance {
  float: right;
  color: #666;
  font-size: 14px;
}
.cinema_body .card {
  display: flex;
  margin-bottom: 20px;
}
.cinema_body .card .bl {
  color: #589daf;
  height: 15px;
  line-height: 15px;
  border: 1px solid #589daf;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
</style>