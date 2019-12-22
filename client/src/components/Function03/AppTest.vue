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

        this.$http.get('query', {
          params: {
            sql: `select * from cost_pro`
          }
        }).then(res=>{
          console.log(res.body);
          console.log(d3.nest().key(d=>d.Major).entries(res.body).map(d=>{
            return d3.nest().key(d=>d.TermNo).entries(d.values)
          }));
          // this.$http.get('query', {
          //   params: {
          //     sql: `select * from track_data_pro where Date > '2019/04/01 06:00' and Date < '2019/04/01 10:00' order by Date`
          //     //sql: `select TermNo,Dept,Money from cost_pro`
          //   }
          // }).then(res=>{
          //
          //   //res.body.forEach(d=>d.Date = new Date(d.Date));
          //   //console.log(res.body);
          //   console.log(d3.nest().key(d=>d.Dept).entries(res.body).map(d=>{
          //     return {dept:d.key, data:d3.nest().key(d=>d.TermNo).entries(d.values)}
          //   }));

          //let nodes = d3.nest().key(d=>d.Dept).entries(res.body).map((d,i)=>{
          //   return {name:d.key,id:i}
          // });
          // let links = [];
          // data.forEach(d=>{
          //   let begin = d.values[0];
          //   for(let i =1;i<d.values.length; i++){
          //     if(begin.Dept === d.values[i].Dept){
          //
          //     }
          //     else{
          //       links.push({source:begin.Dept,target:d.values[i].Dept,value:1});
          //     }
          //     begin = d.values[i];
          //   }
          // });
          // console.log(nodes);
          //console.log(d3.extent(res.body,d=>new Date(d.Date)));
          // console.log(res.body);
          //console.log(d3.max(data,d=>d.values.length));

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
