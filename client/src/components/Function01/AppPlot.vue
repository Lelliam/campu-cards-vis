<template>
<div id="plot"></div>
</template>

<script>
  import '../../../static/dataTool.min'
    export default {
        name: "AppPlot",
      mounted(){
          this.Plot();
      },
      methods:{
        Plot(){
          let chart = this.$echarts.init(document.getElementById('plot'));
          let data = this.$echarts.dataTool.prepareBoxplotData([
            [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
            [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
            [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
            [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],

          ], {
            layout: 'vertical'
          });
          let option = {
            title: [
              {
                text: 'Michelson-Morley Experiment',
                x: 'center',
              },
              {
                text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                  fontSize: 14
                },
                left: '10%',
                top: '90%'
              }
            ],
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '10%',
              right: '10%',
              bottom: '15%'
            },
            yAxis: {
              type: 'category',
              data: data.axisData,
              boundaryGap: true,
              nameGap: 30,
              splitArea: {
                show: false
              },
              axisLabel: {
                formatter: 'expr {value}'
              },
              splitLine: {
                show: false
              }
            },
            xAxis: {
              type: 'value',
              name: 'km/s minus 299,000',
              splitArea: {
                show: true
              }
            },
            series: [
              {
                name: 'boxplot',
                type: 'boxplot',
                data: data.boxData,
                tooltip: {
                  formatter: function (param) {
                    return [
                      'Experiment ' + param.name + ': ',
                      'upper: ' + param.data[5],
                      'Q3: ' + param.data[4],
                      'median: ' + param.data[3],
                      'Q1: ' + param.data[2],
                      'lower: ' + param.data[1]
                    ].join('<br/>')
                  }
                }
              },
              {
                name: 'outlier',
                type: 'scatter',
                data: data.outliers
              }
            ]

          };
          chart.setOption(option);
        }
      }

    }
</script>

<style scoped>
  #plot{
    position: absolute;
    top:0;
    left: 0;
    width: 20%;
    height: 60%;
  }
</style>
