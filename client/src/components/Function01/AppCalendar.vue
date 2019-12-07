<template>
  <div id="calendar_chart"></div>
</template>

<script>
    export default {
        name: "AppCalendar",
        mounted(){
            this.init_chart();
        },
        methods:{
            init_chart(){
                let getVirtulData = (year)=> {
                    let echarts = this.$echarts;
                    year = year || '2017';
                    let date = +echarts.number.parseDate(year + '-01-01');
                    let end = +echarts.number.parseDate((+year + 1) + '-01-01');
                    let dayTime = 3600 * 24 * 1000;
                    let data = [];
                    for (let time = date; time < end; time += dayTime) {
                        data.push([
                            echarts.format.formatTime('yyyy-MM-dd', time),
                            Math.floor(Math.random() * 10000)
                        ]);
                    }
                    return data;
                };

                let data = getVirtulData(2016);


                let chart = this.$echarts.init(document.getElementById('calendar_chart'));

                let option = {
                    //backgroundColor: '#404a59',
                    title: {
                        top: 30,
                        text: '2016年某人每天的步数',
                        subtext: '数据纯属虚构',
                        left: 'center',
                        textStyle: {
                            color: '#7e7e7e'
                        }
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    legend: {
                        top: '30',
                        left: '100',
                        data:['步数', 'Top 12'],
                        textStyle: {
                            color: '#7e7e7e'
                        }
                    },
                    calendar: [{
                        top: 100,
                        left: 'center',
                        range: ['2016-01-01', '2016-06-30'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#7e7e7e',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        yearLabel: {
                            formatter: '{start}  1st',
                            textStyle: {
                                color: '#7e7e7e'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#cbcbcb',
                                borderWidth: 1,
                                borderColor: '#111'
                            }
                        }
                    }],
                    series : [
                        {
                            name: '步数',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            data: data,
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            itemStyle: {
                                normal: {
                                    color: '#dd634c'
                                }
                            }
                        },
                        {
                            name: '步数',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data,
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            itemStyle: {
                                normal: {
                                    color: '#dd4546'
                                }
                            }
                        },
                        {
                            name: 'Top 12',
                            type: 'effectScatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data.sort(function (a, b) {
                                return b[1] - a[1];
                            }).slice(0, 12),
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: '#dd4546',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        },
                        {
                            name: 'Top 12',
                            type: 'effectScatter',
                            coordinateSystem: 'calendar',
                            data: data.sort(function (a, b) {
                                return b[1] - a[1];
                            }).slice(0, 12),
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: '#dd4546',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        }
                    ]
                };

                chart.setOption(option);
            }
        }
    }
</script>

<style scoped>
  #calendar_chart{
    position: absolute;
    top: 1%;
    left: 10px;
    width: 34%;
    height: 30%;
  }
</style>
