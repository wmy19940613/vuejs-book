var App=new Vue({
   el:'#App',
   data:{
    show: false
   },
   methods:{
      handleClose:function() {
        this.show=false;
      }
   }
})
