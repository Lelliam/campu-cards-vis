<template>
  <div id="calendar"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppCalendar",
    mounted() {
      this.getAllCost()
    },
    methods:{
      getAllCost(){
        this.$axios.get('f1_calendar_all').then(res=>{
          //console.log(res.data);
          this.Draw(res.data);
        })
      },
      Draw(data){

        let chart = this.$echarts.init(document.getElementById('calendar'));

        let scale = d3.scaleLinear()
        .domain(d3.extent(data,d=>d.value))
        .range([1,10]);

        let option = {
          //backgroundColor: '#515a6e',
          title: {
            top: '9%',
            left:'15%',
            text: '消费日历',
            subtext: '数据纯属虚构',
            textStyle: {
              color: '#323c48'
            }
          },
          tooltip : {
            trigger: 'item'
          },
          legend: {
            top: '9.5%',
            align:'left',
            left: '55%',
            orient: 'vertical',
            itemWidth: 10,  // 设置宽度
            itemHeight: 10, // 设置高度
            data:['消费次数', 'TopFive'],
            textStyle: {
              color: '#323c48'
            }
          },
          calendar: [{
            top: '27%',
            left: '15%',
            orient: 'vertical',
            range: ['2019-04-01', '2019-04-30'],
            splitLine: {
              show: true,
              lineStyle: {
                color: '#9692a1',
                width: 2,
                type: 'solid'
              }
            },
            yearLabel: {
              formatter: 'YEAR {start} ',
              textStyle: {
                color: '#323c48'
              }
            },
            monthLabel: {
              textStyle: {
                color: '#323c48'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(50,60,72,0.16)',
                borderWidth: 1,
                borderColor: '#ccbbbc'
              }
            }
          }],
          series : [
            {
              name: '消费次数',
              type: 'scatter',
              coordinateSystem: 'calendar',
              data: data.map(d=>{
                return [d.date,d.value]
              }),
              symbolSize: function (val) {
                return scale(val[1]);
              },
              itemStyle: {
                normal: {
                  color: '#1d181a'
                }
              }
            },
            {
              name: 'TopFive',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: data.map(d=>{
                return [d.date,d.value]
              }).sort((a,b)=>b[1]-a[1]).slice(0, 5),
              symbolSize: function (val) {
                return scale(val[1]);
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: 'rgba(221,89,56,0.76)',
                  shadowBlur: 10,
                  shadowColor: '#7e7e7e'
                }
              },
              zlevel: 1
            }
          ]
        };

        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #calendar{
    position: absolute;
    top:0;
    left: 20%;
    width: 10%;
    height: 60%;
  }
</style>
