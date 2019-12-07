<template>
  <div id="function01">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '89vh'}">
      <div id="container">
        <AppCalendar></AppCalendar>
        <AppBubble></AppBubble>
        <AppSankey></AppSankey>
        <AppTimeLine></AppTimeLine>
      </div>
    </Card>
  </div>
</template>

<script>
  import AppBubble from "./Function01/AppBubble";
  import AppSankey from "./Function01/AppSankey";
  import AppTimeLine from "./Function01/AppTimeLine";
  import AppCalendar from "./Function01/AppCalendar";
    export default {
        name: "AppFunction01",
        mounted(){
            //this.init_layout();
        },
        methods:{
            init_layout(){
                let container = document.getElementById('container');
                let card = document.getElementById('card');
                container.style.width = card.clientWidth*0.985 + 'px';
                container.style.height = card.clientHeight*0.965 + 'px';
            }
        },
        components:{
            AppBubble,
            AppSankey,
            AppTimeLine,
            AppCalendar
        }
    }
</script>

<style scoped>
  #function01{
    position: relative;
    width: 100%;
    height: 100%;
  }

  #container{
    position: absolute;
    width: 100%;
    height: 100%;
  }


</style>
