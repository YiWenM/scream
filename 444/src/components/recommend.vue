<template>
  <div>
  	 <div class="swiper-container">
  	     <div class="swiper-wrapper">
  	         <div class="swiper-slide">Slide 1</div>
  	         <div class="swiper-slide">Slide 2</div>
  	         <div class="swiper-slide">Slide 3</div>
  	     </div>
  	     <div class="swiper-pagination"></div>
  	 </div>
  </div>
</template>

<script>
 import Swiper from 'swiper';
 import axios from 'axios';
 import  'swiper/dist/css/swiper.min.css';
export default {
  name:'recommend',
  mounted(){
  	axios.get('/v2/page?pageId=1&tabId=1&_=1542764925216').then(res=>{
  		   console.log(res.data.data);
			/*var mySwiper = new Swiper ('.swiper-container', {
			    loop: true, // 循环模式选项
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    },
			      autoplay: {
			        delay: 2500,
			        disableOnInteraction: false,
			      },
			  })   */     
  	})
  }
}
</script>

<style scoped>

</style>