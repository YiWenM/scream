<template>
  <div>
    <h2>{{$store.state.detailTitle}}</h2>
  	<ul>
     <li v-for="data in datalist">
       <p>{{data.attributeName}}</p>
       <p>{{data.attributeValueText}}</p>
     </li> 
    </ul>
  </div>
</template>

<script>

import axios from "axios"


export default {
  name : 'detail',
  data(){
  	return {
  		datalist : [],
      idlist : []
  	}
  },

  mounted(){
    
    // console.log(this.$route);

    axios.get(`/itemdetail/skuInfos/${this.$route.params.id}?_=1542783587691`).then(res=>{
      // console.log(res.data.data.skuAttrPairs);
      this.datalist = res.data.data.skuAttrPairs;
    }).catch(error=>{
      console.log(error);
    })

    //将Id存到store中
    axios.get(`/recommend/item?skuId=${this.$route.params.id}&_=1542795192332`).then(res=>{
      console.log(res.data.data.skuInLists[0].parentProductId);
      this.idlist = res.data.data.skuInLists[0];

      // this.idlist.forEach(item=>{
      //   console.log(item.parentProductId)
      // })
      this.$store.commit("detailId",this.idlist.parentProductId);

      axios.get(`/itemdetail/spuInfos/${this.$store.state.detailId}?_=1542798329745`).then(res=>{
        console.log(res)
      }).catch(error=>{
        console.log(error);
      })

    }).catch(error=>{
     console.log(error);
    })

    //第二个详情请求地址：https://m.wowdsgn.com/itemdetail/spuInfos/7717?_=1542798329745
   
  }
}
</script>

<style scoped>

</style>
