<template>
	<div>		
		<div class="dialog-container" v-if="isShow">
			<div class="cover" @click="closeDialog"></div>
			<div class="content">
				<p class="close" @click="closeDialog">x</p>
				<slot>empty</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		isShow: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return {
			msg: "aaa"
		}
	},
	methods:{
		closeDialog(){
			this.$emit("on-close")
		}
	}
}
</script>

<style scoped>
.dialog-container{
	position: fixed;
	height: 100%;
	width: 100px;
}

.dialog-container .cover{
	opacity: .3;
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
}

.dialog-container .content{
	width: 50%;
	position: fixed;
	max-height: 50%;
	overflow: auto;
	background: #fff;
	top: 20%;
	left: 50%;
	margin-left: -25%;
	z-index: 10;
	border: 2px solid #464068;
	padding: 2%;
	line-height: 1.6;
}

.close{
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
</style>
