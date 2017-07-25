<template>	
    <div class="detail-container">
        <div class="detail-left">
        <img :src="productIcon">
        <ul>
           <router-link v-for="item in infoList" tag="li" :to="{path:item.path}" active-class="active">{{ item.des }}</router-link>
           <!--  <router-link tag="li" to="/detail/statistics">数据统计</router-link>
            <router-link tag="li" to="/detail/forecast">数据预测</router-link>
            <router-link tag="li" to="/detail/analyze">流量分析</router-link>
            <router-link tag="li" to="/detail/advertise">广告发布</router-link>
            <router-link v-for="" tag=li :to=""></router-link> -->
        </ul>
        </div>
        <keep-alive>
           <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default{
  data(){
    return {
      infoList: [
        {
          des:'数据统计',
          path: 'statistics',
          img: require('../assets/images/1.png')
        },
        {
          des:'数据预测',
          path: 'forecast',
          img: require('../assets/images/2.png')
        },
        {
          des:'流量分析',
          path: 'analyze',
          img: require('../assets/images/3.png')
        },
        {
          des:'广告发布',
          path: 'advertise',
          img: require('../assets/images/4.png')
        }
      ],
      imgIcon:{
          '/detail/statistics':require('../assets/images/1.png'),
          '/detail/forecast':require('../assets/images/2.png'),
          '/detail/analyze':require('../assets/images/3.png'),
          '/detail/advertise':require('../assets/images/4.png'),
        }
    }
  },
  computed:{
    productIcon(){
      return this.imgIcon[this.$route.path]
    }
  }
}
</script>

<style>
.detail-container{
  margin: 0 auto;
  width: 1200px;
  padding-top: 20px;
}
.detail-left{
  padding: 20px 0;
  text-align: center;
  float: left;
  width: 200px;
  background-color: white;
}
.detail-left ul{
  margin-top: 15px;
}
.detail-left ul li{
  padding: 5px 15px;
  text-align: left;
  cursor: pointer;
}
.detail-left ul li:hover{
  background-color: #4fc08d;
}
.detail-right{
  float: left;
  width: 980px;
  min-height:400px;
  margin-left: 20px;
}

.detail-right h2{
  font-size: 20px;
  padding: 0 20px 20px;  
}
.detail-right .des{
  padding: 15px 20px;  
  line-height: 1.5;
}
.detail-right .data{
    margin: 20px 0;
    background-color: white;
    padding: 20px 0;
}
.detail-right .analyze{
    padding: 20px 0;
    background-color: white;
}
.detail-form{
  margin-top: 30px;
}
.detail-form .inline label{
  display: inline-block;
  width: 100px;
  text-align: left;
  padding-left: 20px;
}
.detail-form .inline{
  margin-top: 20px;
}
.detail-form .inline ul{
  display: inline-block;
}
.detail-form .inline ul li{
  display: inline-block;
  color: black;
  padding: 5px 10px;
  border-radius: 10%;
  border: 1px solid #ccc;
  cursor: pointer;
}
.detail-form .inline ul li:hover{
  background-color: #4fc08d;
  color: white;
}
.detail-form .inline select{
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10%;
}
.detail-form .inline button{
  background-color: #4fc08d;
  padding: 8px 18px;
  border: none;
  color: white;
  border-radius: 5%;
}
.table-container table{
  border-collapse:collapse;
  width: 100%;
}
.table-container table tr td{
  border:1px solid #ccc;
  padding: 10px 15px;
}
.table-container{
  padding: 15px;
}
ul .active{
  background-color: #4fc08d;
  color: white;
}
</style>