// 所有的组件配置都在这里面
// 子组件


Vue.component('input-number',{
  template:'\
  <div class="input-number">\
  <input\
     type="text"\
     :value="currentValue"\
     @change="handleChange"\
  ></input>\
  <button\
   @click="handleDown"\
   :disabled="currentValue <=min">-</button>\
   <button\
   @click="handleUp"\
   :disabled="currentValue >=max">+</button>\
  </div>',
  props:{
    max: {
      type:Number,
      default:Infinity
    },
    min:{
      type:Number,
      default:-Infinity
    },
    value:{
      type:Number,
      default:0
    }
  },
  data:function() {
    return{
      //因为Vue组件是单项数据流，无法从组件内部直接修改prop value的值，
      //解决办法就是在组件声明一个data,默认引入value的值，
      //在组件内部维护这个data。
      currentValue: this.value//初始化时引用父组件value
    }
  },
  watch:{
    currentValue:function(val) {
       this.$emit('input',val);
       this.$emit('on-change',val);
    },
    value:function(val) {
      this.updateValue(val);
    },
  },
  methods:{
    updateValue:function(val) {
        if(val>this.max) val= this.max;
        if(val<this.min) val =this.min;
        this.currentValue = val;
    },
    handleDown:function(val) {
        if(this.currentValue <=this.min) return;
        this.currentValue-=1;
    },
    handleUp:function(val) {
       if(this.currentValue >=this.max) return;
       this.currentValue+=1;
    },
    handleChange:function(val) {
       var val =event.target.value.trim();
       var max =this.max;
       var min =this.min;
       if(isValueNumber(val)){
          val =Number(val);
          this.currentValue=val;
          if(val>max) {
            this.currentValue = max;
          }else if(val<min) {
            this.currentValue= min;
          }
       }else{
        event.target.value = this.currentValue;
       }
    }



  },
  mounted:function() {
    this.updateValue(this.value)
  }
});
