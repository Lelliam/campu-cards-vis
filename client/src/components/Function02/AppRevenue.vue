<template>
  <div id="revenue"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppRevenue",
    mounted() {

      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get('canteen_all').then(res=>{
          this.Draw(res.data);
        })
      },
      Draw(data){
        let color = [
          '#38c0ff',
          '#ff553e',
          '#595bff',
          '#ff740a',
          '#47ff90',
          '#f85fff',];

        let chart = this.$echarts.init(document.getElementById('revenue'));

        let echarts = this.$echarts;

        let option = {

          // Make gradient line here
          visualMap: [...Array(6)].map((d,i)=>{
            return {
              show: false,
              type: 'continuous',
              seriesIndex: i,
              min: d3.min(data[i].data,s=>parseFloat(s.value)),
              max:d3.max(data[i].data,s=>parseFloat(s.value)),
              color:[color[i]]
            }
          }),
          title: [{
            left: '0',
            top:'14%',
            text: data[0].Dept,
            textStyle: {
              color:'#7e7e7e',
              fontSize: 11
            },
          }, {
            left: '0',
            top:'26%',
            text: data[1].Dept,
            textStyle: {
              color:'#7e7e7e',
              fontSize: 11
            }
          }, {
            left: '0',
            top:'41%',
            text: data[2].Dept,
            textStyle: {
              color:'#7e7e7e',
              fontSize: 11
            }
          },{
            left: '0',
            top:'58%',
            text: data[3].Dept,
            textStyle: {
              color:'#7e7e7e',
              fontSize: 11
            }
          },{
            left: '0',
            top:'70%',
            text: data[4].Dept,
            textStyle: {
              color:'#7e7e7e',
              fontSize: 11
            }
          },{
            left: '0',
            top:'88%',
            text: data[5].Dept,
            textStyle: {
              color:'#7e7e7e',
              fontSize: 11
            }
          },{
            left: '0',
            top:'0',
            text: '各食堂营收情况'
          }],
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [{
            data: data[0].data.map(d=>d.date),
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          }, {
            data: data[1].data.map(d=>d.date),
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            },
            gridIndex: 1
          },{
            data: data[2].data.map(d=>d.date),
            gridIndex: 2,
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          },{
            data: data[3].data.map(d=>d.date),
            gridIndex: 3,
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          },{
            data: data[4].data.map(d=>d.date),
            gridIndex: 4,
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          },{
            data: data[5].data.map(d=>d.date),
            gridIndex: 5,
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          }],
          yAxis: [{
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          }, {
            splitLine: {show: false},
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
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            },
            gridIndex: 1
          },{
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            },
            gridIndex: 2
          },{
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            },
            gridIndex: 3
          },{
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            },
            gridIndex: 4
          },{
            splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show:false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            },
            gridIndex: 5
          }],
          grid: [{
            top: '10%',
            left:'15%',
            bottom:'80%'
          }, {
            top: '85%',
            left:'15%',
            bottom:'5%'
          },{
            top: '25%',
            bottom: '65%',
            left:'15%',
          },{
            top: '40%',
            bottom: '50%',
            left:'15%',
          },{
            left:'15%',
            top: '55%',
            bottom: '35%'
          },{
            left:'15%',
            top: '70%',
            bottom: '20%'
          }],
          series: [{
            type: 'line',
            showSymbol: false,
            data: data[0].data.map(d=>d.value),
            lineStyle:{
              normal:{
                width:1,
                opacity:.8
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)'
                }], false)
              }
            }
          }, {
            type: 'line',
            showSymbol: false,
            data: data[1].data.map(d=>d.value),
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle:{
              normal:{
                width:1,
                opacity:.8
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)'
                }], false)
              }
            }
          },{
            type: 'line',
            showSymbol: false,
            data: data[2].data.map(d=>d.value),
            xAxisIndex: 2,
            yAxisIndex: 2,
            lineStyle:{
              normal:{
                width:1,
                opacity:.8
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)'
                }], false)
              }
            }
          },{
            type: 'line',
            showSymbol: false,
            data: data[3].data.map(d=>d.value),
            xAxisIndex: 3,
            yAxisIndex: 3,
            lineStyle:{
              normal:{
                width:1,
                opacity:.8
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)'
                }], false)
              }
            }
          },{
            type: 'line',
            showSymbol: false,
            data: data[4].data.map(d=>d.value),
            xAxisIndex: 4,
            yAxisIndex: 4,
            lineStyle:{
              normal:{
                width:1,
                opacity:.8
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)'
                }], false)
              }
            }
          },{
            type: 'line',
            showSymbol: false,
            data: data[5].data.map(d=>d.value),
            xAxisIndex: 5,
            yAxisIndex: 5,
            lineStyle:{
              normal:{
                width:1,
                opacity:.8
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)'
                }], false)
              }
            }
          }]
        };

        chart.setOption(option);
      },
    }
  }
</script>

<style scoped>
  #revenue{
    position: absolute;
    top:0;
    right: 0;
    width: 20%;
    height: 60%;
  }
</style>
