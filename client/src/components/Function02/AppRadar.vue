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
                        text: '基础雷达图'
                    },
                    tooltip: {},
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: '销售（sales）', max: 6500},
                            { name: '管理（Administration）', max: 16000},
                            { name: '信息技术（Information Techology）', max: 30000},
                            { name: '客服（Customer Support）', max: 38000},
                            { name: '研发（Development）', max: 52000},
                            { name: '市场（Marketing）', max: 25000},
                            { name: '陈浩（sales）', max: 3800},
                            { name: '陈佳文（sales）', max: 4300}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000,1500,4200],
                                name : '预算分配（Allocated Budget）'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000,1400,3200],
                                name : '实际开销（Actual Spending）'
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
    background-color: #3685ff;
  }
</style>
