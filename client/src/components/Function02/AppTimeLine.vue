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

        //如果是十分钟折线图，那么横坐标就没多少意义了
        let xData = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        let yData1 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
        let yData2 = [13, 7, 10, 38, 17, 28, 22, 12, 28, 19, 14, 19, 19, 31, 22, 11, 14, 19, 22, 16];
        let yData3 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
        let yData4 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
        let yData5 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
        let yData6 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];

        let option = {
          title: {
            top: '0',
            left: 'center',
            text: '各食堂消费次数与时间的关系（时间间隔10min）',
            textStyle: {
              align: 'center',
              color: '#ff86ac',
              fontSize: 15
            }

          },
            //视图主要背景
            // backgroundColor: '#043491',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            x: 'center',
            y: '40px',
            textStyle: {
              color: '#f23a5d',
              fontSize: 13,
            },
            icon: 'circle',
            data: ['第一食堂', '第二食堂','第三食堂','第四食堂','第五食堂','教师食堂']
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            height: 20,
            left: '10%',
            right: '10%',
            bottom: '2%',
            start: 50,
            end: 100,
            textStyle: {
              color: '#d4ffff',
              fontSize: 11,
            },
          }, {
            type: 'inside'
          }

          ],
          grid: {
            right: '5%',
            bottom: '10%',
            left: '2%',
            top: '80px',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: xData,
            name: '时间',
            nameTextStyle: {
              color: '#2314ff'
            },
            axisLine: {
              lineStyle: {
              color: '#0B4CA9'
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#FFF",
                fontSize: 12,
              },
              //interval:0,
              //rotate:30
            },
          }],
          yAxis: [{
            type: 'value',
            name: '次数',
            nameTextStyle: {
              color: '#d4ffff'
            },
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#0B4CA9'

              }
            },
            splitLine: {
              lineStyle: {
                color: "#0B4CA9",
              }

            },
            axisLabel: {
              color: '#d4ffff',
              fontSize: 12,
            }
          }, ],
          series: [{
            name: '第一食堂',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
              normal: {
                color: '#FC30EE',
              }
            },
            data: yData1
          },
            {
              name: '第二食堂',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                normal: {
                  color: '#0EF100',
                }
              },
              data: yData2
            },
              {
              name: '第三食堂',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: '#83fcc9',
                  }
              },
              data: yData3
          },
           {
              name: '第四食堂',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: '#3539fc',
                  }
              },
              data: yData4
          },
            {
              name: '第五食堂',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: '#e6eefc',
                  }
              },
              data: yData5
          },
            {
              name: '教师食堂',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: '#55fc27',
                  }
              },
              data: yData6
          },

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
   // background-color: #8284ff;
  }
</style>
