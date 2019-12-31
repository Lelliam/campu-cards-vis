<template>
  <div id="function01">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <div id="container">
        <AppMain></AppMain>
        <AppRadar></AppRadar>
        <AppTimeLine></AppTimeLine>
        <AppBarLine></AppBarLine>
        <AppPlot></AppPlot>
<!--        <AppMatrixTree></AppMatrixTree>-->
<!--        <AppMainDetail></AppMainDetail>-->
        <AppCalendar></AppCalendar>
        <AppCostLevel></AppCostLevel>
      </div>
    </Card>
  </div>
</template>
<!--  <Step title="分析不同专业、不同性别学生消费行为特点与时空偏好" content=" &lt;!&ndash;郑志文&ndash;&gt;-->
<!--          ① 行为特点（消费综合情况）[早/中/晚][日/周/月][周末]-->
<!--          ② 时空偏好（就餐时间和地点）[超市/食堂/Other][时变趋势]">-->
<!--  </Step>-->
<script>
  import AppMain from "./Function01/AppMain";
  import AppRadar from "./Function01/AppRadar";
  import AppTimeLine from "./Function01/AppTimeLine";
  import AppBarLine from "./Function01/AppBarLine";
  // import AppMatrixTree from "./Function01/AppMatrixTree";
  import AppPlot from "./Function01/AppPlot";
  // import AppMainDetail from "./Function01/AppMainDetail";
  import AppCalendar from "./Function01/AppCalendar";
  import AppCostLevel from "./Function01/AppCostLevel";
    export default {
        name: "AppFunction01",
        mounted(){
        },
        methods:{
        },
        components:{
          AppPlot,
          // AppMatrixTree,
          AppBarLine,
          AppTimeLine,
          AppRadar,
          AppMain,
          // AppMainDetail,
          AppCalendar,
          AppCostLevel
        }
    }
</script>

<style scoped>
  #function01{
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
