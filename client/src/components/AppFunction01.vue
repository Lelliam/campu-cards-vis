<template>
  <div id="function01">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <div id="container">
        <AppBubble></AppBubble>
        <AppSankey></AppSankey>
      </div>
    </Card>
  </div>
</template>
<!--  <Step title="分析不同专业、不同性别学生消费行为特点与时空偏好" content=" &lt;!&ndash;郑志文&ndash;&gt;-->
<!--          ① 行为特点（消费综合情况）[早/中/晚][日/周/月][周末]-->
<!--          ② 时空偏好（就餐时间和地点）[超市/食堂/Other][时变趋势]">-->
<!--  </Step>-->
<script>
  import AppBubble from "./Function01/AppBubble";
  import AppSankey from "./Function01/AppSankey";
  import AppTimeLine from "./Function01/AppTimeLine";
  import AppCalendar from "./Function01/AppCalendar";
    export default {
        name: "AppFunction01",
        mounted(){
            //this.init_layout();
        },
        methods:{
            init_layout(){
                let container = document.getElementById('container');
                let card = document.getElementById('card');
                container.style.width = card.clientWidth*0.985 + 'px';
                container.style.height = card.clientHeight*0.965 + 'px';
            }
        },
        components:{
            AppBubble,
            AppSankey,
            AppTimeLine,
            AppCalendar
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
