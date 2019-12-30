<template>
  <div id="function03">
    <Card :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <div id="container">
        <AppMain />
      </div>
    </Card>
  </div>
</template>

<script>
  // import AppTest from "./Function03/AppTest";
  import AppMain from "./Function03/AppMain";
    export default {
        name: "AppFunction03",
        mounted(){
        },
        methods:{
        },
        components:{
          // AppTest,
          AppMain
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
