<template>
	<div id="app">
		<div v-if="father == 'home'" class="home">
			<div class="title">
				<img src="../assets/tip.png" alt="">
				<span>第一周</span>
			</div>
			<div class="start">
				<Router-link to="/answer">
					<img src="../assets/1-4.png" alt="">
				</Router-link>
			</div>
		</div>
		<div v-if="father == 'answer'" >
			<div class="answer">
				<div class="title">
					<img src="../assets/tip.png" alt="">
					<span>{{ti}}</span>
				</div>
				<ul>
					<li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="chooseItem(index,item.topic_answer_id)">
						<span :class="{'active':chooseColor == index}">{{getType(index)}}</span>{{item.answer_name}}</li>
				</ul>
				<div class="clearfix"></div>
				<div v-if="itemNum < itemDetail.length" class="next" @click="addItem">
					<img src="../assets/2-2.png" alt=""> <!-- 下一题 -->
				</div>
				<div v-else class="tijao" @click="submitChoose">
					<img src="../assets/3-1.png" alt=""> <!-- 提交 -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from "vuex"
	export default{
		props:["father"],
		computed:mapState(["itemDetail","itemNum","answerid"]),
		data(){
			return{
				chooseColor:null,
				msg:'',
				num:'',
				ti:'',
				number:''
			}
		},
		methods:{
			...mapActions(["addItem"]),
			getType(index){
				switch(index){
					case 0: return "A";
					case 1: return "B";
					case 2: return "C";
					case 3: return "D";
					break
				}
			},
			chooseItem(index,id){
				this.chooseColor = index
				this.number = id
				console.log(this.number)
			},
			addItem(index){
				if (this.chooseColor == null) {
					alert("请选择")
				} else{
					this.num = this.$store.state.itemNum++
					if (this.num) {
						this.chooseColor = null
					}
					this.ti = this.$store.state.itemDetail[this.num].topic_name
					this.answerid.push(this.number)
				}
			},
			submitChoose(){
				this.answerid.push(this.number)
				this.$router.push('/score')
			}
		}
	}
</script>

<style>
	.active{
		background: #169ff3;
	}
	#app{
		font-size: 0.40rem;
	}
	.home,.answer{
		width: 100%;
		height: 1330px;
		background: url(../assets/1-1.jpg) no-repeat;
		background-size: 100%;
		overflow: hidden;
	}
	.start{
		width: 1.73rem;
		height: 0.84rem;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.title{
		float: right;
		margin-right: 1.2rem;
	}
	.title span{
		position: absolute;
		color: white;
		font-size: 0.25rem;
		z-index: 50;
		margin-top: -0.80rem;
		right: 1.5rem;
	}
	.answer ul{
		margin-top: 3.2rem;
		float: left;
	}
	.answer ul li{
		height: 0.8rem;
		color: white;
		text-align: left;
	}
	.answer ul li span{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		border: 1px solid white;
		border-radius: 50%;
		float: left;
		margin-left: 0.5rem;
		margin-right: 0.3rem;
		text-align: center;
		line-height: 0.5rem;
	}
	.next,.tijao{
		margin-top: 0.5rem;
	}
</style>
