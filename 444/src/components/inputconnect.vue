<template>
<div>
  <div class="main">
    <div class="put" @blur="things()">
      <i class="iconfont">&#xe642;</i>
  	    <input type="text" placeholder="搜索我的尖叫好物" v-model="content" v-on:keyup.enter="submit(content)">
    </div>
     <div class="span" @click="change()"><i class="iconfont">&#xe62a;</i></div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name:'sousu',
   data(){
   	return{
   		content:'',
      isShow:true
   	}
   },
   methods:{
   	change(){
   	   this.$router.push('/page/index');
   	   this.$store.commit('put',true);	
   	},
   	getdata(data){
       this.connent = data;
       this.submit(this.connent);
   	},
   	deldata(){
   		var arr = []
        this.doneList =arr;
      },
      submit(data){
         this.$store.commit('done',data);
        var Reg=/[0-9A-Za-z]*/;
         var keyword = '';
        if (!Reg.test(data)) {
      	  keyword = window.encodeURIComponent(data);
        }else{
           keyword = data;
        }
        this.$store.commit('keyword',keyword)
      	axios.get(`/product/search?keyword=${keyword}&sort=onShelfTime&order=desc&currentPage=1&_=${new Date().getTime()}`  ).then(res=>{
          if (res.data.data.products.length ===0) {
            axios.get(`/recommend/search?_=${new Date().getTime()}`).then(res=>{
              console.log(res.data.data)
               this.$store.commit('search2',res.data.data);
            })
          }else{
            this.$store.commit('search',res.data.data.products); 

          }
            this.$router.push('/view/search')    
      	})
      },
      things(){
        if (this.content) {
           return
        }
        this.$router.push('/view')
      }
   	
   },
   beforeDestroy(){
    this.$store.commit('put',true);
   }
}
</script>

<style scoped lang="scss">
   .main{
   	overflow: hidden;
   	height: .5rem;
   	border-bottom: 1px solid #f5f5f5;
   	padding:.1rem .2rem;
    .put{
       float:left;
	   height: .3rem;
	   padding: .05rem .03rem;
	   width: 60%;
	   border-radius: 15px;
	   background: #F5F5F5;
	   input{
	      border: 0;
	      outline: none;
	      background: #F5F5F5;
	   } 

     }
     .span{
     	display: inline-block;
     	float: right;
     }
   }

</style>