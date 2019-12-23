<template>
<div id="main_01"></div>
</template>

<script>
    export default {
        name: "AppMain",
      mounted() {
          this.Main();
      },
      methods:{
          Main(){
            let echarts = this.$echarts;

            let chart = this.$echarts.init(document.getElementById('main_01'));

            let option = {
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                x: 'left',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
              },
              series: [
                //第一排
                {
                  name:"地点",
                  center: ['5%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335,name:'第一食堂'},
                    {value:679,name:'第二食堂'},
                    {value:1548,name:'第三食堂'}
                  ]
                },
                {
                  name:'性别',
                  center: ['5%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {name:'男',value:335},
                    {name:'女',value:310},
                  ]
                },{
                  center: ['15%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['15%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['25%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['25%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['35%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['35%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['45%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['45%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['55%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['55%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['65%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['65%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['75%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['75%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['85%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['85%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['95%', '13%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['95%', '13%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },
                //第二排
                {
                  center: ['5%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['5%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['15%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['15%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['25%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['25%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['35%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['35%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['45%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['45%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['55%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['55%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['65%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['65%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['75%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['75%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['85%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['85%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['95%', '38%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['95%', '38%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },
                //第三排
                {
                  center: ['5%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['5%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['15%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['15%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['25%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['25%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['35%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['35%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['45%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['45%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['55%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['55%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['65%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['65%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['75%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['75%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['85%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['85%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['95%', '63%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['95%', '63%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },
                //第四排
                {
                  center: ['5%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['5%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['15%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['15%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['25%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['25%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['35%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['35%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['45%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['45%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['55%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['55%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['65%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['65%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['75%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['75%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['85%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['85%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                },{
                  center: ['95%', '88%'],
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '18%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:679},
                    {value:1548}
                  ]
                },
                {
                  center: ['95%', '88%'],
                  type:'pie',
                  radius: ['18%', '20%'],
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335},
                    {value:310},
                    {value:234},
                    {value:135},
                    {value:1048},
                    {value:251},
                    {value:147},
                    {value:102}
                  ]
                }
              ]
            };
          chart.setOption(option);
          }
      }
    }
</script>

<style scoped>
  #main_01{
    position: absolute;
    top:0;
    left: 20%;
    width: 60%;
    height: 60%;
    background-color: #ffde77;
  }
</style>
