<template>
  <div id="test">
  </div>
</template>

<script>
    export default {
        name: "APPTest",
        mounted() {
            this.draw_chart()
        },
        methods:{
            draw_chart(){
                let test_chart = this.$echarts.init(document.getElementById('test'));

                let  colorList=['#f55f9c', '#6879d4'];
                let sportsIcon = {
                    'a':'http://localhost:3000/images/test.png',
                    'b':'http://localhost:3000/images/test.png',
                };
                let option = {
                    title: {
                        text: '80',
                        //subtext: '总平均值(分)',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontSize:30,
                            fontWeight:'normal',
                            color: ['#333']
                        },
                        subtextStyle: {
                            color: '#666',
                            fontSize: 16
                        },
                    },
                    grid: {
                        bottom: 150,
                        left: '10%',
                        right: '10%'
                    },
                    legend: {
                        show:true,
                        orient: 'vertical',
                        top: "5%",
                        right: "5%",
                        textStyle: {
                            color: '#282828',
                            fontSize: 10,
                        },
                        icon: 'roundRect'
                    },
                    series: [
                        // 主要展示层的
                        {
                            radius: ['25%', '51%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 15,
                                    length2: 120,
                                    lineStyle: {
                                        color: '#d3d3d3'
                                    },
                                    align: 'right'
                                },
                                color: "#000",
                                emphasis: {
                                    show: true
                                }
                            },
                            label:{
                                normal:{
                                    formatter: function(params){
                                        let str = '';
                                        switch(params.name){
                                            case '体育技能':str = '{rate|'+params.value+'%}';break;
                                            case '体育行为':str = '{rate|'+params.value+'%}';break;
                                        }
                                        return str
                                    },
                                    padding: [10, -110],
                                    height: 60,
                                    rich: {
                                        a: {
                                            width:38,
                                            height:38,
                                            lineHeight: 50,
                                            backgroundColor: {
                                                image: sportsIcon.a
                                            },
                                            align: 'left'
                                        },
                                        b: {
                                            width:29,
                                            height:45,
                                            lineHeight: 50,
                                            backgroundColor: {
                                                image: sportsIcon.b
                                            },
                                            align: 'left'
                                        },
                                        nameStyle: {
                                            fontSize: 10,
                                            color: "#555",
                                            align: 'left'
                                        },
                                        rate: {
                                            fontSize: 20,
                                            color: "#4ab8ab",
                                            align: 'left'
                                        }
                                    }
                                }
                            },
                            data: [
                                {value:17, name:'体育技能'},
                                {value:23, name:'体育行为'}]
                        },
                        // 边框的设置
                        {
                            radius: ['47%', '51%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color:'rgba(250,250,250,0.5)'
                                }
                            },
                            data: [{
                                value: 1,
                            }],
                        }
                    ]
                };
                test_chart.setOption(option);
            }
        }
    }
</script>

<style scoped>
  #test{
    width: 400px;
    height: 400px;
  }
</style>
