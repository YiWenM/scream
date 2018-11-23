<template>
   <div class="clear">
   	  <div class="head" >
   	  	 <img src="../assets/titleView.png" alt="">
          <div class="right">
             <i class="iconfont">&#xe642;</i>
   	  	    <input type="text" placeholder="搜索我的尖叫好物" @click="put()" v-model="content">
          </div>
   	  </div>
      <div id="titles"></div>
   	  <ul class="nav">
   	  	<li @click="handleClick(index)" v-for="data,index in dataList" :class="current===index?'active':''">{{data}}</li>
   	  </ul>
        <component :is="who"></component>
   </div>
</template>

<script>
  import recommend from './recommend'
import furniture from './furniture'
import active from './active'
import home from './home'
export default {
  name:'headnav',
  data(){
    return{
      who:'recommend',
      dataList:['推荐','家居','家具','活动'],
      current:0,
      content:''
    }
  },
  methods:{
    handleClick(datas){
      if (datas===0) {
        this.current=0
        this.who ='recommend';
      }
     else if (datas===1) {
       this.current=1
        this.who ='home';
      }
     else if (datas===2) {
        this.who ='furniture';
         this.current=2
      }
     else {
        this.who ='active';
         this.current=3
      }
    },
     put(){
      this.$router.push('/view');
      this.$store.commit('put',false);
    }
   
  },
  components:{
    recommend,
    home,
    furniture,
    active
   },
   
}
</script>

<style scoped lang="scss">

   .head{
      float: left;
      width: 100%;
   	  height:0.38rem;
   	  padding:0.13rem 0.12rem;
      margin-bottom: .2rem;
   	img{
   	    width:20%;
        padding-top: .1rem;
        height: 0.3rem;
   	}
      .right{
         float: right;
         height: .3rem;
         padding: .05rem .03rem;
         width: 60%;
         border-radius: 15px;
         margin-right: .5rem;
         background: #F5F5F5;
         input{
            border: 0;
            outline: none;
            background: #F5F5F5;
         }
      }

   }
	.nav{
		display: flex;
		width: 100%;
      padding: 0 .1rem;
		 li{
		 	flex: 1;
       margin: 0rem 0.13rem;
		 	font-size: 0.16rem;
		 	text-align: center;

		 }
	  }
     .active{
      border-bottom: 0.06rem solid #202020;
      color: #000;
     }
   
</style>