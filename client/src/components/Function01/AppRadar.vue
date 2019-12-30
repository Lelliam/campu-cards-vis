<template>
  <div id="radar"></div>
</template>

<script>
  import * as d3 from "d3";
  export default {
    name: "AppRadar",
    data(){
      return{
      }
    },
    mounted() {
      this.Init();
    },
    methods:{
      getSex(major){
        return this.$axios.get('major_sex',{params:{
            major:major
          }});
      },
      getMajorSexDept(major){
        return this.$axios.get('major_sex_dept',{params:{
            major:major
          }});
      },
      Init(major='18国际金融'){
        this.$axios.all([this.getSex(major),this.getMajorSexDept(major)]).then(this.$axios.spread((res1,res2)=>{
          this.Draw(res1.data,res2.data,major);
        }));
      },
      Draw(sex_data,data,major) {
        let chart = this.$echarts.init(document.getElementById('radar'));
        let option = {
          title:{
            text:`空间偏好信息`,
            subtext:`${major.replace('18','')}专业`
          },
          color: ["rgb(255,124,139)", "rgb(108,183,255)"],
          tooltip: {
            show: true,
            trigger: "item"
          },
          legend: {
            show: true,
            //icon: "circle",
            right: '10%',
            top: '0%',
            //orient: "vertical",
            itemGap: 30,
            textStyle: {
              fontSize: 15,
              color: "#000"
            },
            data: [{
              name:'男',
              icon:'image://http://localhost:3000/images/male.png',
            }, {
              name:'女',
              icon:'image://http://localhost:3000/images/female.png',
            }]
          },
          radar: {
            center: ["50%", "50%"],
            radius: "70%",
            startAngle: 90,
            splitNumber: 4,
            //shape: "circle",
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
                color: "rgba(29,24,26,0.63)",
                areaStyle: {
                  color: ["transparent"]
                }
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  'rgba(238, 197, 102, 0.3)', 'rgba(238, 197, 102, 0.3)',
                  'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.4)',
                  'rgba(238, 197, 102, 0.7)', 'rgba(255,181,83,0.52)'
                ].reverse()
              }
            },
            splitArea: {
              areaStyle: {
                color:'#FFF'
              }
            },
            indicator: [
              {name: "第一食堂", max: 0.5},
              {name: "第二食堂", max: 0.5},
              {name: "第三食堂", max: 0.5},
              {name: "第四食堂", max: 0.5},
              {name: "第五食堂", max: 0.5},
              {name: "好利来食品店", max:0.5},
              {name: "财务处", max:0.5},
              {name: "红太阳超市", max:0.5}]
          },
          series: [{
            name: "男",
            type: "radar",
            symbol: "circle",
            symbolSize: 5,
            areaStyle: {
              normal: {
                color: "rgba(108,183,255, 0.4)"
              }
            },
            itemStyle:{
              color:'rgba(108,183,255, 1)',
              borderColor:'rgba(108,183,255, 0.3)',
              borderWidth:10,
            },
            lineStyle: {
              normal: {
                color: "rgba(108,183,255, 1)",
                width: 2
              }
            },
            data: [
              data.filter(d=>d.name === '男')[0].data.map(d=>d.value)
            ]
          }, {
            name: "女",
            type: "radar",
            symbol: "circle",
            symbolSize: 5,
            itemStyle: {
              normal: {
                color:'rgb(255,124,139, 1)',
                borderColor: "rgba(255,124,139, 0.4)",
                borderWidth: 10
              }
            },
            areaStyle: {
              normal: {
                "color": "rgba(255,124,139, .5)"
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(255,124,139, 1)",
                width: 1,
              }
            },
            data: [
              data.filter(d=>d.name === '女')[0].data.map(d=>d.value)
            ]
          },
            {
              name:'性别',
              center: ['50%', '50%'],
              type: 'pie',
              radius: ['73%', '75%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle:{
                normal:{
                  color:(params)=>['#6cb7ff','#ff3684'][params.dataIndex],
                }
              },
              label: {
                normal: {
                  show: false
                }
              },
              data: sex_data
            }]
        };
        chart.setOption(option);
      }
    },
    computed:{
      major_state(){
        return this.$store.state.major_state;
      }
    },
    watch:{
      major_state:{
        handler(state){
          this.Init(state);
          //console.log(state);
        }
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
