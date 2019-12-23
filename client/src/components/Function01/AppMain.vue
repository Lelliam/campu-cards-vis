<template>
  <div id="main_01"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppMain",
    mounted() {
      this.Main();
      //this.Draw();
    },
    methods:{
      //https://gallery.echartsjs.com/editor.html?c=x3plwvJlaT
      Draw() {
        let chart = this.$echarts.init(document.getElementById('main_01'));

        let data1 = [{
          value: 754
        },
          {
            value: 611
          },
          {
            value: 400
          },
          {
            value: 200
          }
        ];
        let arrName = getArrayValue(data1, "name");
        let arrValue = getArrayValue(data1, "value");
        let sumValue = eval(arrValue.join('+'));
        let objData = array2obj(data1, "name");
        let optionData = getData(data1)

        function getArrayValue(array, key) {
          var key = key || "value";
          let res = [];
          if (array) {
            array.forEach(function (t) {
              res.push(t[key]);
            });
          }
          return res;
        }

        function array2obj(array, key) {
          let resObj = {};
          for (let i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
          }
          return resObj;
        }

        function getData(data) {
          let res = {
            series: [],
            yAxis: []
          };
          for (let i = 0; i < data.length; i++) {
            // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
            res.series.push({
              name: '',
              type: 'pie',
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
              center: ["50%", "50%"],
              label: {
                show: false
              },
              itemStyle: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false
                },
                borderWidth: 5,
              },
              data: [{
                value: data[i].value,
                name: data[i].name
              }, {
                value: sumValue - data[i].value,
                name: '',
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }]
            });
            res.series.push({
              name: '',
              type: 'pie',
              silent: true,
              z: 1,
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
              center: ["50%", "50%"],
              label: {
                show: false
              },
              itemStyle: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false
                },
                borderWidth: 5,
              },
              data: [{
                value: 7.5,
                itemStyle: {
                  color: "rgb(3, 31, 62)",
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }, {
                value: 2.5,
                name: '',
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }]
            });
            res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
          }
          return res;
        }
        let option = {
          legend: {
            show: true,
            icon: "circle",
            top: "center",
            left: '0%',
            data: arrName,
            width: 50,
            padding: [0, 5],
            itemGap: 25,
            formatter: function (name) {
              return "{title|" + name + "}\n{value|" + (objData[name].value) + "}  {title|项}"
            },

            textStyle: {
              rich: {
                title: {
                  fontSize: 16,
                  lineHeight: 15,
                  color: "rgb(0, 178, 246)"
                },
                value: {
                  fontSize: 18,
                  lineHeight: 20,
                  color: "#fff"
                }
              }
            },
          },
          tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
          },
          color: ['rgb(24, 183, 142)', 'rgb(1, 179, 238)', 'rgb(22, 75, 205)', 'rgb(52, 52, 176)'],
          grid: {
            top: '50%',
            bottom: '50%',
            left: "50%",
            containLabel: false
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              inside: true,
              textStyle: {
                color: "#fff",
                fontSize: 16,
              },
              show: true
            },
            data: optionData.yAxis
          }],
          xAxis: [{
            show: false
          }],
          series: optionData.series
        };
        chart.setOption(option);
      },
      Main(){

        this.$http.get('query',{params:{
            sql:`select * from students_origin`
          }}).then(res=>{
          console.log(res.body);
          Draw(d3.nest().key(d=>d.Major).entries(res.body).map(d=>{
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
                data:data
              },

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
    left: 20%;
    width: 45%;
    height: 60%;
  }
</style>
