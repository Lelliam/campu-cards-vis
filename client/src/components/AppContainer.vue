
<!--<Steps direction="vertical">-->
<!--  <Step title="分析不同专业、不同性别学生消费行为特点与时空偏好" content=" &lt;!&ndash;郑志文&ndash;&gt;-->
<!--          ① 行为特点（消费综合情况）[早/中/晚][日/周/月][周末]-->
<!--          ② 时空偏好（就餐时间和地点）[超市/食堂/Other][时变趋势]">-->
<!--  </Step>-->
<!--  <Step title="评估各食堂的运营状况，为食堂运营提供建议" content=" &lt;!&ndash;陈浩&ndash;&gt;-->
<!--          ① 运营情况（各食堂综合消费）[消费类型][运营时间][对比分析]-->
<!--          ② 提供建议（合理定价、运营时间等）">-->
<!--  </Step>-->
<!--  <Step title="挖掘学生消费特征与日常行为轨迹的关联关系" content="  &lt;!&ndash;刘亮&ndash;&gt;-->
<!--          ① 关联关系（上课、晨练、）[结合门禁数据]-->
<!--          ② 产生消费的原因分析">-->
<!--  </Step>-->
<!--  <Step title="探索低消费学生群体的行为特征，为学校助学金评定提供参考建议" content=" &lt;!&ndash;刘亮&ndash;&gt;-->
<!--          ① 消费群体分类（分类依据？聚类分类）-->
<!--          ② 低消费群体识别（三餐不足、消费低于平均、余额偏低、超市消费少等）">-->
<!--  </Step>-->
<!--  <Step title="个人综合消费情况" content=" &lt;!&ndash;选做&ndash;&gt;-->
<!--          ①	查询每个学生的综合消费情况-->
<!--          ②	异常检测（异常消费）">-->
<!--  </Step>-->
<!--</Steps>-->
<template>
  <div id="main_container">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <div id="container">
        <AppCalendar></AppCalendar>
        <AppBubble></AppBubble>
        <AppSankey></AppSankey>
        <AppTimeLine></AppTimeLine>
      </div>
    </Card>
  </div>
</template>

<script>
    import AppBubble from "./Function01/AppBubble";
    import AppSankey from "./Function01/AppSankey";
    import AppTimeLine from "./Function01/AppTimeLine";
    import AppCalendar from "./Function01/AppCalendar";
    export default {
        name: "AppContainer",
        mounted(){
            //this.init_layout();
        },
        methods:{
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
  #main_container{
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


