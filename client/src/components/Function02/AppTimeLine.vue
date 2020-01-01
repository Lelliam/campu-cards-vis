<template>
  <div id="time_line"></div>
</template>

<script>
  export default {
    name: "AppTimeLine",
    mounted() {
      this.Draw(1);
    },
    methods:{
      Draw(data){

        let chart = this.$echarts.init(document.getElementById('time_line'));

          let option = {
              title: {
                  top: '0',
                  //left: 'center',
                  text: '各时刻就餐人数对比图',
                  textStyle: {
                      align: 'center',
                      color: '#060204',
                      fontSize: 15
                  }
              },
              tooltip : {
                  trigger: 'axis'
              },
              legend: {
                  data:['第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','教师食堂']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      boundaryGap : false,
                      data : ['周一','周二','周三','周四','周五','周六','周日']
                  }
              ],
              yAxis : [
                  {
                      type : 'value'
                  }
              ],
              series : [
                  {
                      name:'第一食堂',
                      type:'line',
                      //stack: '总量',
                      areaStyle: {normal: {}},
                      data:[120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name:'第二食堂',
                      type:'line',
                      //stack: '总量',
                      areaStyle: {normal: {}},
                      data:[220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name:'第三食堂',
                      type:'line',
                      //stack: '总量',
                      areaStyle: {normal: {}},
                      data:[150, 232, 201, 154, 190, 330, 410]
                  },
                  {
                      name:'第四食堂',
                      type:'line',
                      //stack: '总量',
                      areaStyle: {normal: {}},
                      data:[320, 332, 301, 334, 390, 330, 320,800]
                  },
                  {
                      name:'第五食堂',
                      type:'line',
                      // stack: '总量',
                      label: {
                          normal: {
                              show: true,
                              position: 'top'
                          }
                      },
                      areaStyle: {normal: {}},
                      data:[820, 932, 901, 934, 1290, 1330, 1320]
                  },
                  {
                      name:'教师食堂',
                      type:'line',
                      // stack: '总量',
                      label: {
                          normal: {
                              show: true,
                              position: 'top'
                          }
                      },
                      areaStyle: {normal: {}},
                      data:[200 ,400, 600, 800, 850, 900, 950]
                  }
              ]
          };

          chart.setOption(option);

      },
      init(){
        // this.$http.get('query', {
        //   params: {
        //     sql: `select Sex,Date from cost_pro where Sex != 'null'`
        //   }
        // }).then(res=>{
        //   console.log(res.body);//Data
        //   Draw(1);
        // });
        //Draw(1);
      }
    }
  }
</script>

<style scoped>
  #time_line{
    position: absolute;
    top:60%;
    left: 20%;
    width: 60%;
    height: 40%;
   // background-color: #83fcc9;
  }
</style>
