<template>
  <div>
    <h2>{{$store.state.category[1]}}</h2>
    <!-- 轮播 -->
    <div class="swiper-container">
       <div class="swiper-wrapper">
          <!-- to="'/sortdetail/' + '/newup'" -->
         <div class="swiper-slide" v-for="data,index in $store.state.categorylist1" @click="handleClick(index,data)">{{data}}</div>
       </div>
    </div>
    <div class="centers">
          <router-link to="/sortdetail/newup" activeClass="active" tag="p">上新</router-link>
          <router-link to="/sortdetail/sales" activeClass="active" tag="p">销量</router-link>
          <router-link to="/sortdetail/prices" activeClass="active" tag="p">价格</router-link>
    </div> 
  
    <section>
      <router-view></router-view>
    </section>

  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


export default {
  name: 'sortdetail',
  data(){
  	return {
  		
  	}
  },

  methods : {
  	handleClick(index,data){
  	   this.$router.push("/sortdetail/newup");
       this.$store.commit("categoryIndex",[index,data]);

  	}
  },

  mounted(){
      //轮播：
      var appendNumber = 4;
          var prependNumber = 1;
          var swiper = new Swiper('.swiper-container', {
              slidesPerView: 3,
              spaceBetween: 15,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
          })  
  }
}
</script>

<style scoped lang="scss">

  h2{
    margin-top: .1rem;
    font-size:.18rem;
    line-height: .2rem;
    text-align: center;
    font-weight: 100;
  }
  .swiper-container {
        padding-left: .15rem;
        height: 1rem;
        margin: .1rem auto;
        margin-bottom: .2rem;
        background: url('/static/categoryImg/10.jpg');



        .swiper-slide {
          text-align: center;
          font-size: 18px;
          height:.8rem;
          width:.8rem!important;
          line-height: .7rem;
          opacity:.5;
          color:white;
          border:1px solid #fff;
          margin-top: .1rem;
        }
  }
  .centers{
        display:flex;
        justify-content:space-around;
        border-bottom:1px solid #ccc;
        margin-top: -.1rem;
        p{
          width:.5rem;
          text-align: center;
          color:black;
          line-height: .3rem;
          /*height:.3rem;*/
        }
        .active{
          border-bottom: 3px solid #000;
        }
      }
</style>
