<template>
	<view>
		<view class="empty">
			<u-empty text="没有优惠券" icon-size="150rpx" mode="coupon"></u-empty>
		</view>
		<xtabbar></xtabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.empty {
		overflow: hidden;
		margin-top: 200rpx;
	}
</style>