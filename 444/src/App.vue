<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
    <foots></foots>
  </div>
</template>

<script>
import foots from './components/index'
export default {
  name: 'App',
  components:{
   foots
  }
}
</script>

<style>
html{font-size: 26.6666667vw}
 *{padding: 0;margin:0;box-sizing: border-box;font-size: 0.14rem;}
 img{display: inline-block}
 ul,li{list-style: none}
 a{text-decoration:none;}
 body,html{width: 100%}
 .clear{content:'';display: block;clear: both;}

</style>
