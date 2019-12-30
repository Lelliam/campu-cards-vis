<template>
<div id="meal"></div>
</template>

<script>
    export default {
        name: "AppMeal",
        mounted(){
            this.Draw(1);
        },
        methods:{
            Draw(data){
                let chart = this.$echarts.init(document.getElementById('meal'));

                let option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','教师食堂']
                    },
                    //调整坐标轴得位置
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['早','中','晚']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'第一食堂',
                            //把柱状图分类，同一类型的可以叠加
                           //stack: '1',
                            type:'bar',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'第二食堂',
                            type:'bar',
                            //stack: '1',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'第三食堂',
                            type:'bar',
                          //stack: '1',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'第四食堂',
                            type:'bar',
                           // stack: '1',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'第五食堂',
                           //stack: '1',
                            type:'bar',
                            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                            /*markLine : {
                                lineStyle: {
                                    normal: {
                                        type: 'dashed'
                                    }
                                },
                                data : [
                                    [{type : 'min'}, {type : 'max'}]
                                ]
                            }*/
                        },
                        {
                            name:'教师食堂',
                            type:'bar',
                            barWidth : 5,
                            //stack: '1',
                            data:[620, 732, 701, 734, 1090, 1130, 1120]
                        },

                    ]
                };
                chart.setOption(option);
            },

        }
    }
</script>

<style scoped>
  #meal{
    position: absolute;
    top:60%;
    left: 0%;
    width: 20%;
    height: 40%;
//    background-color: #1ac7ff;
  }
</style>
