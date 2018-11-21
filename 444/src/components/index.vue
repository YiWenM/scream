<template>
  <div >
    <div id="titles"></div>
  	<ul class="footer">
  		<router-link tag="li" activeClass="active" to="/page/index">
  			<p class="iconfont">&#xe62a;</p>
  			<p>首页</p>
  		</router-link>
  		<router-link tag="li" activeClass="active" to="/pages/category">
  			<p class="iconfont big">&#xe656;</p>
  			<p>分类</p>
  		</router-link>
  		<router-link tag="li" activeClass="active" to="/cart">
  			<p class="iconfont big" >&#xe600;</p>
  			<p>购物车</p>
  		</router-link>
  		<router-link tag="li" activeClass="active" to="/news">
  			<p class="iconfont">&#xe60a;</p>
  			<p>消息</p>
  		</router-link>
  		<router-link tag="li" activeClass="active" to="/myself">
  			<p class="iconfont big">&#xe65d;</p>
  			<p>我</p>
  		</router-link>	
  	</ul>
     <a class="fixed iconfont" href="#titles">&#xe602;</a>
  </div>
</template>

<script>
export default {
  name:'index'
}
</script>

<style scoped lang="scss">

   .footer{
   	width: 100%;
    height: 0.5rem;
    position: fixed;
    display: flex;
    margin: 0 auto;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    z-index: 999; 
    padding-top: .05rem;
    li{
    	flex: 1;
      color: #ccc;
    	text-align: center;
    	height: 100%;
      .iconfont{
         font-weight: bold;
       }
       .big{
        font-size: .2rem;
       }
      p{
        line-height: .2rem;
        font-size: .16rem;
      }
    }
  }
   .active{
    p{
      color: #000;
    }
   }
   .fixed{
    position: fixed;
    z-index: 999999;
    display: inline-block;
    width: .3rem;
    height: .3rem;
    top: 70%;
    right: .05rem;
    background: #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: .3rem
   }

</style>