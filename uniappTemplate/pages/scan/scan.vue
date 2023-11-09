<template>
	<view>
		<!-- 验证码 -->
		<view class="messageInput">
			<text>请输入验证码</text>
			<u-message-input mode="box" :focus="false"></u-message-input>
		</view>
		<!-- 地图 -->
		<view class="map">
			<text>区域地图</text>
			<p>您的位置：经度：{{loca.lat}}, 纬度：{{loca.lon}}</p>
			<view class="map-container">
				<map style="width: 100%; height: 300px;" :latitude="loca.lat" :longitude="loca.lon" :show-compass="true"
					:enable-overlooking="true" :show-location="true" :show-scale="true" :min-scale="3" :max-scale="20"
					:enable-poi="true" :enable-scroll="true" :enable-rotate="true"></map>
			</view>
		</view>
		<xtabbar></xtabbar>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loca: {
					lat: 39.984104,
					lon: 116.307503
				}
			}
		},
		created() {
			this.getLoca();
		},
		mounted() {
			// this.getLoca();
		},
		methods: {
			getLoca() {
				let that = this;
				uni.getLocation({
					type: 'gcj02', // 坐标系类型
					success: function(res) {
						console.log(res.latitude)
						that.loca.lat = res.latitude; // 维度
						that.loca.lon = res.longitude; // 经度
					},
					fail: function(res) {
						console.log('获取定位失败：' + res.errMsg);
					}
				});

			}
		}
	}
</script>

<style scoped>
	.messageInput,
	.map {
		margin-top: 20rpx;
		text-align: center;
	}
</style>