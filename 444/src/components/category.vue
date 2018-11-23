<template>
  <div>
  	<header>
        <i class="iconfont">&#xe642;</i>
	  	<input tsype="text" placeholder="搜索我的尖叫好物">
    </header>
	<img src="/static/categoryImg/furniture.png" alt="">
	<ul>
		<li v-for="data,index in $store.state.categorylist1" @click="handleClick(index,data)">{{data}}<i class="iconfont ">&#xe60c;</i></li>
	</ul>
	<img src="/static/categoryImg/household.png" alt="">
	<ul>
		<li v-for="data,index in list2" @click="handleClick(index,data)">{{data}}</li>
	</ul>
  </div>
</template>

<script>

export default {
  name : 'category',
  data(){
  	return {
		list2 : [
			"灯具",
			"用餐",
			"时尚生活",
			"烹饪",
			"纺织品",
			"家饰",
			"卫浴"
		]
  	}
  },
  methods:{
  	handleClick(index,data){
  		this.$router.push('/sortdetail/newup');
  		this.$store.commit("categoryIndex",[index,data]);
  		console.log(index,data);
  	}
  }
}
</script>

<style scoped lang="scss">
	img{
		width:100%;
		padding:.15rem;
		padding-bottom: 0;
	}
	header{
		width:3rem;
		height: .3rem;
		margin-left:.1rem;
		margin-top: 0.1rem;
		background: #F5F5F5;
		border-radius: 15px;
		padding-left: .15rem;
		line-height: .3rem;
		i{
			padding-right: .1rem;
		}
		input{
			border:0;
			outline:none;
			background: #F5F5F5;
		}
	}
	ul{
		padding:.15rem;
		padding-top: 0;
		li{
			font-size: .16rem;
			line-height: .48rem;
			border-bottom: 1px solid #ccc;
			text-indent: .2rem;
			cursor: pointer;
		}
	}
</style>