<template>
  <header id="header">
  <h1>{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name:'Header',
    props:{
      title:{
        type:String,
        default:'小鱼电影'
      }
    }
  }
</script>

<style lang="css" scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
</style>