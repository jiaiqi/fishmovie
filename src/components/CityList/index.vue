<template>
  <section id="content">
    <div class="select_address">
      <div class="topbar">
        <p>选择城市</p>
      </div>
      <Loading v-if="isLoading" />
      <Scroller v-else ref="city_List">
      <div class="wrapper">
        <div class="city_items rm">
          <h3>热门城市</h3>
          <ul class="clearfix">
            <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.nm , item.id)">{{ item.nm }}</li>
          </ul>
        </div>
        <div class="city_sort city_items" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
                <h3>{{ item.index }}</h3>
                <ul>
                    <li v-for="itemList in item.list" :key="itemList.id" @tap="handleToCity(itemList.nm , itemList.id)">{{ itemList.nm }}</li>
                </ul>
            </div>	
        </div>
      </div>
      </Scroller>
      <div class="city_index">
        <ul>
          <li class="index_item" v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{ item.index }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name : 'City',
    data(){
        return {
            cityList : [],
            hotList : [],
            isLoading : true
        }
    },
    mounted(){
        var cityList = window.localStorage.getItem('cityList');
        var hotList = window.localStorage.getItem('hotList');

        if(cityList && hotList){
            this.cityList = JSON.parse(cityList);
            this.hotList = JSON.parse(hotList);
            this.isLoading = false;
        }
        else{
            this.axios.get('/api/cityList.json').then((res)=>{
                var msg = res.data.msg;
                if(msg === 'ok'){
                    this.isLoading = false;
                    var cities = res.data.data.cities;
                    //[ { index : 'A' , list : [{ nm : '阿城' , id : 123 }] } ]
                    var { cityList , hotList } = this.formatCityList(cities);
                    this.cityList = cityList;
                    this.hotList = hotList;
                    window.localStorage.setItem('cityList' , JSON.stringify(cityList));
                    window.localStorage.setItem('hotList' , JSON.stringify(hotList));
                }
            });
        }
    },
    methods : {
        formatCityList(cities){
            var cityList = [];
            var hotList = [];

            for(var i=0;i<cities.length;i++){
                if(cities[i].isHot === 1){
                    hotList.push( cities[i] );
                }
            }

            for(let i=0;i<cities.length;i++){
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){  //新添加index
                    cityList.push({ index : firstLetter , list : [ { nm : cities[i].nm , id : cities[i].id } ] });
                }
                else{   //累加到已有index中
                    for(var j=0;j<cityList.length;j++){
                        if( cityList[j].index === firstLetter ){
                            cityList[j].list.push( { nm : cities[i].nm , id : cities[i].id } );
                        }
                    }
                }
            }

            cityList.sort((n1,n2)=>{
                if( n1.index > n2.index ){
                    return 1;
                }
                else if(n1.index < n2.index){
                    return -1;
                }
                else{
                    return 0;
                }
            });
            function toCom(firstLetter){
                for(var i=0;i<cityList.length;i++){
                    if( cityList[i].index ===  firstLetter){
                        return false;
                    }
                }
                return true;
            }

            return {
                cityList,
                hotList
            };

        },
        handleToIndex(index){
            var h3 = this.$refs.city_sort.getElementsByTagName('h3');
            //this.$refs.city_sort.parentNode.scrollTop = h3[index].offsetTop;
            this.$refs.city_List.toScrollTop(-h3[index].offsetTop);
        },
        handleToCity(nm,id){
            this.$store.commit('city/CITY_INFO',{ nm , id });
            window.localStorage.setItem('nowNm',nm);
            window.localStorage.setItem('nowId',id);
            this.$router.push('/movie/nowPlaying');
        }
    }
};
</script>

<style lang="css" scoped>
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
.city_index {
  position: fixed;
  right: 0px;
  top: 150px;
  font-size: 12px;
  overflow: scroll;
  height: 800px;
}
.city_index .index_item {
  color: blue;
  height: 20px;
  line-height:20px;
  border: none;
}
.city_items.rm ul{
  display:flex;
  flex-wrap: wrap;
  padding:10px 30px;
} 
.city_items.rm ul li{
  width: 60px;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #777;

}
</style>