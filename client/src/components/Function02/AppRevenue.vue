<template>
  <div id="revenue"></div>
</template>

<script>
  export default {
    name: "AppRevenue",
    mounted() {
      this.Draw(1);
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get('canteen_all').then(res=>{
          console.log(res.data);//
        })
      },
      Draw(data){
        let chart = this.$echarts.init(document.getElementById('revenue'));
        data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],
          ["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],
          ["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],
          ["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],
          ["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],
          ["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],
          ["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],
          ["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],
          ["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],
          ["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],
          ["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],
          ["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],
          ["2000-07-23",55],["2000-07-24",60]];

        let dateList = data.map(function (item) {
          return item[0];
        });
        let valueList = data.map(function (item) {
          return item[1];
        });

        let option = {

          // Make gradient line here
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
          },{
            show: false,
            type: 'continuous',
            seriesIndex: 2,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
          },
            {
              show: false,
              type: 'continuous',
              seriesIndex: 3,
              dimension: 0,
              min: 0,
              max: dateList.length - 1
            },
            {
              show: false,
              type: 'continuous',
              seriesIndex: 3,
              dimension: 0,
              min: 0,
              max: dateList.length - 1
            },
            {
              show: false,
              type: 'continuous',
              seriesIndex: 3,
              dimension: 0,
              min: 0,
              max: dateList.length - 1
            }],

          tooltip: {
            trigger: 'axis'
          },
          xAxis: [{
            data: dateList
          }, {
            data: dateList,
            gridIndex: 1
          },{
            data: dateList,
            gridIndex: 2
          },{
            data: dateList,
            gridIndex: 3
          },{
            data: dateList,
            gridIndex: 4
          },{
            data: dateList,
            gridIndex: 5
          }],
          yAxis: [{
            splitLine: {show: false}
          }, {
            splitLine: {show: false},
            gridIndex: 1
          },{
            splitLine: {show: false},
            gridIndex: 2
          },{
            splitLine: {show: false},
            gridIndex: 3
          },{
            splitLine: {show: false},
            gridIndex: 4
          },{
            splitLine: {show: false},
            gridIndex: 5
          }],
          grid: [{
            bottom: '85%'
          }, {
            top: '85%'
          },{
            top: '25%',
            bottom: '65%'
          },{
            top: '40%',
            bottom: '50%'
          },{
            top: '55%',
            bottom: '35%'
          },{
            top: '70%',
            bottom: '20%'
          }],
          series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
          }, {
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
          },{
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 2,
            yAxisIndex: 2
          },{
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 3,
            yAxisIndex: 3
          },{
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 4,
            yAxisIndex: 4
          },{
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 5,
            yAxisIndex: 5
          }]
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
  }
</style>
