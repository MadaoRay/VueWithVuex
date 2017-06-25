<template>	
	<div class="menu-left">
		<h2>全部产品</h2>
		<h3>PC产品</h3>
		<ul>
			<li></li>
		</ul>
		<h3>应用类</h3>
	</div>
</template>

<script>
export default{
	data() {
		return {
		  productList: {
		  	pc: {
		  	  title: 'PC产品',
		  	  list:[
  		  	  {
  		  	  	title: '数据统计',
  		  	  	url: 'http://starcraft.com'
  		  	  },
  		  	  {
  		  	  	title: '数据预测',
  		  	  	url: 'http://warcraft.com'
  		  	  },
  		  	  {
  		  	  	title: '流量分析',
  		  	  	url:'http://overwatch.com'
  		  	  }
		  	  ]
		  	},
		  	app: {
		  	  title: '应用类',
		  	  list:[
  		  	  {
  		  	  	title: '91助手',
  		  	  	url: 'http://weixin.com'
  		  	  },
  		  	  {
  		  	  	title: '产品助手',
  		  	  	url: 'http://twitter.com'
  		  	  },
  		  	  {
  		  	  	title: '智能地图',
  		  	  	url: 'http://map.com'
              hot: true
  		  	  }
		  	  ]
		  	}
		  }
		}
	}
}
</script>

<style>

</style>