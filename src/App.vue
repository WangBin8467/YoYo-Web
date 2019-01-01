<template>
  <div id="app">
    <Baselayout>
      <router-view/>
    </Baselayout>
  </div>
</template>

<script>
import Baselayout from './views/layout/BaseLayout';

export default {
  name: 'App',
  components:{
    Baselayout,
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}
</style>
