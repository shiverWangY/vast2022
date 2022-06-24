<template>
    <div id = '主视图' :style = 'div_css'>
      <t-divider>
        Main View
      </t-divider>
      <t-radio-group id = '单选框' variant="primary-filled" default-value="1">
          <t-radio-button value="1">Scatter Mode</t-radio-button>
          <t-radio-button value="2">Block Mode</t-radio-button>
      </t-radio-group>
    </div>
</template>

<script>
export default {
  name: 'mainView',
  props: {
    //这两个属性从父组件继承
    height:Number,
    width:Number,
    top:Number,
    left:Number,
  },
  data(){
    return {
      
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
#单选框{
  position:absolute;
  left:70%
}


</style>
