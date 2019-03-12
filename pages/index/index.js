//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://dpic.tiankong.com/22/pu/QJ6271717243.jpg',
      'https://dpic.tiankong.com/6h/m0/QJ6748122403.jpg',
      'https://dpic.tiankong.com/d1/kd/QJ8128775622.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [{ logo: 'https://dpic.tiankong.com/ms/sm/QJ6951370763.jpg', title: '房贷标题', desc: '房贷内容' }, { logo: 'https://dpic.tiankong.com/ms/sm/QJ6951370763.jpg', title: '房贷标题', desc: '房贷内容' }, { logo: 'https://dpic.tiankong.com/ms/sm/QJ6951370763.jpg', title: '房贷标题', desc: '房贷内容' }, { logo: 'https://dpic.tiankong.com/ms/sm/QJ6951370763.jpg', title: '房贷标题', desc: '房贷内容' }]
  },
  onLoad: function () {

  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  },
  
  aaa: function(){}
})
