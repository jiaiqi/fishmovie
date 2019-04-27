<template>
  <section id="content">
    <div class="select_address">
      <div class="topbar">
        <p>选择城市</p>
      </div>
      <div class="wrapper">
        <div class="city_items rm">
          <h3>热门</h3>
          <ul>
            <li>西安</li>
            <li>上海</li>
          </ul>
        </div>
        <div class="city_items">
          <h3>当前</h3>
          <ul>
            <li>西安</li>
          </ul>
        </div>
        <div class="city_items">
          <h3>GPS</h3>
          <ul>
            <li>西安</li>
          </ul>
        </div>
        
      </div>
      <div class="city_index">
        <ul>
          <li class="index_item">热门</li>
          <li class="index_item">当前</li>
          <li class="index_item">GPS</li>         
          <li class="index_item">A</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
}
.city_index .index_item {
  color: blue;
  height: 20px;
  line-height: 20px;
  border: none;
}
.city_items.rm ul{
  display:flex;
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