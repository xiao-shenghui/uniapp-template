<template>
	<view>
		<!-- 常见的个人中心 -->
		<view class="content">
			<view class="box">
				<view class="avatar">
					<u-avatar :src="user.avatar" mode="square"></u-avatar>
					<view>
						<span>魔法学徒</span>
						<p>用户ID: {{user.userid}}</p>
					</view>
				</view>
				<text class="personal">个性签名：{{user.userSign}}</text>
			</view>
			<view class="box magic">
				<view>
					<text>剩余魔法次数: </text>
					<text class="count">{{ user.count }}</text>
					<text>次</text>
					<text class="help">@</text>
					<p>开通会员获得海量次数和全部特权</p>
				</view>
				<button>开通会员</button>
			</view>
			<view class="box res">
				<h4 class="restore">魔法回复站</h4>
				<u-cell-item class="box boxnone" icon="share" title="分享给新用户 +1 次" :arrow="true" arrow-direction="right"
					value="今日 0/1">
				</u-cell-item>
				<u-cell-item class="box boxnone" icon="play-circle" title="手机观看广告 +1 次" :arrow="true"
					arrow-direction="right" value="今日 0/10"></u-cell-item>
			</view>

			<u-cell-item class="box" icon="edit-pen" title="生成记录小本本" :arrow="true" arrow-direction="right">
			</u-cell-item>
			<u-cell-item class="box" icon="clock" title="支付记录" :arrow="true" arrow-direction="right">
			</u-cell-item>
			<u-cell-item class="box" icon="kefu-ermai" title="联系客服" :arrow="true" arrow-direction="right">
			</u-cell-item>
			<u-cell-item class="box" icon="question-circle" title="关于我们" :arrow="true" arrow-direction="right">
			</u-cell-item>

		</view>
		<xtabbar></xtabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F89e0676b-c0c3-4959-bbed-bc1cf0470250%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700478288&t=77176fa6bf0894710ce16be5b58a6194',
					userid: 'sdadssada',
					userSign: '大脑放空，AI填充 ------',
					count: 0
				}
			}
		},
		onShow() {

		},
		methods: {},
	}
</script>

<style>
	page {
		background-color: #ededed;
	}
</style>
<style lang="scss" scoped>
	.content {
		padding: 10rpx;
	}

	.restore {
		font-weight: 900;
		color: #34ccdd;
		font-size: 36rpx;
		margin: 20rpx 0 0 20rpx;
		padding-top: 10rpx;
	}

	.box {
		padding: 20rpx;
		background-color: #fff;
		border-radius: 12rpx;
		margin: 8rpx 0;
	}

	.pbnone {
		padding-bottom: 0;
		padding-top: 0;
	}

	.u-avatar {
		margin-right: 20rpx;
		border: 1px solid #34ccdd;
	}

	.avatar {
		display: flex;
		align-items: flex-end;
		margin-bottom: 6rpx;
		font-size: 30rpx;
	}

	.avatar p {
		font-size: 24rpx;
		margin-top: 10rpx;
	}

	.avatar p text {
		margin-right: 20rpx;
	}

	.avatar span {
		// color: #272822;
		color: #34ccdd;
		font-weight: 900;
		animation: changeColor 5s linear infinite;
	}

	.magic {
		// , #fc8bab,
		background: linear-gradient(to right, #f28f3f, #fc57a8, #ca53ff, #34ccdd);
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		padding: 30rpx;
	}

	@keyframes changeColor {
		from {
			filter: hue-rotate(0deg);
		}

		50% {
			filter: hue-rotate(365deg);
		}

		to {
			filter: hue-rotate(0deg);
		}
	}

	.magic:hover {
		animation: magic 1s linear infinite;
	}


	.magic p {
		margin-top: 16rpx;
	}

	.magic text {
		font-size: 36rpx;
		font-weight: 900;
	}

	.help {
		margin-left: 20rpx;
	}

	.count {
		color: #34ccdd;
		font-weight: 900;
		margin: 0 16rpx;
		font-size: 36rpx;
	}

	.personal {
		font-size: 25rpx;
	}

	button {
		margin: 0;
		height: 50rpx;
		line-height: 50rpx;
		font-weight: bold;
		font-size: 28rpx;
		background-color: #fff;
		color: #34ccdd;
		border-radius: 30rpx;
	}

	.u-cell {
		background-color: #fff !important;
		border: none;
	}

	.boxnone {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
		box-shadow: none !important;
	}

	.res {
		padding: 0;
	}
</style>