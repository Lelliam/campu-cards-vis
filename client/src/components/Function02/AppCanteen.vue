<template>
  <div id="canteen"></div>
</template>

<script>
  import * as d3 from 'd3'
  import geoJson from '../../../static/map_ls.js'
  export default {
    name: "AppCanteen",
    data(){
      return{
      }
    },
    mounted() {
      this.getAllDept();
    },
    methods:{
      getAllDept(){
        this.$axios.get('all_dept').then(res=>{
          this.Draw(res.data);
        });
      },
      Draw(data){

        let chart = this.$echarts.init(document.getElementById('canteen'));

        this.$echarts.registerMap('ls', geoJson);

        let geoCoordMap = {
          '财务处':[120.543338882,31.9087250105],
          '红太阳超市':[120.55881073,31.9320563076],
          '第五食堂':[120.583760732,31.8220902091],
          '第二食堂':[120.631224777,31.9192103578],
          '第一食堂':[120.675220625,31.8233475975],
          '第三食堂':[120.728973474,31.8658316614],
          '第四食堂':[120.528945004,31.870892279],
          '好利来食品店':[120.725388101,31.9058733739]
        }

        // let color = [
        //   '#38c0ff',
        //   '#ff553e',
        //   '#595bff',
        //   '#ff740a',
        //   '#47ff90',
        //   '#f85fff',
        //   '#b53d5f',
        //   '#ffe454'];

        let scale = d3.scaleLinear()
          .domain(d3.extent(data,d=>d.value))
          .range([1,100]);

        let option = {
          tooltip: {
            trigger: 'item',
            //formatter: "{a} <br/>{b}: {c} ({d}%)",
            formatter : function(e) {
              if (typeof (e.value)[2] == "undefined") {
                return e.name+':'+e.value+'人';
              } else {
                return '地点<br>' + e.name + ':' + e.value[2];
              }
            }
          },
          geo: {
            map: 'ls',
            show: true,
            roam: true,
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                areaColor: 'rgba(29,24,26,0.2)',
              },
              normal: {
                areaColor: 'rgba(29,24,26,0.2)',
                borderColor: 'rgb(255,255,255)',
                //shadowColor: '#031525',
                //shadowBlur: 5
              }
            },
            zoom:1.2,
          },
          series: [{
              name: '地点',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: function (val) {
                return scale(val[2]);
              },
              label: {
                normal: {
                  show: false,
                  formatter: function(value){
                    return value.value[2]
                  },
                  textStyle: {
                    color: '#fff',
                    fontSize: 12,
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: function(param){
                    // return color[param.dataIndex];
                    return '#ff740a'
                  }, //标志颜色
                  //shadowBlur: 10,
                  shadowColor: 'rgba(29,24,26,0.81)',
                }
              },
              zlevel: 6,
              data: this.convertData(geoCoordMap,data),
            },
            {
              name: 'Top 3',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.convertData(geoCoordMap,data.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 3)),
              symbolSize: function (val) {
                return scale(val[2]);
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#1d181a',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        };

        chart.setOption(option);




      },
      convertData(geoCoordMap,data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      }
    }
  }

</script>

<style scoped>
  #canteen{
    position: absolute;
    top:0;
    left: 20%;
    width: 60%;
    height: 60%;
  }
</style>
