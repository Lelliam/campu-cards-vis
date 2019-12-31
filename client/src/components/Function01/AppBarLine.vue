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
          getData(){
            this.$axios.get('/f1_charge_all').then(res=>{
              this.BarLine(res.data);
            });
          },
          BarLine(data){

            let echarts = this.$echarts;
            let chart = this.$echarts.init(document.getElementById('bar_line'));

            console.log(data);

            let option = {
              title:{
                text:`充值行为信息`,
                //subtext:`专业`
              },
              grid: {
                left: '15%',
                top: '20%',
                right: '15%',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 1,
                min: 0,
                max: 400
              }],
              xAxis: [
                {
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
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  name: '人数'
                },
                {
                  type: 'value',
                  name: '总额'
                }
              ],
              series: [
                {
                  name:'人数',
                  type:'bar',
                  data:data.map(d=>d.number),
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

                  }
                },
                {
                  name:'总额',
                  type:'line',
                  yAxisIndex: 1,
                  data:data.map(d=>d.sum)
                }
              ]
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
