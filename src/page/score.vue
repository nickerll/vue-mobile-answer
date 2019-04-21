<template>
	<div>
		总分:{{score}}
		<p>
			{{evaluate}}
		</p>
	</div>
</template>

<script>
	/**
	 * 取到每一道选中的题
	 * 然后把它们对应的id与正确答案的id相比较
	 * 给每道题固定分值把id相对应的相加起来得出总分
	 */
	import Item from "../components/item.vue"
	import {mapState} from "vuex"
	export default{
		computed:mapState(["answerid"]),
		data(){
			return{
				score:0,
				rightAnswer:[2,7,12,13,18],
				evaluate:""
			}
		},
		methods:{
			getNumber(){
				this.answerid.forEach((item,index)=>{
					if(item == this.rightAnswer[index]){
						this.score += 20
						if(this.score >= 60){
							this.evaluate = "great"
						}else{
							this.evaluate = "继续努力"
						}
					}
				})
			}
		},
		mounted(){
			this.getNumber()
		}
	}
</script>

<style>
</style>
