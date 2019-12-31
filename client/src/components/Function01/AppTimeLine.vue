<template>
  <div id="time_line"></div>
</template>

<script>
  export default {
    name: "AppTimeLine",
    data(){
      return {
        majors:['18国际金融'],
        option:{},
        chart:null
      }
    },
    mounted(){
      //this.getMajorCost();
      this.Init();
    },
    methods:{
      getMajorCost(major){
        return this.$axios.get('major_cost',{params:{
            major:major
          }});
      },
      Init(major='18国际金融'){
        this.getMajorCost(major).then((res1)=>{
          this.Draw(res1.data,major);
        });
      },
      Draw(data,major){

        let echarts = this.$echarts;

        this.chart = this.$echarts.init(document.getElementById('time_line'));

        this.option = {
          title: {
            show:true,
            text: '专业消费人数时序变化信息',
            left: '50%',
            textAlign: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type:'line',
              lineStyle: {
                color: '#ddd'
              }
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
            data: [major],
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
            name: major,
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: data.map(d=>d.value),
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
                color: '#c23531'
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
    },
    computed:{
      major_cancel(){
        return this.$store.state.major_cancel;
      }
    },
    watch:{
      major_cancel:{
        handler(state){
          if(state.operate === 'pop'){
            this.option.legend.data.splice(this.option.legend.data.indexOf(state.major),1);
            this.option.series.splice(this.option.series.findIndex(d=>d.name === state.major),1);
            this.chart.setOption(this.option,true);
          }
          else{
            this.getMajorCost(state.major).then(res=>{
              this.option.legend.data.push(state.major);
              this.option.series.push({
                name: state.major,
                type: 'line',
                smooth: true,
                showSymbol: false,
                symbol: 'circle',
                symbolSize: 6,
                data: res.data.map(d=>d.value),
                areaStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
                    color: state.color,

                  }
                },
                lineStyle: {
                  normal: {
                    width: 2,
                    opacity:.4
                  }
                }
              });
              this.chart.setOption(this.option,true);
            });
          }
        },
        deep:true
      }
    }
  }
</script>

<style scoped>
  #time_line{
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 60%;
    height: 40%;
  }
</style>

