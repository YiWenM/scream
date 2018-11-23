<template>
  <div>
      <ul class="content">
        <li v-for="data in datalist">
          <img :src="data.productImg" alt="">
          <p>{{data.productTitle}}</p>
          <p>￥{{data.sellPrice}}</p>
          <p>{{data.prizeOrSlogan}}</p>
        </li>
      </ul>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'sales',
  data(){
  	return {
  		datalist : []
  	}
  },

  methods : {
  	handClick(){
  	
  	}
  },

  mounted(){
   
    axios.get(`/pages/category/${this.$store.state.category[0]+24}?pageNumber=1&orderBy=sales&sort=desc&_=1542951234737`).then(res=>{
      
      this.datalist = res.data.data.products;
    }).catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style scoped lang="scss">
    .content{
      li:nth-of-type(2n){
        border-left:1px solid #ccc;
      }
      li{
        width:50%;
        float:left;
        height:2.8rem;
        border-bottom:1px solid #ccc;
       
        img{
          width:100%;
          margin-bottom: .1rem;
        }
        p:nth-of-type(1){
          color:#8f8fb3;
        }
        p{
          padding-left: .15rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 1.7rem;
          line-height: .25rem;
        }
        p:nth-of-type(3){
          margin-bottom: .2rem;
          color:#8f8fb3;
        }
      }
    }
</style>
