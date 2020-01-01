<template>
  <div id="scatter"></div>
</template>

<script>
  export default {
    name: "AppScatter",
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

        let chart = this.$echarts.init(document.getElementById('scatter'));

        let option = {
          //backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          title: {
            text: 'A类具体信息',
            //subtext:`${major.replace('18','')}专业`,
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
            name: '信息',
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
  #scatter{
    position: absolute;
    bottom:0;
    right: 0;
    width: 37%;
    height: 43%;
  }
</style>
