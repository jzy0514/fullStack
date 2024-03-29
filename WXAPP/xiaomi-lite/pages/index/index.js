//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isTap: false,
    index_slides: [],
    indicator_dots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
  //事件处理函数
  onLoad() {
    const index_slides = app.globalData.index_slides,
      nav_data=app.globalData.nav_data,
      index_activity=app.globalData.index_activity,
      index_block = app.globalData.index_block,
      sectionList = index_block.map((section) => {
        return section.section;
      })
    // console.log(nav_data);
    this.setData({
      index_slides,
      nav_data,
      index_activity,
      index_block,
    });

  },
})