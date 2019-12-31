<template>
  <div id="bar_line"></div>
</template>

<script>
  export default {
    name: "AppBarLine",
    mounted() {
      this.getData();
    },
    methods:{
      getData(major='18软件技术'){
        this.$axios.get('/f1_charge_major',{params:{
          major:major
          }
        }).then(res=>{
          this.BarLine(res.data);
        });
      },
      BarLine(dat){

        let echarts = this.$echarts;
        let chart = this.$echarts.init(document.getElementById('bar_line'));

        //console.log(data);
        console.log(dat.map(d=>{
          return [d.times,d.total,d.card_no]
        }));

        // let option = {
        //   title:{
        //     text:`充值行为信息`,
        //     //subtext:`专业`
        //   },
        //   legend: {
        //     data:['人数','总额']
        //   },
        //   grid: {
        //     left: '15%',
        //     top: '20%',
        //     right: '15%',
        //   },
        //   tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //       type: 'cross',
        //       crossStyle: {
        //         color: '#999'
        //       }
        //     }
        //   },
        //   visualMap: [{
        //     show: false,
        //     type: 'continuous',
        //     seriesIndex: 1,
        //     min: 0,
        //     max: 400
        //   }],
        //   xAxis: [
        //     {
        //       type: 'category',
        //       data: data.map(d=>d.date),
        //       boundaryGap: false,
        //       splitLine: {
        //         show: true,
        //         interval: 'auto',
        //         lineStyle: {
        //           color: ['#D4DFF5'],
        //           width:.5
        //         }
        //       },
        //       axisTick: {
        //         show: false
        //       },
        //       axisLine: {
        //         show:false,
        //         lineStyle: {
        //           color: '#7e7e7e'
        //         }
        //       },
        //       axisLabel: {
        //         margin: 10,
        //         textStyle: {
        //           color:'#7e7e7e',
        //           fontSize: 11
        //         }
        //       }
        //     }
        //   ],
        //   yAxis: [
        //     {
        //       type: 'value',
        //       name: '人数',
        //       splitLine: {
        //         show: true,
        //         interval: 'auto',
        //         lineStyle: {
        //           color: ['#D4DFF5'],
        //           width:.5
        //         }
        //       },
        //       axisTick: {
        //         show: false
        //       },
        //       axisLine: {
        //         show:false,
        //         lineStyle: {
        //           color: '#7e7e7e'
        //         }
        //       },
        //       axisLabel: {
        //         margin: 10,
        //         textStyle: {
        //           color:'#7e7e7e',
        //           fontSize: 11
        //         }
        //       }
        //     },
        //     {
        //       type: 'value',
        //       name: '总额',
        //       splitLine: {
        //         show: true,
        //         interval: 'auto',
        //         lineStyle: {
        //           color: ['#D4DFF5'],
        //           width:.5
        //         }
        //       },
        //       axisTick: {
        //         show: false
        //       },
        //       axisLine: {
        //         show:false,
        //         lineStyle: {
        //           color: '#7e7e7e'
        //         }
        //       },
        //       axisLabel: {
        //         margin: 10,
        //         textStyle: {
        //           color:'#7e7e7e',
        //           fontSize: 11
        //         }
        //       }
        //     }
        //   ],
        //   series: [
        //     {
        //       name:'人数',
        //       type:'bar',
        //       data:data.map(d=>d.number),
        //       itemStyle: {
        //         normal: {
        //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0,
        //             color: '#fccb05'
        //           }, {
        //             offset: 1,
        //             color: '#f5804d'
        //           }]),
        //           barBorderRadius: 12,
        //         },
        //       },
        //     },
        //     {
        //       name:'总额',
        //       type:'line',
        //       yAxisIndex: 1,
        //       data:data.map(d=>d.sum)
        //     }
        //   ]
        // };

        let data = [
            [28604,77,17096869,'Australia'],[31163,77.4,27662440,'Canada'],[1516,68,1154605773,'China'],
          [13670,74.7,10582082,'Cuba'],[28599,75,4986705,'Finland'],[29476,77.1,56943299,'France'],
          [31476,75.4,78958237,'Germany'],[28666,78.1,254830,'Iceland'],[1777,57.7,870601776,'India'],
          [29550,79.1,122249285,'Japan'],[2076,67.9,20194354,'North Korea'],[12087,72,42972254,'South Korea'],
          [24021,75.4,3397534,'New Zealand'],[43296,76.8,4240375,'Norway'],[10088,70.8,38195258,'Poland'],
          [19349,69.6,147568552,'Russia'],[10670,67.3,53994605,'Turkey'],[26424,75.7,57110117,'United Kingdom'],
          [37062,75.4,252847810,'United States']];

        let option = {
          //backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          title: {
            text: '1990 与 2015 年各国家人均寿命与 GDP'
          },
          legend: {
            right: 10,
            data: ['1990']
          },
          xAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            scale: true
          },
          series: [{
            name: '1990',
            data: data,
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(251, 118, 123)'
                }, {
                  offset: 1,
                  color: 'rgb(204, 46, 72)'
                }])
              }
            }
          }]
        };
        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #bar_line{
    position: absolute;
    bottom:0;
    left: 0;
    width: 20%;
    height: 40%;
  }
</style>
