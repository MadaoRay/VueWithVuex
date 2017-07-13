<template>
	<div>
		<div class="inline">			
			<label>用户名：</label>
			<input placeholder="请输入用户名" type="text" v-model="userName"/>
			<span class="error">{{ userError.errorText }}</span>
		</div>
		<div class="inline mt10">			
			<label>密码：</label>
			<input placeholder="请输入密码" type="password" v-model="password"/>
			<span class="error">{{ passwordError.errorText }}</span>
		</div>
		<input class="mt10" type="button" value="登录" id="login" @click="login"/>
		<p>{{ errorText }}</p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			userName: '',
			password: '',
			errorText: ''
		}
	},
	methods:{
		login(){
			if(!this.userError.status || !this.passwordError.status){
				this.errorText = '部分选项未通过'
			}
			else{
				this.errorText = ''
				console.log('login')
				this.$http.get('api/login')
				.then((res) => {
					this.$emit('has-log',res.data)//传给layout
				},(error) =>{
					console.log(error)
				})
			}
			/*console.log(this.userName + ' ' + this.password)*/
		}
	},
	computed:{
		userError(){
			let errorText, status
			if(!/@/g.test(this.userName)){
				status = false
				errorText = '不包含@'
			}
			else{
				status = true
				errorText = ''
			}
			if(!this.userFlag){
				errorText = ''
				this.userFlag = true
			}
			return {
				status,
				errorText
			}
		},
		passwordError(){
			let errorText, status
			if(!/^\w{1,6}$/g.test(this.password)){
				status = false
				errorText = '密码不是1-6位'
			}
			else{
				status = true
				errorText = ''
			}
			if(!this.passwordFlag){
				errorText = ''
				this.passwordFlag = true
			}
			return{
				status,
				errorText
			}
		}
	}
}
</script>

<style scoped>
.inline label{
	width: 80px;
	text-align: right;
	display: inline-block;
}
.inline input{
	width: 100px;
	padding-left: 5px;
}
.mt10{
	margin-top: 10px;
}
#login{
	border: none;
	background-color: #4fc08d;
	color: white;
	margin-left: 40px;
	cursor: pointer;
	width: 50px;
	height: 30px;
}
.error{
	color: red;
	padding-left: 10px;
}
</style>