// pages/activity/page/page.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ZName: '',
    table: [],
  },

  onQuery: function () {
    this.setData({
      table: []
    })
    wx.showLoading({
      title: '加载中',
    })

    // 1. 获取数据库引用
    const db = wx.cloud.database()
    // 2. 构造查询语句
    db.collection('PMP').where({
      ZName: this.data.ZName
    }).get({
      success: res => {
      // 输出 [{ "title": "The Catcher in the Rye", ... }]
      console.log(res.data[0].Content)
      this.setData({
        table: res.data[0].Content
      })
      wx.hideLoading()
    },
    fail: res => {
      console.error
      wx.hideLoading()
    },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
       ZName: options.ZName,
    })
    this.onQuery()
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