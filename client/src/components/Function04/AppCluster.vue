<template>
  <div id="cluster"></div>
</template>

<script>
  export default {
    name: "AppCluster",
    mounted() {
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get('cluster').then(res=>{
          console.log(res.data);
          this.Draw(res.data);
        });
      },
      Draw(data){
        let chart = this.$echarts.init(document.getElementById('cluster'));

        let option = {
          //backgroundColor:"#0B1837",
          color: ["#4165ea", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
          title: {
            text: '消费分类级别',
            left: '0',
            top: 0,
          },
          grid: {
            left: '5%',
            top: '15%',
            bottom: '15%',
            right: '15%',
            containLabel: true
          },
          // tooltip: {
          //   trigger: 'item',
          //   formatter: "{b} : {c} ({d}%)"
          // },
          legend: {
            type: "scroll",
            orient: "vartical",
            // x: "right",
            top: "center",
            right: "15",
            // bottom: "0%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
              color: '#7e7e7e',
              fontSize: 12,
              fontWeight: 0
            },
            data: data.map(d=>d.name)
          },
          polar: {},
          angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#7e7e7e',
                width: 1,
                type: "solid"
              },
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: '#7e7e7e',
              margin: 8,
              fontSize: 16
            },
          },
          radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#7e7e7e',
                width: 1,
                type: "solid"
              },
            },
            axisLabel: {
              formatter: '{value} %',
              show: false,
              padding: [0, 0, 20, 0],
              color: '#7e7e7e',
              opacity:.5,
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                color: '#7e7e7e',
                opacity:.5,
                width: 2,
                type: "solid"
              }
            }
          },
          calculable: true,
          series: [{
            type: 'pie',
            radius: ["5%", "10%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                color:'#ffffff',
                show: false
              },
              emphasis: {
                show: false,
                length: 30,
                length2: 55
              }
            },
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: '#7e7e7e',
                  opacity:.3
                }
              }
            }]
          }, {
            type: 'pie',
            radius: ["78%", "83%"],
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                length: 60,
                length2: 55
              }
            },
            name: "",
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: '#7e7e7e',
                  opacity:.5
                }
              }
            }]
          },{
            stack: 'a',
            type: 'pie',
            radius: ['20%', '60%'],
            roseType: 'area',
            zlevel:10,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                length: 20,
                length2: 55
              }
            },
            lableLine: {
              normal: {
                show: false,

              },
              emphasis: {
                show: true,
                length: 20,
                length2: 55
              }
            },
            data: data
          }, ]
        };

        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #cluster{
    position: absolute;
    top:0;
    left: 0;
    width: 30%;
    height: 50%;
  }
</style>
