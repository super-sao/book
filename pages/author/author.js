// pages/author/author.js
var app = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// console.log(options.author)
		let tmpThis = this

		app.getAuthor().then(res => {
			for (const i of app.globalData.author) {
				if (i.name == options.author) {
					tmpThis.setData({
						authorInfo: i
					})
				}
			}
			// console.log(tmpThis.data.authorInfo)
		});
		app.getBookList().then(res => {
			let tmpArr = []
			for (const i of app.globalData.bookList) {
				if (i.writername == options.author) {
					tmpArr.push(i)
				}
			}
			tmpThis.setData({
				bookList: tmpArr
			})
			// console.log(tmpThis.data.bookList)

		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})