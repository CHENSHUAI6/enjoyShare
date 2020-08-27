Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: '../../images/',
    search: '',
    filterId: 1,
    searchWords: '',
    placeholder: '请输入模块名,表名或相关表描述',
    table: [],
    total: 0,
    time: 0,
    max_limit: 10,
  },

  inputSearch: function(e) {
    this.setData({
      search: e.detail.value
    })
  },

  onQuery: function() {
    this.setData({
      table: []
    })
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      // 云函数名称
      name: 'TableQuery',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
        search: this.data.search
      },
      success: res => {
        this.setData({
          table: res.result.data
        })
        console.log(res.result) // 3
        wx.hideLoading()
      },
       // fail: console.error
       fail: res => {
        console.error
        wx.hideLoading()
      },
    })

    // const db = wx.cloud.database()
    // // 查询当前用户所有的 counters
    // const _ = db.command 
    // console.log('[数据库] [查询记录] 成功: ', this.data.search)
    // db.collection('sap_dataset').where(_.or([
    //   {
    //     //使用正则查询，实现对搜索的模糊查询
    //     module: {
    //       $regex: '.*' + this.data.search + '.*',
    //       //从搜索栏中获取的value作为规则进行匹配。
    //       $options: 'i',
    //       //大小写不区分
    //     },
    //   },
    //   {
    //     //使用正则查询，实现对搜索的模糊查询
    //     table_name: {
    //       $regex: '.*' + this.data.search + '.*',
    //       //从搜索栏中获取的value作为规则进行匹配。
    //       $options: 'i',
    //       //大小写不区分
    //     },
    //   },
    //   {
    //     //使用正则查询，实现对搜索的模糊查询
    //     desctibe: {
    //       $regex: '.*' + this.data.search + '.*',
    //       //从搜索栏中获取的value作为规则进行匹配。
    //       $options: 'i',
    //       //大小写不区分
    //     },
    //   }
    // ])).get({
    //   success: res => {
    //     this.setData({
    //       table: res.data
    //     })
    //     console.log('[数据库] [查询记录] 成功: ', this.data.table)
    //   },
    //   fail: err => {
    //     wx.showToast({
    //       icon: 'none',
    //       title: '查询记录失败'
    //     })
    //     console.error('[数据库] [查询记录] 失败：', err)
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //this.onQuery()
    //检查是否存在新版本
    wx.getUpdateManager().onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log("是否有新版本：" + res.hasUpdate);
      if (res.hasUpdate) {//如果有新版本

        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateReady(function () {//当新版本下载完成，会进行回调
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，单击确定重启应用',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                wx.getUpdateManager().applyUpdate();
              }
            }
          })

        })

        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateFailed(function () {//当新版本下载失败，会进行回调
          wx.showModal({
            title: '提示',
            content: '检查到有新版本，但下载失败，请检查网络设置',
            showCancel: false,
          })
        })
      }
    });
  },

  copyText: function(even){
    var text_id = even.currentTarget.dataset.id
    //console.log(even)
    //console.log(text_id)
    wx.setClipboardData({
      data: text_id,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }

  
})