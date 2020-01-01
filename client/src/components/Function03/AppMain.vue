<template>
  <div id="main">
    <div id="main_01"></div>
    <div id="info">
      <Timeline v-model="info">
        <TimelineItem color="red">
          <p class="time">专业</p>
          <p class="content">{{info.major}}</p>
        </TimelineItem>
        <TimelineItem color="green">
          <p class="time">专业人数</p>
          <p class="content">{{info.number}}</p>
        </TimelineItem>
        <TimelineItem color="blue">
          <p class="time">主要消费地点</p>
          <p class="content" v-for=" i in info.dept">{{i}}</p>
        </TimelineItem>
      </Timeline>
    </div>
  </div>

</template>

<script>
  import * as d3 from 'd3'
  import geoJson from '../../../static/map_ls.js'
  export default {
    name: "AppMain",
    data(){
      return {
        major_list:['18国际金融'],
        info:{
          major:'18国际金融',
          number:97,
          dept:['二食堂', '三食堂', '五食堂']
        }
      }
    },
    mounted() {
      this.Init();
    },
    methods:{
      getMajorNum(){
        return this.$axios.get('major_num');
      },
      getMajorDept(major){
        return this.$axios.get('major_dept',{params:{
            major:major
          }});
      },
      getAllDept(){
        return this.$axios.get('all_dept')
      },
      Init(){
        this.$axios.all([this.getMajorNum(),this.getAllDept()]).then(this.$axios.spread((res1,res2)=>{
          this.Draw(res1.data,res2.data);
        }));
      },
      Draw(major_number,place_data){

        let chart = this.$echarts.init(document.getElementById('main_01'));

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

        let data = place_data;

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
          series: [
            {
              name:'专业',
              center: ['50%', '50%'],
              type:'pie',
              roseType : 'radius',
              radius: ['68%', '94%'],
              title:{
                text: '各个专业信息',
                //subtext: '纯属虚构',
                x:'center'
              },
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
                  show: true
                }
              },
              data:major_number,
              zoom:1.2,
              zlevel: 10
            },
            {
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
                  //color: '#ff3b59', //标志颜色
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

        chart.on('click',params=>{
          if(params.componentSubType === 'pie') {

            this.info.major = params.name;
            this.info.number = params.value;

            this.getMajorDept(params.name).then(res=>{
              this.Update(res.data,option,chart,geoCoordMap);
            });

            this.$store.commit('major_state',params.name);

            if(this.major_list.includes(params.name)){
              this.major_list.splice(this.major_list.indexOf(params.name), 1);
              this.$store.commit('major_cancel',{
                major:params.name,
                operate:'pop',
                color:''
              });
            }
            else{
              this.major_list.push(params.name);
              this.$store.commit('major_cancel',{
                major:params.name,
                operate:'push',
                color:params.color
              });
            }

          }
          else if(params.componentSubType === 'geo') {
          }
          else {
            this.getAllDept().then(res=>{
              this.Update(res.data,option,chart,geoCoordMap);
            });
          }

        });
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
      },

      Update(data,option,chart,geoCoordMap){

        this.info.dept = this.convertData(geoCoordMap,data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 3)).map(d=>d.name.replace('第',''));

        let scale = d3.scaleLinear()
          .domain(d3.extent(data,d=>d.value))
          .range([1,100]);

        option.series[1].data = this.convertData(geoCoordMap, data);
        option.series[1]. symbolSize = function (val) {
          return scale(val[2]);
        };

        option.series[2].data = this.convertData(geoCoordMap,data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 3));

        option.series[2]. symbolSize = function (val) {
          return scale(val[2]);


        };

        chart.setOption(option);

      }
    }
  }
</script>

<style scoped>
  #main{
    position: absolute;
    top:0;
    left: 20%;
    width: 45%;
    height: 60%;
  }
  #main_01{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #info{
    position: absolute;
    right: 0;
    top:6%;
    width: 19%;
    height: auto;
    z-index: 10;
  }
  .time{
    font-size: 14px;
    text-align: left;
  }
  .content{
    font-size: 12px;
    text-align: left;
  }
</style>
