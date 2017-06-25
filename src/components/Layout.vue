<template>
	<div id="app">
		<div class="app-header">
			<div class="app-head-inner">
				<img src="../assets/logo.png">
				<div class="nav-list">
					<li>登录</li>
					<li class="nav-pile">|</li>
					<li>注册</li>
					<li class="nav-pile">|</li>
					<li>关于</li>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<p>@ 2017 Ray</p>
		</div>
	</div>
</template>

<script>
export default{
  data () {
    return {
      msg: 'msg'
    }
  }
}
</script>

<style scoped>
html, body, div{
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
body{
	background-color: #f0f2f5;
	font-size: 16px;
	color: #444;
}
li{
	list-style: none;
}
.app-header{
	background-color: #363636;
	color: #b2b2b2;
	height: 90px;
	line-height: 90px;
	width: 100%;
}
.app-head-inner{
	width: 1200px;
	margin: 0 auto;
}
.head-logo{
	float: left;
}
.app-head-inner img{
	width: 50px;
	margin-top: 20px;
}
.nav-list{
	float: right;
}
.nav-list li{
	display: inline;
}
.head-nav{
	float: right;
}
.head-nav ul{
	overflow: hidden;
}
.nav-pile{
	padding: 0 10px;
}
.app-footer{
	text-align: center;
	height: 80px;
	widows: 100%;
	line-height: 80px;
	background-color: #e3e4e8;
	clear: both;
	margin-top: 30px;
}
.container{
	width: 1200px;
	margin: 0 auto;
}
</style>
