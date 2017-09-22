

var data = require("../../data/posts-data.js").postList
var app = getApp()    // 加载全局
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStart: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ contId: options.id });
    //console.log(options)        // options 就是上个页面传过来的参数
    data.forEach(item => {
      if (item.postId == options.id) {
        //console.log(item)
        this.setData({ contentData: item })
      }
    });

    // 监听音乐播放和暂停
    this.watchmusic();

    //  收藏和分享
    this.shareCollec();
  },

  watchmusic() {
    if (!app.globleData.g_isStart && app.globleData.g_current === this.data.contId) {   // 判断 g_isStart
      this.setData({
        isStart: false
      })
    }
    wx.onBackgroundAudioPlay(() => {
      this.setData({
        isStart: false
      });
      app.globleData.g_isStart = false   // 改变全局 g_isStart
      app.globleData.g_current = this.data.contId; // 记录正在播放的音乐ID
      console.log(this)
    });
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isStart: true
      })
      app.globleData.g_isStart = true  // 改变全局  g_isStart
      app.globleData.g_current = null;
    });
  },
  shareCollec() {
    // postCollected = {
    //   1:true,
    //   2:false
    // }
    var id = this.data.contId;
    let postCollected = wx.getStorageSync("postCollected");
    if (postCollected) {  // 已有缓存
      var collected = postCollected[id]
      this.setData({
        collected,
      })
    } else {
      postCollected = {};
      postCollected[id] = false;
      wx.setStorageSync("postCollected", postCollected)
    }
  },
  storTap(event) {  //  收藏和取消
    var id = this.data.contId;
    let postCollected = wx.getStorageSync("postCollected");
    postCollected[id] = !postCollected[id]
    wx.setStorageSync("postCollected", postCollected)
    this.setData({
      collected: wx.getStorageSync("postCollected")[id]
    });
    wx.showToast({
      title: postCollected[id] ? '收藏成功！' : '取消成功！',
      duration: 1000
    })
  },
  shareTap(event) {
    wx.showActionSheet({      // 分享
      itemList: [
        "分享到微信好友",
        "分享到朋友圈",
        "分享到QQ",
        "分享到微博",
      ],
      success(res) {
        console.log(res)
        // res.cancel  点取消为true
        // res.tapIndex  数组的索引 从0开始
      }
    })
  },
  vadiuTap(event) {     // 视频播放
    var id = this.data.contId;
    if (this.data.isStart) {
      wx.playBackgroundAudio({      //  播放音乐
        dataUrl: data[id].music.url,
        title: data[id].music.title,
        coverImgUrl: data[id].music.coverImg
      })
    } else {
      wx.pauseBackgroundAudio();    //  暂停
    }
    this.setData({ isStart: !this.data.isStart })  // 取反
  }









})