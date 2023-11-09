<template>
	<view>
		<!-- 上传，获取上传的文件列表 -->
		<view>
			<!-- 关闭自动上传 -->
			<!-- 同时限制图片大小和数量 -->
			<u-upload ref="uUpload" :action="action" :file-list="fileList" :auto-upload="false"
				:max-size="5 * 1024 * 1024" max-count="6"></u-upload>
			<u-button @click="submit">提交</u-button>
			<u-button @click="clear">清空</u-button>
		</view>
		<xtabbar></xtabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: 'yourserver',
				fileList: [], //显示预置的照片
			}
		},
		methods: {
			submit() {
				let files = [];
				files = this.$refs.uUpload.lists;
				console.log(files)
				// 打印文件列表
				this.$refs.uUpload.upload();
				// 调用upload, 手动上传
			},
			clear() {
				this.fileList = []
				// 调用clear, 手动清空
				this.$refs.uUpload.clear();
			}
		}
	}
</script>

<style>

</style>