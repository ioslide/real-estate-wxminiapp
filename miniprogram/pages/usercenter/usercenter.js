const app = getApp()
const globalData = getApp().globalData
const log = console.log.bind(console)
const group = console.group.bind(console)
const groupEnd = console.groupEnd.bind(console)
const error = console.error.bind(console)
const db = wx.cloud.database()
const _ = db.command
import create from '../../util/create'
import store from '../../store/index'
const dayjs = require('../../util/day/day.js')
const form = require("../../util/formValidation.js")
import pinyin from "wl-pinyin"
import {
  promisifyAll
} from 'wx-promise-pro'
promisifyAll()
create(store, {
  use: [
    'userInfo'
  ],
  data: {

  },
  navorderdaili(){
    wx.navigateTo({
      url: './orderDaili',
    })
  },
  navUsersetting(){
    wx.navigateTo({
      url: './userSetting',
    })
  },
  navguanzhuHouse(){
    wx.navigateTo({
      url: './guanzhuHouse',
    })
  },
  navRuzhu(){
    wx.navigateTo({
      url: '../ruzhu/ruzhu'
    })
  },
  navzuji(){
    wx.navigateTo({
      url: './houseZuji',
    })
  },
  onLoad: function (options) {
    log()
    const t = this
    let _key = t.store.data.curCity
    let temp = _key + 'userInfo'
    let database = pinyin.getPinyin(temp).replace(/\s+/g, "");
    db.collection(database).where({
      openid: globalData.openid
    }).get()
      .then(res => {
        console.log(res.data[0])
        t.store.data.userInfo = res.data[0]
      })
      .catch(console.error)
  },
  onReady: function () {

  },
  onShow: function () {

  },
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