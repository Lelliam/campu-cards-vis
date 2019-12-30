<template>
   <div id="info"></div>
</template>


<script>
  export default {
    name: "AppInfo",
    mounted() {
      this.init();
    },
    methods:{
      init(){
        let chart = this.$echarts.init(document.getElementById('info'));

        let option = {}
    chart.setOption(option);
  }
  }
  }
</script>

<style scoped>
  #info{
    position: absolute;
    top:0;
    left: 0;
    width: 25%;
    height: 35%;

  }
</style>
