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
          this.BarLine(res.data,major);
        });
      },
      BarLine(data,major){

        let echarts = this.$echarts;
        let chart = this.$echarts.init(document.getElementById('bar_line'));

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

        let option = {
          //backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          title: {
            text: '充值行为信息',
            subtext:`${major.replace('18','')}专业`,
            x:'6%'
          },
          // legend: {
          //   right: 10,
          //   data: ['1990']
          // },
          grid: {
            left: '15%',
            top: '23%',
            right: '15%',
          },
          xAxis: {
            name: '次数',
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
            name: '月充值总额',
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
            },
            scale: true
          },
          series: [{
            name: '1990',
            data: data.map(d=>{
              return [d.times,d.total,d.card_no]
            }),
            type: 'scatter',
            symbolSize: function (data) {
              return parseFloat(data[1])/20;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function (param) {
                  return param.data[2];
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
