<template>
	<div id="app">
		<div class="app-header">
			<div class="app-head-inner">
				<img src="../assets/logo.png">
				<div class="nav-list">
					<li>{{ userName }}</li>
					<li v-if="userName!== ''" class="nav-pile">|</li>
					<li v-if="userName=== ''" @click="loginClick">登录</li>
					<li v-if="userName=== ''" class="nav-pile">|</li>
					<li v-if="userName=== ''" @click="registerClick">注册</li>
					<li v-if="userName!== ''" @click="logout">退出</li>
					<li class="nav-pile">|</li>
					<li @click="aboutClick">关于</li>
				</div>
			</div>
		</div>
		<div class="container">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<p>@ 2017 Ray</p>
		</div>
		<my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			<p>about</p>
		</my-dialog>
		<my-dialog :is-show="isShowLoginDialog" @on-close="closeDialog('isShowLoginDialog')">
			<login-form @has-log="onSuccessLogin"></login-form>
		</my-dialog>
		<my-dialog :is-show="isShowRegisterDialog" @on-close="closeDialog('isShowRegisterDialog')">
			<register-form></register-form>
		</my-dialog>
	</div>
</template>

<script>
import Dialog from './dialog.vue'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
export default{
  components:{
		MyDialog: Dialog,
		LoginForm,
		RegisterForm
	},
  data () {
    return {
      isShowAboutDialog: false,
      isShowLoginDialog: false,
      isShowRegisterDialog: false,
      userName: ''
    }
  },
  methods:{
  	aboutClick(){
  		this.isShowAboutDialog = true
  	},
  	loginClick(){
  		this.isShowLoginDialog = true
  	},
  	registerClick(){
  		this.isShowRegisterDialog = true
  	},
  	closeDialog(attr){
  		this[attr] = false
  	},
  	onSuccessLogin(data){
  		console.log(data)
  		this.closeDialog('isShowLoginDialog')
  		this.userName = data.userName
  	}
  }
}
</script>

<style>
html, body, div, h3, h2, span, ol, ul, li, p{
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	font-size: 100%;
	font-weight: normal;
}
body{
	background-color: #f0f2f5;
	font-size: 14px;
	color: #444;
	line-height: 1;
}
ol,ul{
	list-style: none;
}
a{
	color: inherit;
	text-decoration: none;
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
.fl{
    float: left;
}
</style>
