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
  export default {
    name: "AppMainDetail",
    data(){
      return  {
        list:['X','Y','Z']
      }
    },
    mounted() {
      //this.Draw()
    },
    methods:{
      handleAdd () {
        if (this.list.length) {
          this.list.push(this.list[this.list.length - 1] + 1);
        } else {
          this.list.push(0);
        }
      },
      close(name){

        const index = this.list.indexOf(name);
        this.list.splice(index, 1);
      },
      Draw(){
        let chart = this.$echarts.init(document.getElementById('detail'));

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
              data:[
                {value:335},
                {value:310},
                {value:234},
                {value:135},
                {value:1048},
                {value:251},
                {value:147},
                {value:102}
              ]
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
    overflow-y:scroll;
    overflow-x: hidden;
  }

  .sub_circle{
    position: relative;
    width: 100%;
    height: 100px;
  }
</style>
