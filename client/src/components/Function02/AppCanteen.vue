<template>
  <div id="canteen"></div>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: "AppCanteen",
        data(){
          return{
            data_One:[],
            data_Two:[],
            data_Three:[],
            data_Four:[],
            data_Five:[],
            data_Teacher:[]
          }
        },
        mounted() {
            //this.Draw();
          this.Init();
        },
        methods:{
          Init(){
            this.$http.get('query',{params:{
              sql:`select Dept,TermNo,Money from cost_pro`
              }}).then(res=>{

              let Dept = [
                "第一食堂",
                "第二食堂",
                "第三食堂",
                "第四食堂",
                "第五食堂",
                "教师食堂"
              ];
              let One= res.body.filter(d=>Dept[0].includes(d.Dept));
              let Two = res.body.filter(d=>Dept[1].includes(d.Dept));
              let Three = res.body.filter(d=>Dept[2].includes(d.Dept));
              let Four = res.body.filter(d=>Dept[3].includes(d.Dept));
              let Five = res.body.filter(d=>Dept[4].includes(d.Dept));
              let Teacher = res.body.filter(d=>Dept[5].includes(d.Dept));
              this.data_One = d3.nest().key(d => d.TermNo).entries(One).map(d => {
                return {value: d.values, name: d.key};
              })
              this.data_Two = d3.nest().key(d => d.TermNo).entries(Two).map(d => {
                return {value: d.values, name: d.key};
              })
              this.data_Three = d3.nest().key(d => d.TermNo).entries(Three).map(d => {
                return {value: d.values, name: d.key};
              })
              this.data_Four = d3.nest().key(d => d.TermNo).entries(Four).map(d => {
                return {value: d.values, name: d.key};
              })
              this.data_Five = d3.nest().key(d => d.TermNo).entries(Five).map(d => {
                return {value: d.values, name: d.key};
              })
              this.data_Teacher = d3.nest().key(d => d.TermNo).entries(Teacher).map(d => {
                return {value: d.values, name: d.key};
              })
              //console.log(this.data_Teacher[0].value)
              this.Draw(this.data_One,this.data_Two,this.data_Three,this.data_Four,this.data_Five,this.data_Teacher);
            })
          },
            Draw(data_One, data_Two, data_Three, data_Four, data_Five, data_Teacher){
                //console.log(this.data_Teacher)
                let myChart = this.$echarts.init(document.getElementById('canteen'));
                let teacher = []
              console.log(data_Teacher[0].value)
                function set_teacher(data_Teacher){
                  for (let i in data_Teacher)
                  {
                    for (let j in data_Teacher[i].value){
                      teacher.push({name:data_Teacher[i].name,value:data_Teacher[i].value[j].Money})
                    }
                  }
                  //console.log(teacher[0].value)
                }
              set_teacher(data_Teacher);
              let teacher_Result = {}
              for(let i = 0;i<teacher.length;i++){
                if(teacher_Result[teacher[i].name]){
                  teacher_Result[teacher[i].name]+=parseFloat(teacher[i].value);
                }else{
                  teacher_Result[teacher[i].name]=parseFloat(teacher[i].value);
                }
              }
              console.log(teacher_Result)

              let keyvalue=[];
              for(let key in teacher_Result){
                keyvalue.push({name:key,value:teacher_Result[key]})
              }
              console.log(keyvalue)


                let  data = {
                    title: '**省',
                    dataSex: [{
                        // name: '',
                        value: '100.00',
                    },
                        {
                            //  name: '',
                            value: '300.00',
                        },{
                            //name: '',
                            value: '200.00',
                        }],
                    dataAge: [{
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }],
                    dataHostype: [{
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }],
                    dataDis: [{
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }, {
                        name: '',
                        value: '200.00'
                    }],
                    dataCH: [{
                        name: '',
                        value: '800.00'
                    }, {
                        name: '',
                        value: '100.00'
                    }, {
                        name: '',
                        value: '100.00'
                    }, {
                        name: '',
                        value: '100.00'
                    }, {
                        name: '',
                        value: '100.00'
                    }, {
                        name: '',
                        value: '100.00'
                    }],
                    dataLL: keyvalue
                };
                let option = {
                    // backgroundColor: '#05274C',
                    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],

                    title: [{
                        top: '20%',
                        text: '第一食堂',
                        textStyle: {
                            color: '#3494BD',
                            fontSize: 18,
                            align: 'center',
                        },
                        left: '0%',//标题的位置
                    },
                        {
                            top: '20%',
                            text:'第二食堂',
                            textStyle: {
                                color: '#3494BD',
                                fontSize: 18,
                                align: 'center',
                            },
                            left: '32%',
                        }, {
                            top: '20%',
                            text:'第三食堂',
                            textStyle: {
                                color: '#3494BD',
                                fontSize: 18,
                                align: 'center',
                            },
                            left: '54%',
                        },
                        {
                            top: '80%',
                            text: '第四食堂',
                            textStyle: {
                                color: '#3494BD',
                                fontSize: 18,
                                align: 'center',
                            },
                            left: '50%',

                        },{
                            top: '8' +
                                '' +
                                '0%',
                            text: '第五食堂',
                            textStyle: {
                                color: '#3494BD',
                                fontSize: 18,
                                align: 'center',
                            },
                            left: '81%',
                        },{
                            top: '20%',
                            text: '教师食堂',
                            textStyle: {
                                color: '#3494BD',
                                fontSize: 18,
                                align: 'center',
                            },
                            left: '81%',
                        }
                    ],




                    series: [
                        //吉林省用药年龄分布 begin

                        {
                            //name: '用药性别数量',
                            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
                            type: 'pie',
                            radius: ['30%', '25%'],
                            center: ['15%', '20%'],
                            labelLine: {

                                normal: {
                                    show:false,
                                    //length: 25,
                                    // length2: 65,
                                    lineStyle: {
                                        // color: '#41B3DC',
                                        //type: 'solid'
                                    }
                                }


                            },

                            label: {
                                normal: {
                                    show:false,
                                    //formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0, -80],
                                    height: 70,
                                    fontSize: 13,
                                    align: 'center',
                                    color: '#3494BD',
                                    rich: {
                                        b: {
                                            fontSize: 13,
                                            lineHeight: 5,
                                            color: '#41B3DC'
                                        }

                                    }
                                }
                            },
                            data: data.dataAge,
                        },
                        //end
                        //吉林省用药性别分布 begin
                        {
                            //name: '用药性别数量',
                            color: ['#76FBC0', '#2AC9FD','red'],
                            type: 'pie',
                            radius: ['20%', '15%'],
                            center: ['50%', '20%'],
                            labelLine: {
                                normal: {
                                    show:false,
                                    //length: 100,
                                    //length2: 65,
                                    lineStyle: {
                                        // color: '#41B3DC',
                                        type: 'solid'
                                    }
                                }

                            },
                            label: {
                                normal: {
                                    //show:false,
                                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0, -90],
                                    height: 70,
                                    fontSize: 13,
                                    align: 'center',
                                    color: '#3494BD',
                                    rich: {
                                        b: {
                                            fontSize: 13,
                                            lineHeight: 5,
                                            color: '#41B3DC'
                                        }

                                    }
                                }
                            },
                            data: data.dataSex,
                        },
                        //end
                        //吉林省用药量机构类别占比 begin
                        {
                            //name: '用药性别数量',
                            color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
                            type: 'pie',
                            radius: ['16%', '23%'],
                            center: ['30%', '60%'],
                            labelLine: {
                                normal: {
                                    show:false,
                                    // length: 25,
                                    //length2: 65,
                                    lineStyle: {
                                        // color: '#41B3DC',
                                        type: 'solid'
                                    }
                                }

                            },
                            label: {
                                normal: {
                                    //show:false,
                                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0, -80],
                                    height: 75,
                                    fontSize: 13,
                                    align: 'center',
                                    color: '#3494BD',
                                    rich: {
                                        b: {
                                            fontSize: 13,
                                            lineHeight: 5,
                                            color: '#41B3DC'
                                        }

                                    }
                                }
                            },
                            data: data.dataHostype,
                        },
                        //end
                        //药品治疗疾病类型占比 begin
                        {
                            //name: '用药性别数量',
                            color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
                            type: 'pie',
                            radius: ['16%', '23%'],
                            center: ['88%', '60%'],
                            labelLine: {
                                normal: {
                                    show:false,
                                    // length: 25,
                                    //length2: 65,
                                    lineStyle: {
                                        // color: '#41B3DC',
                                        type: 'solid'
                                    }
                                }

                            },
                            label: {
                                normal: {
                                    // show:false,
                                    //formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0, -80],
                                    height: 75,
                                    fontSize: 13,
                                    align: 'center',
                                    color: '#3494BD',
                                    rich: {
                                        b: {
                                            fontSize: 13,
                                            lineHeight: 5,
                                            color: '#41B3DC'
                                        }

                                    }
                                }
                            },
                            data: data.dataDis,
                        },

                        //end
                        {
                            //name: '用药性别数量',
                            color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
                            type: 'pie',
                            radius: ['16%', '23%'],
                            center: ['62%', '60%'],
                            labelLine: {
                                normal: {
                                    show:false,
                                    // length: 25,
                                    //length2: 65,
                                    lineStyle: {
                                        // color: '#41B3DC',
                                        type: 'solid'
                                    }
                                }

                            },
                            label: {
                                normal: {
                                    //show:false,
                                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0, -80],
                                    height: 75,
                                    fontSize: 13,
                                    align: 'center',
                                    color: '#3494BD',
                                    rich: {
                                        b: {
                                            fontSize: 13,
                                            lineHeight: 5,
                                            color: '#41B3DC'
                                        }

                                    }
                                }
                            },
                            data: data.dataCH,
                        },
                        //end
                        {
                            //name: '用药性别数量',
                            color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
                            type: 'pie',
                            radius: ['16%', '23%'],
                            center: ['80%', '16%'],
                            labelLine: {
                                normal: {
                                    show:false,
                                    // length: 25,
                                    //length2: 65,
                                    lineStyle: {
                                        // color: '#41B3DC',
                                        type: 'solid'
                                    }
                                }

                            },
                            label: {
                                normal: {
                                    //show:false,
                                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0, -80],
                                    height: 75,
                                    fontSize: 13,
                                    align: 'center',
                                    color: '#3494BD',
                                    rich: {
                                        b: {
                                            fontSize: 13,
                                            lineHeight: 5,
                                            color: '#41B3DC'
                                        }

                                    }
                                }
                            },
                            data: data.dataLL,
                        },
                        //end

                    ]
                };

                myChart.setOption(option);

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
  }
</style>
