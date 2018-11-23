<template>
  <div>
    sortdetail
    <!-- 轮播 -->
    <div class="swiper-container">
       <div class="swiper-wrapper">
         <router-link class="swiper-slide" to="/sortdetail/sofa" activeClass="active">沙发</router-link>
         <router-link class="swiper-slide" to="/sortdetail/chair" activeClass="active">椅凳</router-link>
         <router-link class="swiper-slide" to="/sortdetail/cupboard" activeClass="active">柜架</router-link>
         <router-link class="swiper-slide" to="/sortdetail/table" activeClass="active">餐桌</router-link>
       </div>
    </div>
    <div>
      <router-link></router-link>
    </div>

    <router-view></router-view>

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
  	handClick(){
  	
  	}
  },

  mounted(){
      //轮播：
      var appendNumber = 4;
          var prependNumber = 1;
          var swiper = new Swiper('.swiper-container', {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 30,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
          })  
  }
}
</script>

<style scoped lang="scss">

  .swiper-container {
        height: 1rem;
        margin: .2rem auto;
        background: url('/static/categoryImg/10.jpg');



        .swiper-slide {
          text-align: center;
          font-size: 18px;
          height:.8rem;
          width:.85rem!important;
          line-height: .7rem;
          opacity:.5;
          color:white;
          border:1px solid #fff;
          margin-top: .1rem;
        }
  }
  .active{
    color:red;
  }
</style>
