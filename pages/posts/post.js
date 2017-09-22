



Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/images/120_03.jpg",
      "/images/01_03.jpg",
      "/images/23_02.jpg"
    ],
    datalists:[]       //  可省
  },
  jumpTap(event){
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: "../post-news/post-news?id=" + postId
    })
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = require("../../data/posts-data.js").postList;

    this.setData({dataLists:data});     //  key:value   原data中都不用再写  dataLists:[]
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