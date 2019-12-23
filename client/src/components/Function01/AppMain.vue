<template>
  <div id="main_01"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppMain",
    mounted() {
      this.Main();
    },
    methods:{
      //https://gallery.echartsjs.com/editor.html?c=x3plwvJlaT
      Main(){
        let major = '18国际金融';
        this.$http.get('query',{params:{
            sql:`select * from cost_pro where Major = ${major}`
          }}).then(res=>{
          console.log(d3.nest().key(d=>d.Sex).entries(res.body).map(d=>{
            return {value:d.values.length}
          }));
          Draw(d3.nest().key(d=>d.Sex).entries(res.body).map(d=>{
            return {value:d.values.length}
          }));
        });

        let Draw = (data)=>{
          let chart = this.$echarts.init(document.getElementById('main_01'));

          let option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
              {
                center: ['50%', '50%'],
                type:'pie',
                radius: ['55%', '70%'],
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[
                  {value:335},
                  {value:310},
                  {value:234},
                  {value:135},
                  {value:1048},
                  {value:251},
                  {value:147},
                  {value:102}
                ]
              }
              ]
          };
          chart.setOption(option);
        }

      }
    }
  }
</script>

<style scoped>
  #main_01{
    position: absolute;
    top:0;
    border-style: dashed;
    border-width: 1px 0 1px 1px;
    left: 20%;
    width: 45%;
    height: 60%;
  }
</style>
