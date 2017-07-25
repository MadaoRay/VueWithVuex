<template>    
    <div class="detail-right">
        <div class="analyze">          
            <h2>流量分析</h2>
            <p class="des">未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
            <div class="detail-form">
                <div class="inline">
                    <label>购买数量：</label>
                    <div class="count-container">
                        <div class="count-btn">-</div>
                        <div class="fl">
                            <input class="count-input" value="1" />
                        </div>
                        <div class="count-btn">+</div>
                    </div>
                </div>
                <div class="inline">
                    <label>产品类型：</label>
                    <select>
                      <option>入门版</option>
                      <option>中级版</option>
                      <option>高级版</option>
                    </select>
                </div>
                <div class="inline">
                    <label>有效期：</label>
                    <ul>
                      <li>半年</li>
                      <li>一年</li>
                      <li>三年</li>
                    </ul>
                </div>
                <div class="inline">
                    <label>产品版本：</label>
                    <ul>
                      <li>客户版</li>
                      <li>代理商版</li>
                    </ul>
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
            <h3></h3>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg:''
        }
    }
}
</script>

<style type="text/css" scoped>
.count-btn{
    float:left; 
    width:25px;
    height:25px; 
    border:1px solid #ccc;
    text-align:center;
    cursor: pointer;
    line-height: 25px;
}
.count-input{
    border: none;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 23px;
    float:left;
    width: 30px;
    padding: 1px 5px;
}
.count-container{
    display: inline-block;
    vertical-align: middle;
}
</style>