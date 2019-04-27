<template>
  <div id="main">
    <Header title="我的小鱼"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
  export default {
    name:'Mine',
    components:{
      Header,
      TabBar
    }
  }
</script>