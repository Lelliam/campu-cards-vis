<template>
  <div id="main"></div>
</template>

<script>
  import geoJson from '../../../static/map_ls.js'
  import * as d3 from "d3";
  export default {
    name: "AppMain",
    mounted() {
      this.test();
    },
    methods:{
      test(){
        let DateFormat = d3.timeFormat('%Y-%m-%d %H:%M');
        this.$axios.get('track').then(res=>{
          let nodes = d3.nest().key(d=>d.Dept).entries(res.data).map(d=>{
            return {
              name:d.key,
              symbolSize:0
            }
          });
          res.data.forEach(d=>{
            d.Date = DateFormat(new  Date(d.Date));
            nodes.forEach(t=>{
              if(t.name === d.Dept)
                t.symbolSize++;
            })
          });
          res.data.sort((a,b)=>a.Date - b.Date);
          let data = d3.nest().key(d=>d.CardNo).entries(res.data).filter(d=>d.values.length>1);
          let links = [];

          data.forEach(d=>{
            let start = d.values[0].Dept;
            for(let i =1;i<d.values.length;i++){
              if(start === d.values[i].Dept){
              }
              else{
                let flag = true;
                if(links)
                links.forEach(s=>{
                  if(s.source === start && s.target === d.values[i].Dept)
                    flag = false;
                });
                if(flag)
                  links.push({
                    source:start,
                    target:d.values[i].Dept
                  });
                start = d.values[i].Dept;
              }
            }
          });
          this.Draw({nodes:nodes,links:links});
        });
      },
      /* "人文社科","医务室","基础课部","外语系","好利来食品店","宿管办","工商系部","教师食堂","旅游系","机电系",
      * "水电缴费处","第一图书馆","第一教学楼","第一食堂","第七教学楼","第三教学楼","第三食堂","第二图书馆","第二教学楼",
      * "第二食堂","第五教学楼","第五食堂","第六教学楼","第四教学楼","第四食堂","红太阳超市","自然科学书库","艺术设计学院",
      * "财务处","财务部","财经系","青鸾苑宿管办","飞凤轩宿管办"*/
      Draw(data){
        // let data = ["人文社科","医务室","基础课部","外语系","好利来食品店","宿管办","工商系部","教师食堂","旅游系","机电系",
        //   "水电缴费处","第一图书馆","第一教学楼","第一食堂","第七教学楼","第三教学楼","第三食堂","第二图书馆","第二教学楼",
        //   "第二食堂","第五教学楼","第五食堂","第六教学楼","第四教学楼","第四食堂","红太阳超市","自然科学书库","艺术设计学院",
        //   "财务处","财务部","财经系","青鸾苑宿管办","飞凤轩宿管办"].map(d=>{
        //   return {
        //     name:d,
        //     value:3
        //   }
        // });

        let chart = this.$echarts.init(document.getElementById('main'));

        // let scale = d3.scaleLinear()
        //   .domain(d3.extent(data,d=>d.value))
        //   .range([1,50]);
        //
        // this.$echarts.registerMap('ls', geoJson);
        //
        // let geoCoordMap = {
        //   '财务处':[120.543338882,31.9087250105],
        //   '红太阳超市':[120.55881073,31.9320563076],
        //   '第五食堂':[120.583760732,31.8220902091],
        //   '第二食堂':[120.631224777,31.9192103578],
        //   '第一食堂':[120.675220625,31.8233475975],
        //   '第三食堂':[120.728973474,31.8658316614],
        //   '第四食堂':[120.528945004,31.870892279],
        //   '好利来食品店':[120.725388101,31.9058733739],
        //
        //   '人文社科':[120.625388101,31.9858733739],
        //   '医务室':[120.625388101,31.8858733739],
        //   '基础课部':[120.645388101,31.8578733739],
        //   '外语系':[120.445388101,31.9578733739],
        //   '宿管办':[120.625388101,31.8858733739],
        // }

        // let option = {
        //   tooltip: {
        //     trigger: 'item',
        //     //formatter: "{a} <br/>{b}: {c} ({d}%)",
        //     formatter :(e)=>e.name
        //   },
        //   geo: {
        //     map: 'ls',
        //     show: true,
        //     roam: true,
        //     label: {
        //       emphasis: {
        //         show: false
        //       }
        //     },
        //     itemStyle: {
        //       emphasis: {
        //         areaColor: 'rgba(29,24,26,0.2)',
        //       },
        //       normal: {
        //         areaColor: 'rgba(29,24,26,0.2)',
        //         borderColor: 'rgb(255,255,255)',
        //         //shadowColor: '#031525',
        //         //shadowBlur: 5
        //       }
        //     },
        //     zoom:1.2,
        //   },
        //   series: [{
        //     name: '地点',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     symbol: 'circle',
        //     symbolSize: function (val) {
        //       return scale(val[2]);
        //     },
        //     label: {
        //       normal: {
        //         show: false,
        //         formatter: function(value){
        //           return value.value[2]
        //         },
        //         textStyle: {
        //           color: '#fff',
        //           fontSize: 12,
        //         }
        //       }
        //     },
        //     itemStyle: {
        //       normal: {
        //         //color: '#ff3b59', //标志颜色
        //         //shadowBlur: 10,
        //         shadowColor: 'rgba(29,24,26,0.81)',
        //       }
        //     },
        //     zlevel: 6,
        //     data: this.convertData(geoCoordMap,data),
        //   }]
        // };

        console.log(data);

/*        let option = option = {
          title: {
            text: 'Graph 简单示例'
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series : [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 50,
              roam: true,
              label: {
                normal: {
                  show: true
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: data.nodes.map(d => {
                return {
                  name: d,
                  x: Math.floor(Math.random() * 600),
                  y: Math.floor(Math.random() * 600)
                }
              }),
              // links: [],
              links:data.links
            }],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        };

        */

        // let option = {
        //   series: [ {
        //     type: 'graph',
        //     layout: 'force',
        //     animation: false,
        //     data: data.nodes.map(d=> {
        //       return {'name':d}
        //     }),
        //     width: '25%',
        //     height: '25%',
        //     force: {
        //       // initLayout: 'circular'
        //       // gravity: 0
        //       repulsion: 500,
        //       //edgeLength: 8
        //     },
        //     edges: data.links
        //   }]
        // };
        let scale = d3.scaleLinear()
        .domain(d3.extent(data.nodes,d=>d.symbolSize))
        .range([10,100]);
        data.nodes.forEach(function (node) {
          node.itemStyle = null;
          node.value = node.symbolSize;
          node.label = {
            normal: {
              show: node.symbolSize > 30
            }
          };
          node.label.normal.show = node.symbolSize > 30;
          //node.category = node.attributes.modularity_class;
        });

        let  option = {
          title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          // legend: [{
          //   // selectedMode: 'single',
          //   data: categories.map(function (a) {
          //     return a.name;
          //   })
          // }],
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series : [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'circular',
              data: data.nodes,
              links: data.links,
              //categories: categories,
              roam: true,
              label: {
                normal: {
                  position: 'right',
                  formatter: '{b}'
                }
              },
              lineStyle: {
                normal: {
                  curveness: 0.3
                }
              }
            }
          ]
        };

        chart.setOption(option);
        chart.on('click',(e)=>{
          console.log(e);
        });
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
    }
  }
</script>

<style scoped>
  #main{
    position: absolute;
    left: 25%;
    width: 50%;
    height: 65%;
  }
</style>
