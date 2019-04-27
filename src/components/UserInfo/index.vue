<template>
<section id="content">
  <div class="avatar_box">
    <img src="" class="avatar">
    <div class="user_name">I love U three thousand times</div>
  </div>
  <div class="mine_content">
      <div class="card_bag">
          <div class="card_item"><i class="iconfont"></i>电影票</div>
          <div class="card_item"><i class="iconfont"></i>优惠券</div>
          <div class="card_item"><i class="iconfont"></i>权益卡</div>
        </div>
        <div class="tab-items">
          <div class="tab-item">想看的电影<i class="iconfont icon-arrow-right2"></i></div>
          <div class="tab-item">看过的电影<i class="iconfont icon-arrow-right2"></i></div>
          <div class="tab-item">小鱼乐影卡<i class="iconfont icon-arrow-right2"></i></div>
          <div class="tab-item">帮助与反馈<i class="iconfont icon-arrow-right2"></i></div>
        </div>
  </div>
</section>
</template>

<script>
  export default {
    name:'UserInfo'
  }
</script>

<style lang="css" scoped>
#content{
  background-color: rgb(236, 236, 236);
}
.avatar_box{
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  background-color: rgb(238, 79, 79);
}
.avatar_box .avatar{
  width: 70px;
  height: 70px;
  margin-left: 30px;
  border-radius: 50%;
}
.avatar_box .user_name{
  padding-left: 10px;
  color: #fff;
}
.mine_content{
  background-color: #fff;
}
.card_bag{
  width: 100%;
  height: 100px;
  display: flex;
}
.card_bag .card_item{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.tab-items{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tab-items .tab-item{
  height: 60px;
  line-height: 60px;
  margin: 0 15px;
  text-indent: 15px;
  border-top: 1px solid rgba(173, 173, 173, 0.3);;
}
.tab-items .tab-item i{
  float: right;
  color: #bcbcbc
}
</style>