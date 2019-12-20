<template>
  <div id="test"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "AppTest",
    mounted() {
      this.init_chart();
    },
    methods:{
      init_chart(){
        let address = ["飞凤轩[出门]","青鸾苑[进门]","第六教学楼[进门]","飞凤轩[进门]","第六教学楼[出门]",
          "第七教学楼[进门]","第二食堂","好利来食品店","第五食堂","第一食堂","红太阳超市","青鸾苑[出门]","医务室",
          "水电缴费处","财务处","第四食堂","第一图书馆","第七教学楼[出门]","自然科学书库","第三食堂","财务部",
          "教师食堂","第五教学楼[进门]","第四教学楼","第二图书馆","飞凤轩宿管办","第五教学楼[出门]"];

        this.$http.get('query', {
          params: {
            sql: `select * from track_data where Date(date) = '2019/04/01' order by date`
          }
        }).then(res=>{
          let data = d3.nest().key(d=>d.card_no).entries(res.body);
          console.log(data);
          console.log(d3.max(data,d=>d.values.length));

        });
      }
    }
  }
</script>

<style scoped>
  #test{
    position: absolute;
    width: 36%;
    height: 65%;
    background-color: #cbcbcb;
  }
</style>
