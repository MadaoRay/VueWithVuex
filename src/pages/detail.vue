<template>	
    <div class="detail-container">
        <div class="detail-left">
        <img src="../assets/images/1.png">
        <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
        </ul>
        </div>
        <div class="detail-right">
            <div class="analyze">          
                <h2>数据统计</h2>
                <p class="des">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
                <div class="detail-form">
                    <div class="inline">
                        <label>产品类型：</label>
                        <ul>
                          <li>红色版</li>
                          <li>红色版</li>
                          <li>红色版</li>
                        </ul>
                    </div>
                    <div class="inline">
                        <label>适用地区：</label>
                        <select>
                          <option>上海</option>
                          <option>上海</option>
                          <option>上海</option>
                          <option>上海</option>
                        </select>
                    </div>
                  <div class="inline">
                        <label>有效期：</label>
                        <span>半年</span>
                  </div>
                  <div class="inline">
                        <label>总价：</label>
                        <span>500元</span>
                  </div>
                  <div class="inline">
                        <label>&nbsp;</label>
                        <button>立即购买</button>
                  </div>
                </div>
            </div>
            <div class="data">
                <h2>产品说明</h2>
                <p class="des">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
                <table>
                    <thead>
                        <tr>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>电子</td>
                            <td>电子</td>
                            <td>电子</td>
                            <td>电子</td>
                            <td>电子</td>
                            <td>电子</td>
                            <td>电子</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  data(){
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
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
  background-color: white;
  min-height:400px;
  margin-left: 20px;
}
h2{
  font-size: 20px;
  padding: 20px;  
}
.des{
  color: #999;
  padding: 15px 20px;  
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
button{
  background-color: #4fc08d;
  padding: 5px 10px;
  border: none;
  color: white;
  border-radius: 5%;
}
table
</style>