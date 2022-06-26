<template>
    <div id = '日历视图' :style = 'div_css'>
      
      <t-divider class = 'divider'>
        Calendar
      </t-divider>
      <t-config-provider :global-config="globalConfig">
       <t-calendar id = '日历' 
          theme="card" 
          :style = 'calendar_css'/>
      </t-config-provider>
    </div>
</template>

<script>
import enConfig from 'tdesign-vue-next/es/locale/en_US'
import merge from 'lodash/merge'
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',]
const globalConfig = merge(enConfig, {
  calendar: {
    yearSelection: '{year}',
    // 1 表示周一；7 表示周日
    firstDayOfWeek: 7,
    monthSelection: ({ month }) => MONTHS[month - 1],
    yearRadio: 'Year',
    monthRadio: 'Month',
    hideWeekend: 'Hide Weekend',
    showWeekend: 'Show Weekend',
    today: 'Today',
    thisMonth: 'This Month',
    week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].join(),
    cellMonth: MONTHS.join(),
    fillWithZero: false,
    controllerConfig: {
      year: {
        visible: true,
        selectProps: {
          size:'small',
        },
      },
      month: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      mode: {
        visible: true,
        radioGroupProps: {
          size: 'small',
        },
      },
      weekend: {
        visible: true,
        showWeekendButtonProps: {
          size: 'small',
        },
        hideWeekendButtonProps: {
          size: 'small',
        },
      },
      current: {
        visible: true,
        currentDayButtonProps: {
          theme: 'warning',
          size: 'small',
        },
        currentMonthButtonProps: {
          theme: 'success',
          size: 'small',
        },
      },
    },
  },
});
export default {
  name: 'calendar',
  props: {
    //这两个属性从父组件继承
    height:Number,
    width:Number,
    top:Number,
    left:Number,
  },
  data(){
    return {
      globalConfig:globalConfig
    }
  },
  mounted(){

  },
  computed:{
    div_css(){
      //div的css属性从这里写
      let div_height = this.height
      let div_width = this.width
      let div_border = '0px solid black'
      let div_position = 'absolute'
      let div_top = this.top //所有边距固定为10
      let div_left = this.left

      return  "position:" + div_position + ";" +
              "height:" + div_height + "px;" +
              "width:" + div_width + "px;" +
              "border:" + div_border + ";" +
              "left:" + div_left + "px;" +
              "top:" + div_top + "px;" 
    },
    calendar_css(){
      let raw_width = 352
      let raw_height = 368
      let div_width = this.width
      let div_height = this.height
      
      let new_height = div_height * 0.88
      let ratio = new_height/raw_height
      let new_width = raw_width * ratio
      return 'transform:scale(' + [ratio,ratio] + ');' +
             'position:absolute;' + 
             "left:" + (-div_width + new_width)/2+ "px;" +
             "top:" + (-div_height + new_height - 30)/2 + "px;" 
    }
  },
  methods:{

  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.divider{
  margin-top:0px;
  margin-bottom:0px;
}


</style>
