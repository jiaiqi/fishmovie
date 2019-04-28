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
          <li v-for="item in cinemaList" :key="item.id">
            <p>
              <span class="cinema_name">{{ item.nm }}</span>
              <span class="q">
                <span class="price">{{ item.sellPrice }}</span>
                元起
              </span>
            </p>
            <p class="address">
              <span class="location">{{ item.addr }}</span>
              <span class="distance">{{ item.distance }}</span>
            </p>
            <div class="card">
              <div v-for="(num,key) in item.tag" :key="key" :class=" key | classCard ">{{ key | formatCard }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CinemaList",
  data(){
        return {
            cinemaList : [],
            isLoading : true,
            prevCityId : -1
        };
    },
    activated(){

        var cityId = this.$store.state.city.id;
        if( this.prevCityId === cityId ){ return; }
        this.isLoading = true;

        this.axios.get('/api/cinemaList.json').then((res)=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.cinemaList = res.data.data.cinemas;
                this.isLoading = false;
                this.prevCityId = cityId
            }
        });
    },
    filters : {
        formatCard(key){
            var card = [
                { key : 'allowRefund' , value : '改签' },
                { key : 'endorse' , value : '退' },
                { key : 'sell' , value : '折扣卡' },
                { key : 'snack' , value : '小吃'}
            ];
            for(let i=0;i<card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        },
        classCard(key){
            var card = [
                { key : 'allowRefund' , value : 'bl' },
                { key : 'endorse' , value : 'bl' },
                { key : 'sell' , value : 'or' },
                { key : 'snack' , value : 'or'}
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        }
    }
};
</script>

<style lang="css" scoped>
#content .topbar {
  width: 100%;
  height: 45px;
  /* border-bottom: 1px solid #e6e6e6; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  margin-top: 20px;
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