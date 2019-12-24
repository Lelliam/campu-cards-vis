<template>
  <div id="revenue"></div>
</template>

<script>
    export default {
        name: "AppRevenue",
        mounted() {
            this.Draw(1);
        },
        methods:{
            Draw(data){
                let chart = this.$echarts.init(document.getElementById('revenue'));
                let option = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎',
                            '陈浩工作','刘亮工作','郑志文工作']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            data:[2500, 2500, 2500, 2500, 2500, 2500, 2500]
                        },
                        {
                            name:'陈浩工作',
                            type:'line',
                            stack: '总量',
                            data:[2000, 2000, 2000, 2000, 2000, 2000, 2000]
                        },
                        {
                            name:'刘亮工作',
                            type:'line',
                            stack: '总量',
                            data:[1000, 1000,1000,1000, 1000, 1000, 1000]
                        },
                        {
                            name:'郑志文工作',
                            type:'line',
                            stack: '总量',
                            data:[400, 400, 400,400, 400, 400, 400]
                        }
                    ]
                };

                chart.setOption(option);
            },
        }
    }
</script>

<style scoped>
  #revenue{
    position: absolute;
    top:0;
    right: 0;
    width: 20%;
    height: 60%;
    background-color: #1ac7ff;
  }
</style>
