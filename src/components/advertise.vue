<template>    
    <div class="detail-right">
        <div class="analyze">          
            <h2>广告发布</h2>
            <p class="des">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
                    <label>行业：</label>
                    <select>
                      <option>互联网</option>
                      <option>金融</option>
                      <option>媒体</option>
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
                      <li>初级</li>
                      <li>中级</li>
                      <li>高级</li>
                    </ul>
                </div>
                <div class="inline">
                    <label>总价：</label>
                    <span>800元</span>
                </div>
                <div class="inline">
                    <label>&nbsp;</label>
                    <button>立即购买</button>
                </div>
            </div>
        </div>
        <div class="data">
            <h2>产品说明</h2>
            <p class="des">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
            <div class="table-container">                    
                <table>
                    <tbody>
                        <tr>
                            <td>安全安全安全</td>
                            <td>1111111</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                            <td>安全</td>
                        </tr>
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