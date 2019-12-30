<template>
<div id="major"></div>
</template>

<script>
    export default {
        name: "AppMajor",
        mounted() {
            this.Draw(1);
        },
        methods:{
            Draw(data){
                let chart = this.$echarts.init(document.getElementById('major'));

                let option = {
                    backgroundColor: '#e6eefc',

                    title: {
                        top: '0',
                        left: 'center',
                        text: '专业份数',
                        textStyle: {
                            align: 'center',
                            color: '#060204',
                            fontSize: 15
                        }

                    },

                    tooltip: {},
                    animationDurationUpdate: function(idx) {
                        // 越往后的数据延迟越大
                        return idx * 100;
                    },
                    animationEasingUpdate: 'bounceIn',
                    color: ['#ff598f', '#3e33ff', '#3cff4c'],
                    series: [{
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: 500,
                            edgeLength: 10
                        },
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        data: [  {
                            "name": "专业1",
                            "value": 847,
                            "symbolSize": 100,
                            "draggable": true,
                            "itemStyle": {
                                "normal": {
                                    "borderColor": "rgb(137, 37, 21)",
                                    "borderWidth": 4,
                                    "shadowBlur": 100,
                                    "shadowColor": "rgb(137, 37, 21)",
                                    "color": "rgb(137, 37, 21)"
                                }
                            }
                        }, {
                            "name": "专业2",
                            //值从外界引入
                            "value": 582,
                            "symbolSize": 100,
                            "draggable": true,
                            "itemStyle": {
                                "normal": {
                                    "borderColor": "rgb(131,252,201)",
                                    "borderWidth": 4,
                                    "shadowBlur": 100,
                                    "shadowColor": "rgb(131,252,201)",
                                    "color": "rgb(131,252,201)"
                                }
                            }
                        }]
                    }]
                };


                chart.setOption(option);
            },
        }
    }
</script>

<style scoped>
  #major{
    position: absolute;
    top:30%;
    left: 0%;
    width: 20%;
    height: 30%;
    /*background-color: #42ffca;*/
  }
</style>
