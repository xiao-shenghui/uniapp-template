import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		list: [{
				pagePath: "/pages/index/index",
				iconPath: "home",
				selectedIconPath: "home-fill",
				text: '首页',
				count: 2,
				isDot: true,
				customIcon: false,
			},
			{
				pagePath: "/pages/save/save",
				iconPath: "photo",
				selectedIconPath: "photo-fill",
				text: '省钱',
				customIcon: false,
			},
			{
				pagePath: "/pages/scan/scan",
				iconPath: "/static/scan.png",
				selectedIconPath: "/static/scan-selected.png",
				text: '扫码',
				midButton: true,
				customIcon: false,
			},
			{
				pagePath: "/pages/money/money",
				iconPath: "play-right",
				selectedIconPath: "play-right-fill",
				text: '钱包',
				customIcon: false,
			},
			{
				pagePath: "/pages/user/user",
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '个人中心',
				count: 23,
				isDot: false,
				customIcon: false,
			},
		],
	}
})

export default store