<template>
  <div id="major"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppMajor",
    mounted() {
      this.getData('第一食堂');
    },
    methods:{
      getData(canteen){
        this.$axios.get('/canteen_majors',{params:{
            Dept:canteen
          }}).then(res=>{
          this.Draw(res.data,canteen);
        });
      },
      Draw(data,canteen){
        let chart = this.$echarts.init(document.getElementById('major'));

        let echarts = this.$echarts;

        let scale = d3.scaleLinear()
          .domain(d3.extent(data,d=>d.value))
          .range([20,80]);

        let option = {
          //backgroundColor: '#e6eefc',
          title: {
            top: '0',
            left: '0',
            text: `就餐人群专业分布`,
            subtext:`${canteen}`
          },
          tooltip: {},
          animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
          },
          animationEasingUpdate: 'bounceIn',
          color: ['#ff598f', '#3e33ff', '#3cff4c'],
          series: [{
            zoom:.8,
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 40,
              edgeLength: 3
            },
            roam: true,
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
            },
            label: {
              normal: {
                show: true,
                formatter: function(param){
                  if(param.value>1000)
                  return param.name;
                  else
                    return '';
                },
                textStyle: {
                  color: 'rgba(0,0,0,0.55)',
                  fontSize: 12,
                }
              }
            },
            data: data.map(d=>{
              return {
                "name": d.name.replace('18',''),
                "value": d.value,
                "symbolSize": scale(d.value),
                "draggable": true,
              }
            })
          }]
        };

        chart.setOption(option);
      },
    }
  }
</script>

<style scoped>
  #major{
    position: absolute;
    top:30%;
    left: 0;
    width: 23%;
    height: 30%;
  }
</style>
