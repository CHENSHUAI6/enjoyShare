// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contactList:[
      {
        name: "Hilary Chen",
        position: "ABAP顾问",
        qq: "178057198",
        email: "178057198@qq.com",
        wechatName: "easyStyle6",
      },
      {
        name: "Hilary Chen1",
        position: "ABAP顾问",
        qq: "178057198",
        email: "178057198@qq.com",
        wechatName: "easyStyle6",
      },{
        name: "Hilary Chen2",
        position: "ABAP顾问",
        qq: "178057198",
        email: "178057198@qq.com",
        wechatName: "easyStyle6",
      },{
        name: "Hilary Chen3",
        position: "ABAP顾问",
        qq: "178057198",
        email: "178057198@qq.com",
        wechatName: "easyStyle6",
      },{
        name: "Hilary Chen4",
        position: "ABAP顾问",
        qq: "178057198",
        email: "178057198@qq.com",
        wechatName: "easyStyle6",
      },{
        name: "Hilary Chen5",
        position: "ABAP顾问",
        qq: "178057198",
        email: "178057198@qq.com",
        wechatName: "easyStyle6",
      },
      {
        name: "Demi",
        position: "MM 顾问",
        qq: "1404318263",
        email: "1404318263@qq.com",
        wechatName: "dizhangmen",
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("这里更新数据");
    // 更新

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("底部", this.data);
    const temp = this.data.contactList;
    temp.push({
      name: "yueyue",
      position: "boss",
      qq: "88888888",
      email: "88888@yuer.com",
      wechatName: "yueyue",
    });
    this.setData({
      contactList: temp,
    });
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})