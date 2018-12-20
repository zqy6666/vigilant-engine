/**write.js**/
Page({
  data:{
    defaultSize:'default',
    warnSize: 'default',
    primarySize: 'default',
    disabled:false,
    plain:false,
    loading:false,
  
  },
  // 发送数据给onenet
  sendRequset1: function () {

    wx.request({
      url: 'https://api.heclouds.com/devices/503120343/datapoints?type=3',
      header: {
        "content-type": 'application/json',
        "api-key": 'feVkCC5ekdC7dcFQEXSC2x7DaJk='
      },
      method: "POST",
      data: {
        "a": 1
      },
      // 发送成功后出现提示框，5秒后消失
      success:function(res){
        console.log(res.a)
       wx.showToast({
          title: "正在发送",
          icon: "loading",
          duration: 5000
        });
      }
    })
    
    
  },

  
 
  sendRequset2: function () {
  
    
    wx.request({
      url: 'https://api.heclouds.com/devices/503120343/datapoints?type=3',
      header: {
        "content-type": 'application/json',
        "api-key": 'feVkCC5ekdC7dcFQEXSC2x7DaJk='
      },
      method: "POST",
      data: {
        "a": 2
      },
      success: function (res) {
        console.log(res.a)
        wx.showToast({
          title: "正在发送",
          icon: "loading",
          duration: 5000
        });
      }
    })

    console.log(this.data.a)
   
  },

  
  sendRequset3: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/503120343/datapoints?type=3',
        header: {
        "content-type": 'application/json',
          "api-key": 'feVkCC5ekdC7dcFQEXSC2x7DaJk='
      },
      method: "POST",
        data: {
        "a": 3
      },
      success: function (res) {
        console.log(res.a)
        wx.showToast({
          title: "正在发送",
          icon: "loading",
          duration: 5000
        });
      }
    })
    
    console.log(this.data.a)
    },
})
