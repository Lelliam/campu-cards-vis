<template>
<div id="matrix_tree"></div>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: "AppMatrixTree",
      data()
      {
        return {
          Cost_kinds:[]
        }
      },
      mounted() {
          //this.MatrixTree();
        this.Init();
      },
      methods: {

          Init(Dept = '教师食堂'){
            this.$http.get('query',{params:{
              sql:`select TermNo from cost_pro where Dept = '${Dept}'`
              }
            }).then(res=>{
              //console.log(d3.nest().key(d => d.TermNo).entries(res.body).map(d => {
              //  return {value: d.values.length, name: d.key};
            //  }));
              this.Cost_kinds = d3.nest().key(d => d.TermNo).entries(res.body).map(d => {
                return {value: d.values.length, name: d.key};
              });
              this.MatrixTree(this.Cost_kinds);
              //console.log(this.Cost_kinds.length)
            })
          },
          MatrixTree(Cost_kinds){

            let chart = this.$echarts.init(document.getElementById('matrix_tree'));

            let struct_colors = [
              '#c73437', '#2e4553', '#6e7073', '#5ba0a7', '#8cc8af',
              '#f59731', '#bfa29b', '#709f84', '#d88268'
            ];
            let RICH = {
              name: {
                color: '#fdfa3e',
                fontSize: 30,
                lineHeight: 30
              },
              basic: {
                color: '#fff',
                fontSize: 18,
                lineHeight: 18
              }
            };
            let info2 = {
              'children': []
            };
            function Add_data(children,Cost_kinds)
            {
              for(let i in Cost_kinds){
                children.push({
                  'asset_num':Cost_kinds[i].value,
                  'name': Cost_kinds[i].name,
                })
              }
            }
            Add_data(info2.children,Cost_kinds);
            let structs_datas = [];
            let formatUtil = chart.format;

            function format_struct_data(children, structs_datas) {
              // 添加每个单位的颜色
              for (let prop in children) {
                let index = Math.floor(Math.random() * 20);
                let value = 1;
                if (children[prop].asset_num !== 0) {
                  value = children[prop].asset_num;
                }
                let tmp = {
                  name: children[prop].name,
                  children: [],
                  asset_num: children[prop].asset_num,
                  value: value
                }
                format_struct_data(children[prop].children, tmp.children);
                if (tmp.children.length === 0) {
                  delete tmp.children;
                }
                structs_datas.push(tmp);
              }

            }

            function showMenu(param) {
              // 可在此处添加右击操作内容
              //console.log('showMenu==============', param);
              let event = param.event;
              let pageX = event.offsetX;
              let pageY = event.offsetY;
             // console.log('showMenu========', pageX, pageY);

            }
            format_struct_data(info2.children, structs_datas);



            let option = {title: {
                text: '',
                subtext: '',
                left: 'leafDepth'
              },
              grid: {
                left: '0%',
                top:'0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
              },
              tooltip: {

                formatter: function(info) {
                 // console.log('tool------', info);
                  let asset_num = info.data.asset_num;
                  let name = info.name;
                  return [
                    '<h4>' + name + '</h4>',
                    '<div>消费次数：' + asset_num + '</div>',
                  ].join('\n');
                  // return [
                  //     '{name|' + name + '}',
                  //     '{basic| 资产数量：' + asset_num + '}',
                  // ].join('\n');
                },
                // rich: RICH, tooltip不支持富文本

              },

              series: [{
                name: '消费项目',
                type: 'treemap',
                visibleMin: 300,
                // data: format_struct_data(info2.children, structs_datas),
                data: structs_datas,
                leafDepth: 1,
                label: {
                  normal: {
                    show: true,
                    position: 'insideTopLeft',
                    formatter: function(a) {
                     // console.log('formatter==label=======', a);
                      //return '{name|' + a.name + '}' + "\n\n" + "{basic|平均价格 : " + a.data.asset_num  + '㎡/元}';

                    },
                    textStyle: {
                      // color: '',  label的字体颜色
                      fontSize: '18',
                      fontWeight: 'bold'
                    },
                    rich: RICH,

                  },
                },
                levels: [{
                  itemStyle: {
                    normal: {
                      borderWidth: 0,
                      gapWidth: 3,
                      borderColor:'#111'
                    }
                  }
                }, {
                  itemStyle: {
                    normal: {
                      gapWidth: 1,
                      borderColor:'#fff'
                    }
                  }
                }],
                breadcrumb: {
                  show: true,
                  // "height": 22,
                  left: "5%",
                  top: "0%",
                  emptyItemWidth: 25,
                  itemStyle: {
                    normal: {
                      color: "#fff",
                      borderColor: "rgba(13,25,33,0)",
                      borderWidth: 1,
                      shadowColor: "rgba(150,150,150,0)",
                      shadowBlur: 3,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      textStyle: {
                        color: "#000",
                        fontWeight: 'bold'
                      }
                    },
                    emphasis: {
                      textStyle: {}
                    }
                  }
                },
              }]};
            document.oncontextmenu = function() {
              return false;
            };
            chart.on('contextmenu', showMenu);
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
    width: 20%;
    height: 60%;
  }
</style>
