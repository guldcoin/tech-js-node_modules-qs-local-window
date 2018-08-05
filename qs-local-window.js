/* global localStorage:false */

window.qsLocalWindow = {
  parseQS: function () {
    var args = {}
    window.location.search.replace('?', '').split('&').forEach(v => {
      var val = v.split('=')
      args[val[0]] = val[1]
    })
    return args
  },
  getValue: function (key, qs, defaultVal = undefined) {
    if (!window.hasOwnProperty(key)) {
      qs = qs || window.qsLocalWindow.parseQS()
      if (qs.hasOwnProperty(key)) {
        localStorage.setItem(key, qs[key])
        window[key] = qs[key]
      } else {
        try {
          window[key] = localStorage.getItem(key) || defaultVal
        } catch (e) {
          window[key] = defaultVal
        }
      }
    }
    return window[key]
  }
}
