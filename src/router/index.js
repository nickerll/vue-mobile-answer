import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
	  {
		path:'/',
		name:'App',
		component:App,
		children:[
				{
					path:'/home',
					name:'home',
					component:r => require.ensure([], () => r(require('@/page/home')),'home')
				},
				{
					path:'/answer',
					name:'answer',
					component:r => require.ensure([], () => r(require('@/page/answer')),'answer')
				},
				{
					path:'/score',
					name:'score',
					component:r => require.ensure([], () => r(require('@/page/score')),'score')
				}
		]
	  }
  ]
})
