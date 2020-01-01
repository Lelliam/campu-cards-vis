<template>
  <div id="matrix_tree"></div>
</template>

<script>
  import * as d3 from "d3";
  export default {
    name: "AppMatrixTree",
    data() {
      return {
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData(){
        this.$axios.get('f2_canteen_').then(res=>{
          console.log(res.data);
          this.MatrixTree(res.data);
        })
      },
      MatrixTree(data){

        let chart = this.$echarts.init(document.getElementById('matrix_tree'));

        console.log(data);

        let option = {
          title: {
            text: '食堂消费项目分布',
            top:'0',
            left: '0'
          },
          tooltip: {
            formatter:function (info) {
              return info.data.term_no;
            }
          },
          legend:{
            data:data.map(d=>d.name)
          },
          series: [{
            name: '消费地点',
            type: 'treemap',
            visibleMin: 1000,
            data: data,
            leafDepth: 2,
            levels: [
              {
                itemStyle: {
                  normal: {
                    borderColor: '#ffffff',
                    borderWidth: 4,
                    gapWidth: 4
                  }
                }
              }, {
                colorSaturation: [0.6, 0.3],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2
                  }
                }
              }, {
                colorSaturation: [0.5, 0.3],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1
                  }
                }
              },
              {
                colorSaturation: [0.5, 0.3]
              }
            ]
          }]
        };

        document.oncontextmenu = function() {
          return false;
        };
        //chart.on('contextmenu', showMenu);
        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #matrix_tree{
    position: absolute;
    bottom:0;
    left: 0;
    width: 20%;
    height: 40%;
  }
</style>
