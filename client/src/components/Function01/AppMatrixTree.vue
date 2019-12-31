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
        this.$axios.get('f1_alldept_').then(res=>{
          this.MatrixTree(res.data);
        })
      },
      MatrixTree(data){

        let chart = this.$echarts.init(document.getElementById('matrix_tree'));

        console.log(data);

        let option = {
          title: {
            text: '消费项目分布',
            //subtext: '2016/04',
            top:'5%',
            left: 'center'
          },
          tooltip: {
            formatter:function (info) {
              console.log(info);
              return info.data.per_cost;
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
            //leafDepth: 2,
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
    top:0;
    right: 0;
    width: 30%;
    height: 60%;
  }
</style>
