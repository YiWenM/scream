<template>
<div>
  <div class="main">
    <div class="put" @blur="things()">
      <i class="iconfont">&#xe642;</i>
  	    <input type="text" placeholder="搜索我的尖叫好物" v-model="content" v-on:keyup.enter="submit(content)" >
    </div>
     <div class="span" @click="change()"><i class="iconfont">&#xe62a;</i></div>
  </div>
  <div v-if="$store.state.shows">
    <div class="hot">
    	<p>热门搜索</p>
    	<span v-for ="data in dataList" @click="getdata(data)">{{data}}</span>
    </div>
    <div class="done">
    	<div>
    		<p>历史搜索 <span @click="deldata()" class="del">清空</span></p>
    		<span v-for ="data in changes" @click="getdata(data)" v-if="dataList.length">{{data}}</span>
    	</div>
    </div>
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
      isShow:true,
   		dataList:['尖叫设计','暖手宝','沙发','被子','餐具','床上用品'],
   		doneList:[]
   	}
   },
   methods:{
   	change(){
   	   this.$router.push('/page/index');
   	   this.$store.commit('put',true);	
   	},
   	getdata(data){
      console.log(data)
       this.connent = data;
        this.submit(this.connent);
       this.$store.commit('shows',true);
   	},
   	deldata(){
   		var arr = []
        this.doneList =arr;
      },
      submit(data){
        if (this.doneList.indexOf(data)===-1) {
      	   this.doneList.push(data);
        }
      	var keyword = window.encodeURIComponent(data);
      	axios.get(`/product/search?keyword=${keyword}&sort=onShelfTime&order=desc&currentPage=1&_=${new Date().getTime()}`).then(res=>{
          if (res.data.data.products===0) {
            axios.get(`/recommend/search?_=${new Date().getTime()}`).then(res=>{
              console.log(res)
              this.$store.commit('shows',false);
              this.$store.commit('search',res.data.data.products);
            })
          }else{
            this.$store.commit('shows',false);
            this.$store.commit('search',res.data.data.products);
            this.$router.push('/view/search')  
          }
      	})


      },
      things(){
        if (this.content) {
           return
        }
        this.$router.push('/view')
        this.$store.commit('shows',true);
      }
   	
   },
   mounted(){

   },
   computed:{
   	changes(){
   		return this.doneList;
   	}
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
   .hot,.done{
   	margin-top: .2rem;
   	padding-left: .1rem;
   	 p{
   	 	 overflow: hidden;
	     color: #808080;
	     margin-bottom: 0.1rem;
   	 }
   	 span{
   	 	font-size: 0.12rem;
 	    color: #000;
 	    display: inline-block;
 	    text-align: center;
 	    padding: 0.1rem 0.2rem;
 	    background-color: #F5F5F5;
 	    margin: 0.15rem; 
   	 }
	   span.del{
	   	float: right;
	   	right: 1rem;
	   	top: -.1rem;
	   	border-radius:.1rem;
	   	margin: 0;
	   }

   }

</style>