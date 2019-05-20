// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameDate: [
      {
      id: 'd22',
      time: '05月15日'
      },
      {
        id: 'd23',
        time: '05月13日'
      },
      {
        id: 'd24',
        time: '05月24日'
      },
      {
        id: 'd25',
        time: '06月7日'
      },
    ],
    gameResult: [{
      id: 'd22',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
      leftgrade: 119,
      leftname: '开拓者',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      rightgrade: 120,
      rightname: '勇士',
    },
    {
      id: 'd23',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
      leftgrade: 90,
      leftname: '76人',
      rightteam: "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
      rightgrade: 92,
      rightname: '猛龙',
    },
    {
      id: 'd24',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      leftgrade: 118,
      leftname: '勇士',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
      rightgrade: 113,
      rightname: '火箭',
    },
    {
      id: 'd25',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      leftgrade: 95,
      leftname: '勇士',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
      rightgrade: 89,
      rightname: '雄鹿',
    }],
    current: 0,
    agenda: {},
  },
  turnLeft() {
    // es6 解构 var a = [1,2,3]
    // const [qq, bb, cc] = a;
    let {current} = this.data;
    if (current <= 0) return false;
    current--;
    this.setData({
      current
    })
    this.handleAgendDate();
  },
  turnRight() {
    let {current, gameDate} = this.data;
    if (current >= gameDate.length - 1) return; 
    current++;
    this.setData({
      current
    })
    this.handleAgendDate();
  },
  handleAgendDate() {
    // date:时间的数组  result:比赛成绩数组 id
    let {current, gameResult, gameDate} = this.data;
    let {id} = gameDate[current];
    // find是数组的api
    const agenda = gameResult.find(item => id === item.id);
    if (agenda) {
      this.setData({
        agenda
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.handleAgendDate();
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