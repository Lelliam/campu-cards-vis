<template>
  <div id="detail">
      <Card v-for="(i,d) in list" :key="i" :style="{margin: '10px',minHeight: '250px'}">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          专业名称{{i}}
        </p>
        <a @click="close(i)" slot="extra">
          <Icon type="ios-loop-strong"></Icon>
          X
        </a>
        <div class="major_detail" :id="'major'+d"></div>
      </Card>
  </div>
</template>

<script>
  import * as d3 from "d3";
  export default {
    name: "AppMainDetail",
    data(){
      return  {
        list:['18市场营销','18软件技术'],
        sex_data:[],
        place_data:[]
      }
    },
    mounted() {
      //this.Init();
    },
    methods: {
      getSex(major){
        return this.$axios.get('major_sex',{params:{
            major:major
          }});
      },
      getMajorDept(major){
        return this.$axios.get('major_dept',{params:{
            major:major
          }});
      },
      SendData(major = '18软件技术',id) {
        this.$axios.all([this.getSex(major),this.getMajorDept(major)]).then(this.$axios.spread((res1,res2)=>{
          this.Draw(res1.data,res2.data,id);
        }));
      },
      Draw(sex_data,place_data,id){
        let chart = this.$echarts.init(document.getElementById('major'+id));
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
            {
              name:'性别',
              center: ['50%', '50%'],
              type: 'pie',
              radius: ['55%', '70%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle:{
                normal:{
                  color:(params)=>['#6cb7ff','#ff3b59'][params.dataIndex]
                }
              },
              label: {
                normal: {
                  show: false
                }
              },
              data: sex_data
            },{
              name:'地点',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '55%'],

              label: {
                normal: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:place_data
            }
          ]
        };
        chart.setOption(option);
      },
      close(name) {
        this.list.splice(this.list.indexOf(name), 1);
      },
    },
    computed:{
      major_list(){
        return this.$store.state.major_list;
      }
    },
    watch:{
      major_list:{
        handler(value){
          //console.log(value);
          this.list = value;
          this.list.forEach((d,i)=>{
            this.SendData(d,i);
          });
        }
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: absolute;
    top:0;
    left: 65%;
    width: 15%;
    height: 60%;
    overflow-y:auto;
    overflow-x: hidden;
  }

  .sub_circle{
    position: relative;
    width: 100%;
    height: 100px;
  }

  .major_detail{
    position: absolute;
    width: 100%;
    height: 80%;
  }
</style>
