<template>
  <div id="function05">
    <Card :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <AppInfo></AppInfo>
      <AppCalendar></AppCalendar>
      <AppMeal></AppMeal>
      <AppTrace></AppTrace>
      <AppTimeLine></AppTimeLine>
      <AppCircle></AppCircle>
      <AppMoney></AppMoney>
      <AppRadar></AppRadar>
    </Card>
  </div>
</template>

<script>
  import AppInfo from "./Function05/AppInfo";
  import AppCalendar from "./Function05/AppCalendar";
  import AppMeal from "./Function05/AppMeal";
  import AppTrace from "./Function05/AppTrace";
  import AppTimeLine from "./Function05/AppTimeLine";
  import AppCircle from "./Function05/AppCircle";
  import AppMoney from "./Function05/AppMoney";
  import AppRadar from "./Function05/AppRadar";
    export default {
        name: "AppFunction05",
        mounted(){
        },
        methods:{
        },
        components:{
          AppInfo,
          AppCalendar,
          AppMeal,
          AppTrace,
          AppTimeLine,
          AppCircle,
          AppMoney,
          AppRadar
        }
    }
</script>

<style scoped>
  #function05{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
