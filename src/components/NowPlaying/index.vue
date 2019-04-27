<template>
  <section id="content">
    <div class="movie_body">
      <div class="wrapper">
        <ul class="movie_items">
          <li class="movie_item">
            <div class="movie_pic">
              <img src="/img/fl4.jpg" alt>
            </div>
            <div class="info_list">
              <h2>
                复仇者联盟4:终局之战
                <img src alt>
              </h2>
              <p>
                观众评分
                <span class="grade">9.1</span>
              </p>
              <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
              <p>今天116家影院放映3483场</p>
            </div>
            <div class="btn_mall">购票</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'NowPlaying'
};
</script>

<style lang="css" scoped>
.movie_body {
  flex: 1;
  overflow: auto;
}

.movie_body .wrapper {
  height: 100%;
}

.movie_body .movie_items {
  margin: 0 12px;
  overflow: hidden;
}

.movie_body .movie_items .movie_item {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}

.movie_body .movie_pic {
  width: 64px;
  height: 90px;
}

.movie_body .movie_pic img {
  width: 100%;
}

.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}

.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}

.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}

.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
/* 选择地址 */
.select_address {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.select_address .topbar {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.select_address .topbar p {
  text-align: center;
}
.select_address .wrapper {
  flex: 1;
  overflow: auto;
}
.select_address ul li {
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  color: #777;
  height: 45px;
  line-height: 45px;
  border-bottom: #eee 1px solid;
}
.select_address .city_items h3 {
  font-size: 12px;
  box-sizing: border-box;
  height: 35px;
  padding: 0 15px;
  line-height: 35px;
  background-color: #eee;
  border-bottom: none;
}
.select_address ul li:last-child {
  border-bottom: none;
}
</style>