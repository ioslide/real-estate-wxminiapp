module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1618370930977, function(require, module, exports) {
function e(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function t(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function o(o){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(t){e(o,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))}))}return o}var a=["canvasGetImageData","canvasPutImageData","canvasToTempFilePath","setEnableDebug","startAccelerometer","stopAccelerometer","getBatteryInfo","getClipboardData","setClipboardData","startCompass","stopCompass","addPhoneContact","startGyroscope","stopGyroscope","startBeaconDiscovery","stopBeaconDiscovery","getBeacons","startLocalServiceDiscovery","stopLocalServiceDiscovery","startDeviceMotionListening","stopDeviceMotionListening","getNetworkType","makePhoneCall","scanCode","getSystemInfo","vibrateShort","vibrateLong","getExtConfig","chooseLocation","getLocation","openLocation","chooseMessageFile","loadFontFace","chooseImage","previewImage","getImageInfo","saveImageToPhotosAlbum","compressImage","chooseVideo","saveVideoToPhotosAlbum","downloadFile","request","connectSocket","closeSocket","sendSocketMessage","uploadFile","login","checkSession","chooseAddress","authorize","addCard","openCard","chooseInvoice","chooseInvoiceTitle","getUserInfo","requestPayment","getWeRunData","showModal","showToast","hideToast","showLoading","hideLoading","showActionSheet","pageScrollTo","startPullDownRefresh","stopPullDownRefresh","setBackgroundColor","setBackgroundTextStyle","setTabBarBadge","removeTabBarBadge","showTabBarRedDot","hideTabBarRedDot","showTabBar","hideTabBar","setTabBarStyle","setTabBarItem","setTopBarText","saveFile","openDocument","getSavedFileList","getSavedFileInfo","removeSavedFile","getFileInfo","getStorage","setStorage","removeStorage","clearStorage","getStorageInfo","closeBLEConnection","closeBluetoothAdapter","createBLEConnection","getBLEDeviceCharacteristics","getBLEDeviceServices","getBluetoothAdapterState","getBluetoothDevices","getConnectedBluetoothDevices","notifyBLECharacteristicValueChange","openBluetoothAdapter","readBLECharacteristicValue","startBluetoothDevicesDiscovery","stopBluetoothDevicesDiscovery","writeBLECharacteristicValue","getHCEState","sendHCEMessage","startHCE","stopHCE","getScreenBrightness","setKeepScreenOn","setScreenBrightness","connectWifi","getConnectedWifi","getWifiList","setWifiList","startWifi","stopWifi","getBackgroundAudioPlayerState","playBackgroundAudio","pauseBackgroundAudio","seekBackgroundAudio","stopBackgroundAudio","getAvailableAudioSources","startRecord","stopRecord","setInnerAudioOption","playVoice","pauseVoice","stopVoice","getSetting","openSetting","getShareInfo","hideShareMenu","showShareMenu","updateShareMenu","checkIsSoterEnrolledInDevice","checkIsSupportSoterAuthentication","startSoterAuthentication","navigateBackMiniProgram","navigateToMiniProgram","setNavigationBarTitle","showNavigationBarLoading","hideNavigationBarLoading","setNavigationBarColor","redirectTo","reLaunch","navigateTo","switchTab","navigateBack"];Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))});var r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(a,r){e(o({fail:r,success:a},t))}))}},n=function(){wx.pro={},Object.keys(wx).forEach((function(e){a.indexOf(e)>=0?wx.pro[e]=r(wx[e]):"createSignal"!==e&&(wx.pro[e]=wx[e])}))};if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'promisify', { enumerable: true, configurable: true, get: function() { return r; } });Object.defineProperty(exports, 'promisifyAll', { enumerable: true, configurable: true, get: function() { return n; } });
//# sourceMappingURL=wx-promise-pro.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1618370930977);
})()
//# sourceMappingURL=index.js.map