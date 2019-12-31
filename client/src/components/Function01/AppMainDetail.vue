<template>
  <div id="detail">
<!--    <Card v-for="(i,d) in list" :key="i" :style="{margin: '10px',minHeight: '150px'}">-->
<!--      <p slot="title">-->
<!--        <Icon type="ios-film-outline"></Icon>-->
<!--        专业名称{{i}}-->
<!--      </p>-->
<!--      <a @click="close(i)" slot="extra">-->
<!--        <Icon type="ios-loop-strong"></Icon>-->
<!--        X-->
<!--      </a>-->
<!--      <div class="major_detail" :id="'major'+d"></div>-->
<!--    </Card>-->
  </div>
</template>

<script>
  export default {
    name: "AppMainDetail",
    data(){
      return  {
        list:['18市场营销','18软件技术'],
      }
    },
    mounted() {
      //this. SendData( '18软件技术',1);
      this.getData();
    },
    methods: {
      getData(){
        this.$axios.get('/f1_all_meal').then(res=>{
          this.Draw(res.data);
        })
      },
      Draw(data){
        let echarts = this.$echarts;

        let chart = this.$echarts.init(document.getElementById('detail'));

        console.log(data.splice(0,5).map(d=>d.data.morn));

        let option = {
          //backgroundColor:'#323a5e',
          title: {
            text: '三餐消费信息',
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
            data: ['morn', 'noon', 'even'],
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
            data: data.slice(0,5).map(d=>d.major),
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
            max:'10',
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
            name: 'morn',
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
            data: data.slice(0,5).map(d=>d.data.morn)
          },
            {
              name: 'noon',
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
              data: data.slice(0,5).map(d=>d.data.noon)
            },
            {
              name: 'even',
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
              data: data.slice(0,5).map(d=>d.data.even)
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
    top:30%;
    left: 0;
    width: 26%;
    height: 30%;
    overflow-y:auto;
    overflow-x: hidden;
  }


</style>
