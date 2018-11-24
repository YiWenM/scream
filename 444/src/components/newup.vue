<template>
  <div>
    <ul class="content">
      <li v-for="data in datalist" @click="handleClick(data.productId)">
        <img :src="data.productImg" alt="">
        <p> {{data.productTitle}} </p>
        <p> ￥{{data.sellPrice}}  </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'newup',
  data(){
  	return {
  		datalist : [],
      datalist1 : []
  	}
  },

  methods : {
  	handleClick(id){
  	   this.$router.push("/detail/"+id);
  	}
  },
  mounted(){
   
    axios.get(`/pages/category/${this.$store.state.category[0]+24}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1542949069315`).then(res=>{

      this.datalist = res.data.data.products;
      console.log(this.datalist[0].productId);
    }).catch(error=>{
      console.log(error);
    })

  },
  updated(){
    axios.get(`/pages/category/${this.$store.state.category[0]+24}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1542949069315`).then(res=>{

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
        height:2.5rem;
        border-bottom:1px solid #ccc;
        img{
          width:100%;
        }
        p:nth-of-type(1){
          color:#8f8fb3;
        }
        p{
          padding-left: .1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 1.7rem;
          line-height: .25rem;
        }
      }
    }
</style>
