<template>
<div id="radar"></div>
</template>

<script>
    import * as d3 from "d3";
    export default {
        name: "AppRadar",
      data()
      {
        return{
          Male_data:[],
          Female_data:[]
        }
      },
      mounted() {
          //this.Radar();
          this.Init();
      },
      methods:{
          Init(Major){
            this.$http.get('query', {
              params: {
                sql: `select students_origin.CardNo,cost_pro.Dept from students_origin,cost_pro where students_origin.Major='18国际金融' and students_origin.Sex='男' and students_origin.CardNo=cost_pro.CardNo`
              }
            }).then(res => {
              console.log(d3.nest().key(d => d.Dept).entries(res.body));
              this.Male_data = d3.nest().key(d => d.Sex).entries(res.body).map(d => {
                return {value: d.values.length, name: d.key};
              });
            }).then(this.$http.get('query', {
                params: {
                  sql: `select students_origin.CardNo,cost_pro.Dept from students_origin,cost_pro where students_origin.Major='18国际金融' and students_origin.Sex='女' and students_origin.CardNo=cost_pro.CardNo`
                }
              }).then(res => {
                this.Female_data = d3.nest().key(d => d.Dept).entries(res.body).map(d => {
                  return {value: d.values.length, name: d.key};
                });
              }).then(this.SendData)
            );
          },
        SendData() {
          this.Draw(this.Male_data, this.Female_data);
        },
        Draw(Male_data,Female_data) {
            let echarts = this.$echarts;

            let chart = this.$echarts.init(document.getElementById('radar'));

            let option = {
              color: ["rgb(26,199,255)", "rgb(255,104,123)"],
              tooltip: {
                show: true,
                trigger: "item"
              },
              grid: {
                top: '15%',
                right: '5%',
                left: '90%',
                bottom: '15%'
              },
              legend: {
                show: true,
                icon: "circle",
                right: '5%',
                top: 'center',
                orient: "vertical",
                itemGap: 30,
                textStyle: {
                  fontSize: 15,
                  color: "#000"
                },
                data: ["男", "女"]
              },
              radar: {
                center: ["50%", "50%"],
                radius: "70%",
                startAngle: 90,
                splitNumber: 4,
                shape: "circle",
                splitArea: {
                  areaStyle: {
                    color: ["transparent"]
                  }
                },
                axisLabel: {
                  show: false,
                  fontSize: 20,
                  color: "#000",
                  fontStyle: "normal",
                  fontWeight: "normal"
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    type:"dashed",
                    color: "#000"
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    type:"dashed",
                    color: "#000"
                  }
                },
                indicator: [{
                  name: "第一食堂",
                  max: 5000
                },{
                  name: "第二食堂",
                  max: 5000
                },{
                  name: "第三食堂",
                  max: 5000
                }, {
                  name: "第四食堂",
                  max: 5000
                }, {
                  name: "第五食堂",
                  max: 5000
                }, {
                  name: "好利来食品店",
                  max: 5000
                },{
                  name: "财务处",
                  max: 5000
                },{
                  name: "红太阳超市",
                  max: 5000
                }]
              },
              series: [{
                name: "男",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                  normal: {
                    color: "rgba(86,199,60, 0.4)"
                  }
                },
                itemStyle:{
                  color:'rgba(86,199,60, 1)',
                  borderColor:'rgba(86,199,60, 0.3)',
                  borderWidth:10,
                },
                lineStyle: {
                  normal: {
                    color: "rgba(86,199,60, 1)",
                    width: 2
                  }
                },
                data: [
                  [3800, 4500, 2550, 1800, 4500, 3800]
                ]
              }, {
                name: "女",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                itemStyle: {
                  normal: {
                    color:'rgba(0,183,238, 1)',
                    borderColor: "rgba(0,183,238, 0.4)",
                    borderWidth: 10
                  }
                },
                areaStyle: {
                  normal: {
                    "color": "rgba(0,183,238, 1)"
                  }
                },
                lineStyle: {
                  normal: {
                    color: "rgba(0,183,238, 1)",
                    width: 2,
                  }
                },
                data: [
                  [3600, 2600, 4650, 1600, 2500, 4400]
                ]
              }]
            };
            chart.setOption(option);
          }
      }
    }
</script>

<style scoped>
  #radar{
    position: absolute;
    bottom:0;
    right: 0;
    width: 20%;
    height: 40%;
  }
</style>
