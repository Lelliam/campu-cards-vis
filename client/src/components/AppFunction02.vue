<template>
  <div id="function02">
    <Card :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <AppSex></AppSex>
      <AppMajor></AppMajor>
      <AppMeal></AppMeal>
      <AppCanteen></AppCanteen>
      <AppTimeLine></AppTimeLine>
      <AppRevenue></AppRevenue>
      <AppRadar></AppRadar>
    </Card>
  </div>
</template>

<script>
  import AppSex from "./Function02/AppSex";
  import AppMajor from "./Function02/AppMajor";
  import AppMeal from "./Function02/AppMeal";
  import AppCanteen from "./Function02/AppCanteen";
  import AppTimeLine from "./Function02/AppTimeLine";
  import AppRevenue from "./Function02/AppRevenue";
  import AppRadar from "./Function02/AppRadar";
    export default {
        name: "AppFunction02",
        mounted(){
        },
        methods:{
        },
        components:{
          AppSex,
          AppMajor,
          AppMeal,
          AppCanteen,
          AppTimeLine,
          AppRevenue,
          AppRadar
        }
    }
</script>

<style scoped>
  #function02{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
