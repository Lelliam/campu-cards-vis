<template>
  <div id="level">
    <div id="level_main"></div>
    <div id="level_sex">
      <CheckboxGroup>
        <Checkbox label="male">
          <Icon type="md-male" />
          <span>男</span>
        </Checkbox>
        <Checkbox label="female">
          <Icon type="md-female" />
          <span>女</span>
        </Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppCostLevel",
    mounted() {
      this.getData('18国际金融');
    },
    methods:{
      getData(major){
        this.$axios.get('f1_cost_level',{params:{
            major:major
          }}).then(res=>{
          this.Draw(res.data,major);
        });
      },
      Draw(data,major){
        let chart = this.$echarts.init(document.getElementById('level_main'));

        let source =[['name','value']];
        data.forEach((d,i)=>{
          source[i+1] = [d.name,d.value];
        });
        //console.log(source);
        let option = {
          title:{
            top:'5%',
            text:`消费等级分布`,
            subtext:`${major.replace('18','')}专业`
          },
          dataset: {
            source: source
          },
          color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', '#f17677'],
          grid: {
            left: '0',
            top: '60%',
            right: '15%',
            containLabel: true
          },
          xAxis: [{
            show: false,
          },
            {
              show: false,
            }
          ],
          yAxis: {
            type: 'category',
            inverse: true,
            axisTick:{
              show:false//不显示坐标轴刻度线
            },
            axisLine: {
              show: false,//不显示坐标轴线
            }
            // show: false
          },
          series: [{
            tooltip: {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)"
            },
            type: 'pie',
            center: ['50%', '35%'],
            radius: ['43%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                formatter: '{b}\n{d}%'
              },

            },
            labelLine: {
              normal: {
                show: true
              }
            },
            encode: {
              itemName: 'name',
              value: 'value'
            }
          },
            //亮色条 百分比
            {
              show: true,
              type: 'bar',
              barGap: '10%',
              barWidth: '10%',
              z: 2,
              color: function(params) {
                // build a color map as your need.
                var colorList = [
                  '#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677'
                ];
                return colorList[params.dataIndex]
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: 'rgba(29,24,26,0.74)',
                    fontSize: 20,
                    //fontWeight: 'bold'
                  },
                  position: 'right'
                }
              },
              encode: {
                x: 'value'
              }
            },
            //年份
            {
              show: false,
              type: 'bar',
              xAxisIndex: 1, //代表使用第二个X轴刻度
              barGap: '10%',
              barWidth: '10%',
              itemStyle: {
                normal: {
                  barBorderRadius: 200,
                  color: 'transparent'
                }
              },
              label: {
                normal: {
                  show: false,
                  position: [0, '-20'],
                  formatter: '{b}',
                  textStyle: {
                    fontSize: 14,
                    color: '#333',
                  }
                }
              },
              encode: {
                y: 'name'
              }
            }
          ]
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
          this.getData(state);
          //console.log(state);
        }
      }
    }
  }
</script>

<style scoped>
  #level{
    position: absolute;
    top:0;
    right: 0;
    width: 20%;
    height: 60%;
  }
  #level_main{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #level_sex{
    position: absolute;
    top:5%;
    left: 20%;
    width: 100%;
    height: 20%;
    z-index:5;
  }
</style>
