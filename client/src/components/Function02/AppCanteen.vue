<template>
<div id="canteen"></div>
</template>

<script>
    export default {
        name: "AppCanteen",
        mounted() {
            this.Draw(1);
        },
        methods:{
            Draw(data){
                let chart = this.$echarts.init(document.getElementById('canteen'));

                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['第一食堂','第二食堂','第三食堂','第四食堂','第五食堂']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[

                                {value:20000, name:'第一食堂'},
                                {value:20000, name:'第二食堂'},
                                {value:20000, name:'第三食堂'},
                                {value:20000, name:'第四食堂'},
                                {value:20000, name:'第五食堂'}
                            ]
                        }
                    ]
                };
                chart.setOption(option);

            },
        }
    }

</script>

<style scoped>
  #canteen{
    position: absolute;
    top:0;
    left: 20%;
    width: 60%;
    height: 60%;
    background-color: #ffde77;
  }
</style>
