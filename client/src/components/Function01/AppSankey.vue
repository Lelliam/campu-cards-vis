<template>
  <div id="sankey_chart"></div>
</template>

<script>
    import * as d3 from 'd3'
    export default {
        name: "AppSankey",
        data(){
            return {
                data:{}
            }
        },
        mounted(){
            this.init_data_();
        },
        methods:{
            init_data_() {
                this.$http.get('query', {
                    params: {
                        sql: 'select * from cost_data_pro'
                    }
                })
                    .then(res => {

                        let nodes = [];
                        d3.nest().key(d=>d.major).entries(res.body).forEach(d=>{
                            nodes.push({name:d.key});
                        });
                        d3.nest().key(d=>d.address).entries(res.body).forEach(d=>{
                            nodes.push({name:d.key});
                        });

                        let links = [];

                        let data = d3.nest()
                            .key(d => d.major)
                            .entries(res.body)
                            .map(d => {
                                return {
                                    'major': d.key,
                                    'female': d3.nest().key(s => s.address).entries(d.values.filter(d=>d.sex === '女')),
                                    'male': d3.nest().key(s => s.address).entries(d.values.filter(d=>d.sex === '男'))
                                }
                            })
                            .forEach(d => {
                                d.female.forEach(s=>{
                                    links.push({
                                        "type": "female",
                                        "source": d.major,
                                        "target": s.key,
                                        "value": s.values.length
                                    });
                                });
                                // d.male.forEach(s=>{
                                //     console.log(d.major,s.key,s.values.length);
                                //     links.push({
                                //         "type": "male",
                                //         "source": d.major,
                                //         "target": s.key,
                                //         "value": s.values.length
                                //     });
                                // });
                            });

                        this.data.nodes = nodes;
                        this.data.links = links;

                        this.init_chart(this.data);
                    });
            },
            init_chart(data){

                let chart = this.$echarts.init(document.getElementById('sankey_chart'));

                let color = d3.schemeCategory10;

                let option =
                    {
                        series: [
                            {
                                type: "sankey",
                                left: '10%',
                                top: 20.0,
                                right: '10%',
                                bottom: 25.0,
                                data: data.nodes.map((d,i)=>{
                                    return {
                                        "name": d.name,
                                        "itemStyle": {
                                            "normal": {
                                                "color": color[i%10],
                                                "borderColor": color[i%10]
                                            }
                                        },
                                        label: {
                                            normal: {
                                                position:d.name.match(/18/)?'left':'right',
                                                textStyle: {
                                                    color: "rgba(0,0,0,0.7)",
                                                    fontFamily: "Arial",
                                                    fontSize: 10
                                                }
                                            }
                                        }
                                    }
                                }),
                                links: data.links.map(d=>{
                                    return {
                                        "source": d.source,
                                        "target": d.target,
                                        "value": d.value
                                    }
                                }),
                                lineStyle: {
                                    normal: {
                                        color: "source",
                                        curveness: 0.5
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: "#1f77b4",
                                        borderColor: "#1f77b4"
                                    }
                                },
                                tooltip: {
                                    trigger: "item"
                                }
                            }]
                    };

                chart.setOption(option);
            },
        }
    }
</script>

<style scoped>
  #sankey_chart{
    position: absolute;
    top: 1%;
    right: 10px;
    width: 30%;
    height: 65%;
  }
</style>
