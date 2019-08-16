//index.js
//获取应用实例
import util from '../../utils/index';
const app = getApp()

Page({
  data: {
    articleList: []
  },
  onLoad: function () {
    this.requestArticle();
  },
  requestArticle() {
    // 分页请求
    // page ++
    util.request({
      mock: true,
      url: 'list',
      // page,
      // pageSize: 4
    })
    .then(res => {
      // 正常
      let articleList = res.data.data;

      articleList = this.formatArticle(articleList)
      console.log(articleList);
      // 本地缓存
      // 把标记过的属性拿出来 拿到所有文章 判断一下
      // requestArticle 加上hsaVisited 属性
      let oldArticleList = this.data.articleList;
      let newarticleList = oldArticleList.concat(articleList)
      this.setData({
        articleList: newarticleList
      })
    })
    .catch((e) => {
      // 
      console.log(e)
    })
  },
  formatArticle(articleList) {
    let visitedID = wx.getStorageSync('visitedID') || [];
    // 根据一份数据 来返回另一份数据 一般使用 map
    articleList = articleList.map((group => {
      group.articles = group.articles.map(item => {
        if (visitedID.includes(item.contentId)) {
          item.hasVisited = true
        }
        return item
      })
      return group
    }))
    return articleList
  },
  showDetail(e) {
    // 标记为已经阅读过的  --->  contentId
    let item = e.target.dataset.item      // 获取数据
    const contentId = item.contentId      // 获取数据中的ID属性
    let visitedID = wx.getStorageSync('visitedID') || [];
    // 1  includes find findIndex
    if (visitedID.includes(contentId)) {
      visitedID.push(contentId)
    }
    wx.setStorageSync('visitedID', visitedID)      // 将数据存储在本地缓存中指定的 key 中
    wx.navigateTo({     //  跳转页面
      url: `../detail/detail?contentId=${contentId}`
    })
    // 设置本地缓存
    // 跳转到另一个页面
  },
  onReachBottom() {
    this.requestArticle();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
