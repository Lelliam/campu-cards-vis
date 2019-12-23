<template>
<div id="matrix_tree"></div>
</template>

<script>
    export default {
        name: "AppMatrixTree",
      mounted() {
          this.MatrixTree();
      },
      methods: {
          MatrixTree(){
            let echarts = this.$echarts;

            let chart = this.$echarts.init(document.getElementById('matrix_tree'));

            let option = {series: [{
                type: 'treemap',
                data: [{
                  name: 'nodeA',            // First tree
                  value: 10,
                  children: [{
                    name: 'nodeAa',       // First leaf of first tree
                    value: 4
                  }, {
                    name: 'nodeAb',       // Second leaf of first tree
                    value: 6
                  }]
                }, {
                  name: 'nodeB',            // Second tree
                  value: 20,
                  children: [{
                    name: 'nodeBa',       // Son of first tree
                    value: 20,
                    children: [{
                      name: 'nodeBa1',  // Granson of first tree
                      value: 20
                    }]
                  }]
                }]
              }]};

            chart.setOption(option);
          }
        }
    }
</script>

<style scoped>
  #matrix_tree{
    position: absolute;
    top:0;
    right: 0;
    width: 20%;
    height: 60%;
    background-color: #3e9eff;
  }
</style>
