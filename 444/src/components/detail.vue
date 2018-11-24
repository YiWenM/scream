<template>
  <div>
    <div class="detailhead">
        <h2>{{$store.state.detailTitle}}</h2>
        <!-- <img :src="$store.state.detailinfo[$store.state.detailindex].productImg" alt="">
        <p>{{$store.state.detailinfo[$store.state.detailindex].productTitle}}</p>
        <p>{{$store.state.detailinfo[$store.state.detailindex].sellPrice}}</p> -->
    </div>
    <div v-for="data in detaillist" class="detailbody1">
      <div v-if="data.content.indexOf('http') < 0">
        <p>{{data.content}}</p>
      </div>
      <div v-if="data.content.indexOf('http') >= 0">
        <img :src="data.content" alt="">
      </div>
    </div>

    <div class="detailbody2">
      <p>详情规格参数</p>
      <ul>
       <li v-for="data in datalist">
         <span>{{data.attributeName}}</span>
         <span class="size">{{data.attributeValueText}}</span>
       </li> 
     </ul>
    </div>

    <div class="assess">
      <h2>
        评价晒图
      </h2>
      <ul class="assessfoot">
        <li v-for="data in assesslist">
          <img :src="data.avatar" alt="">
          <h5>
              {{data.nickName}}
              <span>{{data.publishTimeFormat}}</span>
          </h5>
          <p>{{data.comments}}</p>
          <p>{{data.specAttributes[0]}}</p>
        </li>
      </ul>
    </div>


    <div class="guesslist">
      <h2>
          猜你喜欢
      </h2>
      <ul>
        <li v-for="data in guesslist" @click="guessClick(data.productId)">
          <img :src="data.productImg" alt="">
          <p>{{data.productTitle}}</p>
          <p>
              ￥{{data.sellPrice}}
              <span class="delline">￥{{data.originalPrice}}</span>
          </p>
        </li>
      </ul>
      <h4>需要帮助<span style="color:red">周一至周五9:00~18:30</span></h4>
    </div>
  </div>
</template>

<script>

import axios from "axios"


export default {
  name : 'detail',
  data(){
  	return {
  		datalist : [],
      idlist : [],
      detaillist : [],
      assesslist:[],
      guesslist:[]
  	}
  },
  methods:{
     guessClick(id){
        console.log(111);
        this.$router.push('/detail/' + id);
     }
  },

  mounted(){

    axios.get(`/itemdetail/skuInfos/${this.$route.params.id}?_=1542783587691`).then(res=>{
      // console.log(res.data.data.skuAttrPairs);
      this.datalist = res.data.data.skuAttrPairs;
      console.log(this.datalist)
    }).catch(error=>{
      console.log(error);
    })


    //将Id存到store中
    axios.get(`/recommend/item?skuId=${this.$route.params.id}&_=1542795192332`).then(res=>{
    
      this.idlist = res.data.data.skuInLists[0];
  
      this.guesslist = res.data.data.skuInLists;


      this.$store.commit("detailId",this.idlist.parentProductId);



      //从store拿到ID，找详细信息
      axios.get(`/itemdetail/spuInfos/${this.$store.state.detailId}?_=1542798329745`).then(res=>{
        this.detaillist = res.data.data.itemDetailIntroVoList;
        this.assesslist = res.data.data.productCommentList;
     
      }).catch(error=>{
        console.log(error);
      })


    }).catch(error=>{
     console.log(error);
    })
   
  }
  // beforeDestroy(){
  //   this.$store.commit("put",true);
  // }
  
}
</script>

<style scoped lang="scss">

  .detailhead{
    h2{
      font-size: .2rem;
      font-weight: 100;
      text-align: center;
      margin-bottom: .1rem;
      line-height: .4rem;
      border-bottom:1px solid #eee;
    }
    img{
      width:100%;
    }
    p{
      padding-left: .3rem;
      line-height: .3rem;
      font-size:.16rem;
    }
    p:nth-of-type(2){
      font-weight: bold;
      margin-bottom: .1rem;
    }
  }

  

  .detailbody1{
    margin-top: -.1rem;
    img{
      width:100%;
      height:2.5rem;
    }
    p{
      text-align: center;
      font-size: .16rem;
      line-height: .5rem;
      padding-left: .2rem;
      padding-right: .2rem;
      background: #eee;
    }
  }

  .detailbody2{
    p{
      text-indent: .45rem;
      font-size: .18rem;
      line-height: .3rem;
      margin-bottom: .1rem;
    }
    li{
      padding-left:.4rem;
      height:.4rem;
      line-height: .4rem;
      border-bottom: 1px solid #eee;
    }
    .size{
      margin-left: .5rem;
    }
  }

  .assess{
    h2{
      height:.4rem;
      background: #eee;
      text-align: center;
      font-size: .18rem;
      line-height: .4rem;
      }
      span{
        display:block;
        margin-top: -.2rem;
        background: #eee;
      }
    .assessfoot{
      padding:.2rem;
      li{
        margin-bottom: .4rem;
        img{
          width:.25rem;
          height:.25rem;
          margin-bottom: -.05rem;
          border-radius: 50%;
        }
        h5{
          font-weight:100;
          margin-left: .4rem;
          margin-top: -.25rem;
        }
        span{
          display:inline-block;
          margin-left: 1rem;
          margin-top: -.5rem;
          margin-bottom: .1rem;
        }
        p:nth-of-type(1){
          padding-top: .1rem;
          border-top: 1px dotted #ccc;
        }
        p{
          line-height: .23rem;
          margin-left: .4rem;
        }
        p:nth-of-type(2){
          margin-top: .1rem;
        }
      }
    }
  }

  .guesslist{
    margin-bottom: .7rem;
    h2{
      height:.6rem;
      font-size: .16rem;
      line-height: .6rem;
      background: #eee;
      text-align: center;
    }
    ul{
      border-top:1px solid #ccc;
      li{
        width:50%;
        height:3rem;
        float:left;
        border-bottom:1px solid #ccc;
        img{
          width:100%;
          height:2rem;
          margin-top: .2rem;
          margin-bottom: .1rem;
        }
        p:nth-of-type(1){
          color:#9f8fb3;
        }
        p{
          margin-left: .2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width:1.6rem;
          line-height: .25rem;

          .delline{
            text-decoration: line-through;
            color:#9f8fb3;
          }
        }
      }
      li:nth-of-type(2n){
        border-left:1px solid #ccc;
      }
    }
    h4{
      line-height: .5rem;
      text-indent: .2rem;
      span{
        margin-left: .1rem;
      }
    }
  }

</style>
