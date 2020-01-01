<template>
  <div id="time_line"></div>
</template>

<script>
  export default {
    name: "AppTimeLine",
    mounted() {
      //this.Draw(1);
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get('canteen_10min').then(res=>{
          //console.log(res.data);
          this.Draw(res.data);
        });
      },
      Draw(data){

        let echarts = this.$echarts;

        this.chart = this.$echarts.init(document.getElementById('time_line'));

        this.option = {
          title: {
            show:true,
            text: '食堂消费人数时序变化信息',
            left: '50%',
            textAlign: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type:'line',
              lineStyle: {
                color: '#ddd'
              },
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
              color: 'rgba(29,24,26,0.67)',
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
          },
          legend: {
            right: 'center',
            top:'7%',
            //orient: 'vertical',
            data: data.map(d=>d.dept),
            itemStyle:{
              opacity:.4
            }
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
            data: data[5].data.map(d=>d.date),
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
            name: '第一食堂',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: data[0].data.map(d=>d.value),
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
                color: '#15c225',
                opacity:.4
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                opacity:.4
              }
            }
          },
            {
              name: '第二食堂',
              type: 'line',
              smooth: true,
              showSymbol: false,
              symbol: 'circle',
              symbolSize: 6,
              data: data[1].data.map(d=>d.value),
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
                  color: '#3cc2b8',
                  opacity:.4
                }
              },
              lineStyle: {
                normal: {
                  width: 2,
                  opacity:.4
                }
              }
            },
            {
              name: '第三食堂',
              type: 'line',
              smooth: true,
              showSymbol: false,
              symbol: 'circle',
              symbolSize: 6,
              data: data[2].data.map(d=>d.value),
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
                  color: '#ff740a',
                  opacity:.4
                }
              },
              lineStyle: {
                normal: {
                  width: 2,
                  opacity:.4
                }
              }
            },
            {
              name: '教师食堂',
              type: 'line',
              smooth: true,
              showSymbol: false,
              symbol: 'circle',
              symbolSize: 6,
              data: data[4].data.map(d=>d.value),
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
                  color: '#5268ff',
                  opacity:.4
                }
              },
              lineStyle: {
                normal: {
                  width: 2,
                  opacity:.4
                }
              }
            },
            {
              name: '第五食堂',
              type: 'line',
              smooth: true,
              showSymbol: false,
              symbol: 'circle',
              symbolSize: 6,
              data: data[5].data.map(d=>d.value),
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
                  color: '#186bc2',
                  opacity:.4
                }
              },
              lineStyle: {
                normal: {
                  width: 2,
                  opacity:.4
                }
              }
            }]
        };
        this.chart.setOption(this.option);
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
