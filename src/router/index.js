import VueRouter from 'vue-router';
import MainPage from "../components/MainPage.vue";
import news from "../components/news.vue";
import products from "../components/products.vue";
import buy from "../components/buy.vue"


export default new VueRouter({
	routes:[
		{
			path:"/",
			component: MainPage
		},
		{
			path:"/home",
			component: MainPage
		},
		{
			path:"/news",
			component: news
		},
		{
			path:"/products",
			component: products
		},
		{
			path:"/buy/:id",
			component: buy
		},
	]
})