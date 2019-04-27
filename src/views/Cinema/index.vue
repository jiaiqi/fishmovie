<template>
  <div id="main">
    <Header  title="小鱼影院"/>
    <CinemaList/>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CinemaList from '@/components/CinemaList'
  export default {
    name:'Cinema',
    components:{
      Header,
      CinemaList,
      TabBar
    }
  }
</script>