// pages/detail/detail.js
import util from '../../utils/index'
import WxParse from '../../lib/wxParse/wxParse.js';
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
    const id = options.contentId
    this.init(id);
  },
  init(id) {
    // console.log(id);
    this.requsetDetail(id)
    .then(res => {
      console.log(res)
      const content = res.data.data.content
      WxParse.wxParse('article', 'html', content, this, 5);
    })
  },
  requsetDetail(id) {
    // Promise.all([p1, p2]) => p ---  接受一个对promise的数组, 都会返回一个p
    // Promise.race([p1, p2]) => p1/p2谁快就是谁 ---  看谁前resolve就是谁
    return new Promise((resolve, reject) => {
      util.request({
        mock: true,
        url: 'detail'
      })
      .then(res => resolve(res))
    })
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