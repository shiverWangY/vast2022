<template>

  <mainView
    :width = 'window_width * 0.55' 
    :height = 'window_height * 0.8 - 20 '
    :top = '10'
    :left = '10'
  />

  <controller 
    :width = 'window_width * 0.55' 
    :height = 'window_height * 0.2 '
    :top = 'window_height * 0.8'
    :left = '10'
  /> 

  <calendar
    :width = 'window_width * 0.21' 
    :height = 'window_height * 0.35 + 10 '
    :top = '10'
    :left = 'window_width * 0.55 + 20'
  />

  <radar
    :width = 'window_width * 0.21' 
    :height = 'window_height * 0.35 + 10 '
    :top = '10'
    :left = 'window_width * 0.76 + 30'
  />

  <relationship
    :width = 'window_width * 0.42 + 10' 
    :height = 'window_height * 0.28 + 10 '
    :top = 'window_height * 0.35 + 30'
    :left = 'window_width * 0.55 + 20'
  />

  <baseView
    :width = 'window_width * 0.42 + 10' 
    :height = 'window_height * 0.37 - 50 '
    :top = 'window_height * 0.63 + 50'
    :left = 'window_width * 0.55 + 20'
  />
</template>

<script>
import controller from './components/controller.vue'
import mainView from './components/main_view.vue'
import calendar from './components/calendar.vue'
import radar from './components/radar.vue'
import relationship from './components/relationship.vue'
import baseView from './components/base.vue'

export default {
  name: 'App',
  components: {
    controller,
    mainView,
    calendar,
    radar,
    relationship,
    baseView,
  },
  data(){
    return {
      //这两个变量是浏览器页面的大小，通过props遗传到子组件
      window_width:document.documentElement.clientWidth ,
      window_height:document.documentElement.clientHeight,

    }
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
