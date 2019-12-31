<template>
  <div id="time_line"></div>
</template>

<script>
  export default {
    name: "AppTimeLine",
    mounted(){
      this.getMajorCost();
    },
    methods:{
      getMajorCost(major = '18软件技术'){
        this.$axios.get('major_cost',{params:{
            major:major
          }}).then(res=>{
          console.log(res.data);
          this.Draw(res.data);
        });
      },

      Draw(data){

        let echarts = this.$echarts;

        let chart = this.$echarts.init(document.getElementById('time_line'));

        let option = {
          title: {
            show:false,
            text: '今日&昨日',
            left: '50%',
            textAlign: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: '#ddd'
              }
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
              color: '#7588E4',
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
          },
          legend: {
            right: 20,
            orient: 'vertical',
            data: ['A','B']
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            height: 20,
            left: '5%',
            right: '5%',
            bottom: '2%',
            start: 0,
            end: 3.7,
            textStyle: {
              color: 'rgba(29,24,26,0.86)',
              fontSize: 11,
            },
          }, {
            type: 'inside'
          }
          ],
          grid: {
            top: '20%',
            right: '5%',
            left: '5%',
            bottom: '15%'
          },
          xAxis: {
            type: 'category',
            data: data.map(d=>d.date),
            boundaryGap: false,
            splitLine: {
              show: true,

              interval: 'auto',
              lineStyle: {
                color: ['#D4DFF5'],
                width:.5
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show:false,
              lineStyle: {
                color: '#7e7e7e'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: ['#D4DFF5'],
                width:.5
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show:false,
              lineStyle: {
                color: '#7e7e7e'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              },
              lineStyle: {
                color: 'rgba(29,24,26,0.51)',
              }
            }
          },
          series: [{
            name: '今日',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: data.map(d=>d.value),
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(247,213,172,0.68)'
                }], false)
              }
            },
            itemStyle: {
              normal: {
                color: '#f7b851'
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          }]
        };
        function add(data){
        option.series.push({
          name: '昨日',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 6,
          data: [10,30,40,50,20,1,3,4,6,10,20,30],
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(216, 244, 247,1)'
              }, {
                offset: 1,
                color: 'rgb(112,226,247)'
              }], false)
            }
          },
          itemStyle: {
            normal: {
              color: '#599cff'
            }
          },
          lineStyle: {
            normal: {
              width: 3
            }
          }
        })}
        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #time_line{
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 60%;
    height: 40%;
  }
</style>

