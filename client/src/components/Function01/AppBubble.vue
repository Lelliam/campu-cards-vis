<template>
  <div id="bubble_chart"></div>
</template>

<script>
    import * as d3 from 'd3'
    export default {
        name: "AppBubble",
        data(){
            return {

            }
        },
        mounted(){
            this.init_data_major();
        },
        methods:{
            init_data_major(){
                this.$http.get('query', {
                    params: {
                        sql: 'select * from students'
                    }
                }).then(res=>{
                    //console.log(res.body);
                    this.init_bubble(d3.nest().key(d=>d.major).entries(res.body).map(d=>{
                        return {
                            major:d.key,
                            female: d.values.filter(s=>s.sex === '女').length,
                            male: d.values.filter(s=>s.sex === '男').length,
                        };
                    }));
                });
            },
            init_bubble(data){

                let config = {
                    width:document.getElementById('bubble_chart').clientWidth,
                    height:document.getElementById('bubble_chart').clientHeight
                };

                let svg = d3.select('#bubble_chart').append('svg')
                    .attr('width',config.width)
                    .attr('height',config.height);

                let pie = d3.pie().value(d=>d.value);

                let simulation = d3.forceSimulation()
                    .nodes(data);

                simulation
                    .force('charge_force', d3.forceManyBody().strength(-1))
                    .force("collide",d3.forceCollide().radius(35))
                    .force('center_force', d3.forceCenter(config.width / 2, config.height / 2))
                    .on('tick', tickAction);

                let nodes = svg.selectAll('node_g')
                    .data(data)
                    .enter()
                    .append('g')
                    .attr('class','node_g');

                nodes.append('circle')
                    .attr('stroke',"#6c6967")
                    .attr('fill',"#6879d4")
                    .attr('fill-opacity',.2)
                    .attr('r', d=>{
                        return (d.female+d.male)/5
                    })
                    .on('mouseover',function (d) {
                        d3.select('body').style('cursor','pointer');
                        d3.select(this.parentNode).selectAll('path').attr('opacity',0.7);
                    })
                    .on('mouseout',function (d) {
                        d3.select('body').style('cursor','');
                        d3.select(this.parentNode).selectAll('path').attr('opacity',0.3);
                    })
                    .call(d3.drag()
                        .on("start", dragstarted)//d3.drag() 创建一个拖曳行为
                        .on("drag", dragged)
                        .on("end", dragended));

                nodes.append("title")//此处加入title标签
                    .text(d=>d.major)

                nodes.selectAll('g')
                    .data(d=> pie([
                        {name:'male',value:d.male,total:d.male+d.female},
                        {name:'female',value:d.female,total:d.male+d.female}]))
                    .enter()
                    .append('path')
                    .attr('fill',d=>{
                        return d.data.name === 'male'?'#218cff':'#ff3fb0';
                    })
                    .attr('opacity',0.3)
                    .attr('d',d=> d3.arc()
                        .innerRadius(d.data.total/5-3)
                        .outerRadius(d.data.total/5+3)(d)
                    );

                // let legend = svg.append('g');
                //
                // legend.selectAll('legend')
                //     .data(data)
                //     .enter()
                //     .append('circle')
                //     .attr('cx',config.width-80)
                //     .attr('cy',(d,i)=>15+i*15)
                //     .attr('r',4)
                //     .attr('fill',"#6879d4")
                //     .attr('fill-opacity',.6);
                //
                // legend.selectAll('legend_text')
                //     .data(data)
                //     .enter()
                //     .append('text')
                //     .attr('class','legend_text')
                //     .attr('x',config.width-70)
                //     .attr('y',(d,i)=>18+i*15)
                //     .text(d=>d.major);

                function dragstarted(d) {
                    if (!d3.event.active) simulation.alphaTarget(0.3).restart();//设置目标α
                    d3.event.sourceEvent.stopPropagation();
                    d.fx = d.x;
                    d.fy = d.y;
                }

                function dragged(d) {
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                }

                function dragended(d) {
                    if (!d3.event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }

                function tickAction () {
                    nodes
                        .attr('transform',d=>`translate(${d.x},${d.y})`)
                }
            }
        }
    }
</script>

<style scoped>
  #bubble_chart{
    position: absolute;
    top: 1%;
    left: 33%;
    width: 36%;
    height: 65%;
  }
  .legend_text{
    font-family: Helvetica Neue;
    font-size:10px;
    fill: #6c6967;
  }
</style>
