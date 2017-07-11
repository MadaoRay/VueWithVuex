<template>
	<div>
		<input class="mt10" type="button" value="注册" id="register" />
	</div>
</template>

<script>
export default{
	data(){
		return{
			msg: ""
		}
	}
}
</script>

<style>
#register{
	border: none;
	background-color: #4fc08d;
	color: white;
	margin-left: 40px;
	cursor: pointer;
	width: 50px;
	height: 30px;
}
</style>
