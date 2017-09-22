Page({
  onTap(){
    //console.log("onTap")
    // wx.navigateTo({         
    //   url: '../posts/post',     // 进入子导航
    // });

    wx.redirectTo({
      url: '../posts/post',    //  进入同级的另一个页面
    })

  },














  /**
 * 生命周期函数--监听页面隐藏
 */
  onHide: function () {
     // console.log("onhide")   // 进入子导航后上一个页面被隐藏
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   // console.log("onload")     // 进入同级的另一个页面  该页被卸载  wx.redirectTo
  }, 
})