<template>
	<view class="content">
		<!-- 加载动画 -->
		<view class="loading" v-if="isShow">
			<u-loading color="red" :show="isShow"></u-loading>
		</view>
		<view class="wrap" v-else="!isShow">
			<!-- 轮播图 -->
			<u-swiper :list="list"></u-swiper>
			<!-- 骨架屏 -->
			<view class="itemList">
				<xskeleton></xskeleton>
			</view>
		</view>

		<!-- 底部栏 -->
		<xtabbar></xtabbar>
	</view>
</template>

<script>
	import xskeleton from '@/components/xskeleton.vue'
	export default {
		data() {
			return {
				list: ['https://cdn.uviewui.com/uview/swiper/1.jpg', 'https://cdn.uviewui.com/uview/swiper/2.jpg'],
				isShow: true
			}
		},
		onLoad() {

		},
		components: {
			xskeleton
		},
		mounted() {
			setTimeout(() => {
				this.isShow = false
			}, 800)
		}
	}
</script>

<style>
	.loading {
		margin-top: 300rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.wrap {
		width: 100vw;
	}

	.uni-swiper {
		height: 600rpx !important;
	}
</style>