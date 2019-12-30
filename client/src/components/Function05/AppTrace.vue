<template>
<div id="track"></div>
</template>

<script>
    export default {
      name: "AppTrace",
      mounted() {
        this.init();
      },
      methods: {
        init() {
          let chart = this.$echarts.init(document.getElementById('track'));
          let option = {
            tooltip: {
              show: false
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
              type: 'graph',
              layout: 'none',
              symbolSize: 62, //圆圈尺寸
              roam: false, //禁止用鼠标滚轮缩小放大效果
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel:{ //连接线上的文字
                normal: {
                  show: false,
                  textStyle: {
                    fontFamily:'Simsun',
                    fontSize: 16
                  }
                }
              },
              lineStyle: {
                normal: {
                  opacity: .7,
                  color: 'lightgray',
                  width: 1.5,
                  type:'solid',
                  curveness: 0.1  //线的弯曲度 0-1之间,越大则歪曲度更大
                },
                symbolSize: [4, 20] // 箭头大小
              },
              label: {//圆圈内的文字
                normal: {
                  show: true,
                  textStyle: {
                    fontFamily:'Simsun',
                    fontSize: 15
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#248bdb' //圆圈颜色
                }
              },
              data: [
                {
                  name: ' 黄浦\n市监局 ',
                  x: 512,
                  y: 80,
                  itemStyle: {
                    normal: {
                      color: '#ffac05'
                    }
                  }
                },{
                  name: '徐汇\n市监局',
                  x: 495,
                  y: 70
                }, {
                  name: '虹口\n市监局',
                  x: 530,
                  y: 65
                }, {
                  name: '静安\n市监局',
                  x: 535,
                  y: 85
                }, {
                  name: '奉贤\n市监局',
                  x: 530,
                  y: 105
                }, {
                  name: '浦东\n市监局',
                  x: 513,
                  y: 115
                }, {
                  name: '黄浦\n市监局',
                  x: 495,
                  y: 110
                }, {
                  name: '长宁\n市监局',
                  x: 485,
                  y: 95
                }

              ],
              links: [
                {
                  source: ' 黄浦\n市监局 ',
                  target: '徐汇\n市监局'
                }, {
                  source: '徐汇\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '虹口\n市监局'
                }, {
                  source: '虹口\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '静安\n市监局'
                }, {
                  source: '静安\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '奉贤\n市监局'
                }, {
                  source: '奉贤\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '浦东\n市监局'
                }, {
                  source: '浦东\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '黄浦\n市监局'
                }, {
                  source: '黄浦\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '长宁\n市监局'
                }, {
                  source: '长宁\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: ' 黄浦\n市监局 ',
                  target: '徐汇\n市监局'
                }, {
                  source: '徐汇\n市监局',
                  target: ' 黄浦\n市监局 '
                }, {
                  source: '长宁\n市监局',
                  target: '徐汇\n市监局'
                }, {
                  source: '徐汇\n市监局',
                  target: '长宁\n市监局'
                }, {
                  source: '黄浦\n市监局',
                  target: '长宁\n市监局'
                }, {
                  source: '长宁\n市监局',
                  target: '黄浦\n市监局'
                }]
            }]
          };

          chart.setOption(option);
        }
      }
    }
</script>

<style scoped>
  #track{
    position: absolute;
    top:0;
    left: 25%;
    width: 50%;
    height: 70%;

  }
</style>
