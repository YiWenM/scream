<template>
   <div class="clear">
   	  <div class="head">
   	  	 <img src="../assets/titleView.png" alt="">
          <div class="right">
             <i class="iconfont">&#xe642;</i>
   	  	    <input type="text" placeholder="搜索我的尖叫好物">
          </div>
   	  </div>
   	  <ul class="nav">
   	  	<router-link to="/recommend" tag="li" activeClass="active">推荐</router-link>
   	  	<router-link to="/furniture" tag="li" activeClass="active">家具</router-link>
   	  	<router-link to="/home" tag="li" activeClass="active">家居</router-link>
   	  	<router-link to="/active" tag="li" activeClass="active">活动</router-link>
   	  </ul>
        <router-view></router-view>
   </div>
</template>

<script>
export default {
  name:'headnav'
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