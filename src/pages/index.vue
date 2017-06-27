<template>	
  <div>
  	<div class="menu-left">
      <div class="products">
        <h2>全部产品</h2>
        <div v-for="product in productList" class="title">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.title }}</a>
              <span v-if="item.hot" class="hot">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="height-row"></div>
        </div>
      </div>
      <div class="products latest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="news-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
  	</div>
      <div class="menu-right">
        <div class="board-list">
          <div 
          class="board-item" 
          v-for="(item, index) in boardList"
          :class="[{'line-last':index%2!==0},'item-'+item.id]">
            <div class="content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="btn-container">
                <a href="" class="btn">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default{
  // created:function() {
  //   this.$http.get('api/getNewsList')
  //   .then(function(result){
  //     this.newsList = result.data
  //   },function(error){
  //     console.log(error)
  //   })
  // },
    created:function() {
    this.$http.get('api/getNewsList')//json-server模拟服务器上的模拟数据
    .then((result)=>{
      this.newsList = result.data//代码环境下的this
    },(error)=>{
      console.log(error)
    })
  },
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
  		  	  	url:'http://overwatch.com',
              hot: true
  		  	  }
		  	  ]
		  	},
		  	app: {
		  	  title: '应用类',
          last: true,
		  	  list:[
  		  	  {
  		  	  	title: '91助手',
  		  	  	url: 'http://weixin.com',
              hot: true
  		  	  },
  		  	  {
  		  	  	title: '产品助手',
  		  	  	url: 'http://twitter.com'
  		  	  },
  		  	  {
  		  	  	title: '智能地图',
  		  	  	url: 'http://map.com'
  		  	  }
		  	  ]
		  	}
		  },
      newsList:[],
      boardList:[
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ]
		}
	}
}
</script>

<style scoped>
.menu-left{
  width: 300px;  
  float: left;
}
.menu-left .products{
  background-color: white;
  margin: 15px;
  box-shadow: 0px 0px 1px #ddd;
}
.menu-left .products h2{
  background-color: #4fc08d;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
}
ul{
  padding: 5px 15px;
}
.menu-left .products h3{
  font-weight: bold;  
  padding: 10px 15px;
}
ul li{
  padding: 5px;
}
.height-row{
  height: 1px;
  width: 100%;
  background-color: #ddd;
}
.hot{
  background-color: red;
  color: white;
}
.latest-news{
  min-height: 512px;
}
.menu-right{
  float: left;
  width: 900px;
}
.menu-right .board-item{
  background-color: white;
  width: 400px;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  float: left;
  min-height: 135px;
  margin: 0 20px 10px 0;
}
.menu-right .board-item.line-last{
  margin: 0;
}
.menu-right .board-item .content{
padding-left: 125px;
}
.menu-right .board-item .content h3{
  font-weight: bold;
  font-size: 20px;
}
.menu-right .board-item .content p{
  margin: 15px 0;
}
.btn{
  background-color: #4fc08d;
  color: white;
  padding: 10px 15px;
  display: inline-block;
} 
.item-car .content{
  background: url(../assets/images/2.png) no-repeat;
}
.item-earth .content{
  background: url(../assets/images/1.png) no-repeat;
}
.item-hill .content{
  background: url(../assets/images/4.png) no-repeat;
}
.item-loud .content{
  background: url(../assets/images/3.png) no-repeat;
}
.news-item{
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>