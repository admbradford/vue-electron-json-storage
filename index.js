module.exports = {
  install: function (Vue) {
    Vue.prototype.$storage = require('electron-json-storage')
  }
}
