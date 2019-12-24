<template>
<div id="sex"></div>
</template>

<script>
    export default {
        name: "AppSex",
        mounted() {
            this.Draw(1);
        },
        methods:{
            Draw(data){
                let chart = this.$echarts.init(document.getElementById('sex'));

                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['男','女']
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

                                {value:135, name:'男'},
                                {value:1548, name:'女'}
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
  #sex{
    position: absolute;
    top:0;
    left: 0;
    width: 20%;
    height: 30%;
    background-color: #5eff7c;
  }
</style>
