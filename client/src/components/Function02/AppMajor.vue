<template>
  <div id="major"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppMajor",
    mounted() {
      this.Draw([{name:'Major1',value:58},{name:'Major2',value:88}]);
    },
    methods:{
      Draw(data){
        let chart = this.$echarts.init(document.getElementById('major'));

        let scale = d3.scaleLinear()
          .domain(d3.extent(data,d=>d.value))
          .range([50,100]);

        let option = {
          //backgroundColor: '#e6eefc',
          title: {
            top: '0',
            left: 'center',
            text: '专业份数',
            textStyle: {
              align: 'center',
              color: '#060204',
              fontSize: 15
            }
          },
          tooltip: {},
          animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
          },
          animationEasingUpdate: 'bounceIn',
          color: ['#ff598f', '#3e33ff', '#3cff4c'],
          series: [{
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 500,
              edgeLength: 10
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: data.map(d=>{
              return {
                "name": d.name,
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
    left: 0%;
    width: 20%;
    height: 30%;
    /*background-color: #42ffca;*/
  }
</style>
