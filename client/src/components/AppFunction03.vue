<template>
  <div id="function03">
    <Card :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      消费特征与行为轨迹
      <div id="container">
        <AppTest/>
      </div>
    </Card>
  </div>
</template>

<script>
  import AppTest from "./Function03/AppTest";
    export default {
        name: "AppFunction03",
        mounted(){
        },
        methods:{
        },
        components:{
          AppTest
        }
    }
</script>

<style scoped>
  #function03{
    position: relative;
    width: 100%;
    height: 100%;
  }

  #container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
