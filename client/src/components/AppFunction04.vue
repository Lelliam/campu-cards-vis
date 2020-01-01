<template>
  <div id="function04">
    <Card :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <AppMain></AppMain>
      <AppCluster></AppCluster>
      <AppClusterDetail></AppClusterDetail>
      <AppMajorCluster></AppMajorCluster>
      <AppScatter></AppScatter>
    </Card>
  </div>
</template>

<script>
  import AppMain from "./Function04/AppMain";
  import AppCluster from "./Function04/AppCluster";
  import AppClusterDetail from "./Function04/AppClusterDetail";
  import AppMajorCluster from "./Function04/AppMajorCluster";
  import AppScatter from "./Function04/AppScatter";
  export default {
    name: "AppFunction04",
    mounted(){
    },
    methods:{
    },
    components:{
      AppMain,
      AppCluster,
      AppClusterDetail,
      AppMajorCluster,
      AppScatter
    }
  }
</script>

<style scoped>
  #function04{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
