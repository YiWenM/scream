<template>
  <div>
  	 <ul class="head">
        <li class="iconfont">&#xe62a;</li>
        <li>登陆</li>
        <li>注册</li>
     </ul>
     <div class="formdata">
        <ul class="login">
          <li >密码登陆</li>
          <li>短信登陆</li>
        </ul>
          <input type="text" placeholder="请输入手机号" name="tel">
          <input type="password" placeholder="请输入密码" name="password">
     </div>
        <button class="btn">确认</button>
      <label>
        <input type="checkbox">
        <span>一个月内记住登陆</span>
      </label>
      <p>快速注册</p>
     </div>
  </div>
</template>

<script>

import axios from "axios"


export default {
  name : 'log',
  data(){
  	return {
  		datalist : []
  	}
  },

  mounted(){
  
  }
}
</script>

<style scoped lang="scss">
   .head{
     display: flex;
     height: .5rem;
     padding: 0 .3rem;
     background: white;
     justify-content:space-around;
     li{
      flex:1;
      line-height: .5rem;
      text-align: right;
      font-size: .18rem;

     }
     li:nth-of-type(2){
      font-weight: bold;
      text-align: center;
     }
     li:nth-of-type(1){
      text-align: left;
     }
   }
   .formdata{
    width: 80%;
    background: white;
    margin: .2rem auto 0 auto;
    .login{
      display:flex;
      height: .4rem;
      width: 100%;
      li{
        flex: 1;
        line-height: .4rem;
        text-align: center
      }
    }
    input{
      
    }
   }
</style>
