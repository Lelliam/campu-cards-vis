<template>
  <div id="detail">
      <Card v-for="i in list" :key="i" :style="{margin: '10px',minHeight: '250px'}">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          专业名称{{i}}
        </p>
        <a @click="close(i)" slot="extra">
          <Icon type="ios-loop-strong"></Icon>
          X
        </a>
      </Card>

  </div>
</template>

<script>
  import * as d3 from "d3";

  export default {
    name: "AppMainDetail",
    data(){
      return  {
        list:['X','Y','Z'],
        sex_data:[],
        place_data:[]
      }
    },
    mounted() {
      this.Init();
    },
    methods: {
      handleAdd() {
        if (this.list.length) {
          this.list.push(this.list[this.list.length - 1] + 1);
        } else {
          this.list.push(0);
        }
      },
      close(name) {

        const index = this.list.indexOf(name);
        this.list.splice(index, 1);
      },
      Init(Major) {
        this.$http.get('query', {
          params: {
            sql: `select * from students_origin where Major='18国际金融'`
          }
        }).then(res => {
          this.sex_data = d3.nest().key(d => d.Sex).entries(res.body).map(d => {
            return {value: d.values.length, name: d.key};
          });
        }).then(this.$http.get('query', {
            params: {
              sql: `select students_origin.CardNo,cost_pro.Dept from students_origin,cost_pro where students_origin.Major='18国际金融' and students_origin.CardNo=cost_pro.CardNo`
            }
          }).then(res => {
            //console.log(d3.nest().key(d => d.Dept).entries(res.body));
            this.place_data = d3.nest().key(d => d.Dept).entries(res.body).map(d => {
              return {value: d.values.length, name: d.key};
            });
          }).then(this.SendData)
        );
      },
      SendData() {
        this.Draw(this.sex_data, this.place_data);
        //console.log(this.place_data.values());
      },


      Draw(sex_data,place_data){
        let chart = this.$echarts.init(document.getElementById('detail'));

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
</style>
