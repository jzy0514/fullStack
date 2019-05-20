const WXAPI = require('../../wxapi/main');

Page({
  data: {
    goods: [],
    category: [],
    activeCategoryId: 0,
    banners: [],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    goodsRecommend: []
  },
  swiperchange(e) {
    console.log(e.detail.current, '------');
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  onLoad() {
    // 界面容易 
    // 开发的流程和标准 是做一个新或者大项目的必要要
    this.getCategory(); // 类别
    this.getBanners(); // banner
    this.loadGoods(); // 商品列表
    this.getRecommend(); //获取爆款推荐
  },
  getRecommend() {
    WXAPI.loadGoods({
      recommendStatus: 1
    })
    .then(res => {
      if (res.code === 0 ) {
        this.setData({
          goodsRecommend: res.data
        });
      }
    })
  },
  getCategory() {

  },
  getBanners() {
    WXAPI
      .getBanners({
        type: 'new'
      })
      .then(res => {
        console.log(res);
        // 大厂API接口的约定 code 为 0 就是没有问题
        if (res.code === 0) { // 代码严谨
          this.setData({
            banners: res.data
          })
        }
      })
  },
  loadGoods() {

  }
})