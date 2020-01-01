<template>
  <div id="detail"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppClusterDetail",
    mounted() {
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get('cluster_detail').then(res=>{
          this.Draw(res.data.slice(0,5));
        });
      },
      Draw(data){
        let echarts = this.$echarts;

        let chart = this.$echarts.init(document.getElementById('detail'));

        console.log(data);

        let day_max = 30;
        let day_cost = d3.max(data,d=>parseFloat(d.data.days_cost));
        let total = d3.max(data,d=>parseFloat(d.data.sum_cost));
        let count = d3.max(data,d=>parseFloat(d.data.cost_count));

        let option = {
          //backgroundColor:'#323a5e',
          title: {
            text: '消费等级详细信息',
            x:'6%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '5%',
            right: '4%',
            bottom: '14%',
            top:'16%',
            containLabel: true
          },
          legend: {
            data: ['days','day_cost','total','count'],
            right: 10,
            top:12,
            textStyle: {
              color:'#7e7e7e',
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
          },
          xAxis: {
            type: 'category',
            data: data.map(d=>d.name),
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
            max:1.5,
            splitLine: {
              show: false,
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
              show:false,
              margin: 10,
              textStyle: {
                color:'#7e7e7e',
                fontSize: 11
              }
            }
          },
          /*          "dataZoom": [{
                      "show": true,
                      "height": 12,
                      "xAxisIndex": [
                        0
                      ],
                      bottom:'8%',
                      "start": 10,
                      "end": 90,
                      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                      handleSize: '110%',
                      handleStyle:{
                        color:"#d3dee5",

                      },
                      textStyle:{
                        color:"#fff"},
                      borderColor:"#90979c"
                    }, {
                      "type": "inside",
                      "show": true,
                      "height": 15,
                      "start": 1,
                      "end": 35
                    }],*/
          series: [{
            name: 'days',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#fccb05'
                }, {
                  offset: 1,
                  color: '#f5804d'
                }]),
                barBorderRadius: 12,
              },
            },
            data: data.map(d=>(d.data.days/day_max).toFixed(2))
          }, {
            name: 'total',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8bd46e'
                }, {
                  offset: 1,
                  color: '#09bcb7'
                }]),
                barBorderRadius: 11,
              }

            },
            data: data.map(d=>(parseFloat(d.data.sum_cost)/total).toFixed(2))
          },
            {
              name: 'day_cost',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                  }, {
                    offset: 1,
                    color: '#6851f1'
                  }]),
                  barBorderRadius: 11,
                }
              },
              data: data.map(d=>(d.data.days_cost/day_cost).toFixed(2))
            },{
              name: 'count',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f77d8c'
                  }, {
                    offset: 1,
                    color: '#f14016'
                  }]),
                  barBorderRadius: 11,
                }
              },
              data: data.map(d=>(parseInt(d.data.cost_count)/count).toFixed(2))
            }]
        };

        let app = {
          currentIndex: -1,
        };

        /*        setInterval(function () {
                  let dataLen = option.series[0].data.length;

                  // 取消之前高亮的图形
                  chart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex
                  });
                  app.currentIndex = (app.currentIndex + 1) % dataLen;
                  //console.log(app.currentIndex);
                  // 高亮当前图形
                  chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                  });
                  // 显示 tooltip
                  chart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex
                  });
                }, 1000);*/

        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: absolute;
    bottom:0;
    left: 0;
    width: 30%;
    height: 40%;
  }
</style>
