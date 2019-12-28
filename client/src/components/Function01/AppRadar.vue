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
        Place_data:[]
      }
    },
    mounted() {
      //this.Radar();
      this.Init();
    },
    methods:{
      Init(Major = '18国际金融'){
        let sql = `select Sex, Major, Dept from cost_pro where Major =  '${Major}'`;
        this.$http.get('query', {
          params: {
            sql: sql
          }
        }).then(res => {
          let Dept = [
          "第一食堂",
          "第二食堂",
          "第三食堂",
          "第四食堂",
          "第五食堂",
          "好利来食品店",
          "财务处",
          "红太阳超市"
          ];
          let data = res.body.filter(d=>Dept.includes(d.Dept));
          this.Place_data = d3.nest().key(d => d.Sex).entries(data).map(d => {
            return {sex:d.key, data:d3.nest().key(d=>d.Dept).entries(d.values).map(d=>{
                return {Dept:d.key,value:d.values.length}
              }).sort((a,b)=>Dept.indexOf(a.Dept)-Dept.indexOf(b.Dept))}
          });
          // console.log(this.Female_data);
          this.Draw(this.Place_data);
          //console.log();
        });
      },
      Draw(Place_data) {


        let chart = this.$echarts.init(document.getElementById('radar'));

        let max = d3.max(Place_data,d=>d.value);
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
              max: max
            },{
              name: "第二食堂",
              max: max
            },{
              name: "第三食堂",
              max: max
            }, {
              name: "第四食堂",
              max: max
            }, {
              name: "第五食堂",
              max: max
            }, {
              name: "好利来食品店",
              max: max
            },{
              name: "财务处",
              max: max
            },{
              name: "红太阳超市",
              max: max
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
              color:'#ff3b59',
              borderColor:'rgba(86,199,60, 0.3)',
              borderWidth:10,
            },
            lineStyle: {
              normal: {
                color: "rgba(86,199,60, 1)",
                width: 2
              }
            },
            data:[[Place_data[0].data[0].value,Place_data[0].data[1].value,
              Place_data[0].data[2].value,Place_data[0].data[3].value,
              Place_data[0].data[4].value,Place_data[0].data[5].value,
              Place_data[0].data[6].value,Place_data[0].data[7].value]]
          }, {
            name: "女",
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              normal: {
                color:'#6cb7ff',
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
            data:[[Place_data[1].data[0].value,Place_data[1].data[1].value,
              Place_data[1].data[2].value,Place_data[1].data[3].value,
              Place_data[1].data[4].value,Place_data[1].data[5].value,
              Place_data[1].data[6].value,Place_data[1].data[7].value]]
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
