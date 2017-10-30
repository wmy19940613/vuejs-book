var App=new Vue({
  el:'#App',
  data:{
     list:[
       {
        id:1,
        name:'iphone7',
        price:7000,
        count:3
       },
           {
        id:2,
        name:'iphone8',
        price:8000,
        count:1
       },
           {
        id:3,
        name:'ipad',
        price:3000,
        count:2
       }
     ]
  },
    computed:{
     totalPrice:function() {
       var total=0;
       for(var i=0;i<this.list.length;i++) {
          var item=this.list[i];
          total += item.price*item.count;
       }
       return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
       // return total;
     }
  },
  methods:{ 
     handlerReduce:function(index) {
         if(this.list[index].count ===1) return;
         this.list[index].count --;
     },
      handlerAdd:function(index) {
        this.list[index].count ++;
     },
       handlerRemove:function(index) {
        this.list.splice(index,1)
     },
  },

})
