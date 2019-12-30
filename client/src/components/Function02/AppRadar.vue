<template>
<div id="radar"></div>
</template>

<script>
    export default {
        name: "AppRadar",
        mounted() {
            this.Draw(1);
        },
        methods:{
            Draw(data){
                let chart = this.$echarts.init(document.getElementById('radar'));
                let option = {
                    title: {
                        text: '各食堂各时刻就餐人数'
                    },
                    tooltip: {},

                    radar: {
                         shape: 'circle',

                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 4]
                            }
                        },
                        indicator: [
                            { name: '0', max: 10000},
                            { name: '21', max: 10000},
                            { name: '18', max: 10000},
                            { name: '15', max: 10000},
                            { name: '12', max: 10000},
                            { name: '9', max: 10000},
                            { name: '6', max: 10000},
                            { name: '3', max: 10000}
                        ]
                    },
                    series: [{
                        type: 'radar',
                        //areaStyle: {normal: {}},

                        //s数据为每个时刻每个食堂的就餐人数
                        data : [
                            {
                                value : [9500, 9500, 9500, 9500, 9500, 9500,9500,9500],
                                name : '第一食堂'
                            },
                            {
                                value : [8000, 8000, 8000, 8000, 8000, 8000,8000,8000],
                                name : '第二食堂'
                            },{
                                value : [7000, 7000, 7000, 7000, 7000, 7000,7000,7000],
                                name : '第三食堂'
                            },{
                                value : [6000, 6000, 6000, 6000, 6000, 6000,6000,6000],
                                name : '第四食堂'
                            },{
                                value : [5000, 5000, 5000, 5000, 5000, 5000,5000,5000],
                                name : '第五食堂'
                            },{
                                value : [4000, 4000, 4000, 4000, 4000, 4000,4000,4000],
                                name : '教师食堂'
                            }
                        ]
                    }]
                };
                chart.setOption(option);
            },
        }
    }
</script>

<style scoped>
  #radar{
    position: absolute;
    bottom:0;
    right: 0;
    width: 20%;
    height: 40%;
   // background-color: #3685ff;
  }
</style>
