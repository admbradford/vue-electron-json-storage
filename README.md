# vue-electron-storage
> A vue plugin that wraps [electron-json-storage](https://github.com/jviotti/electron-json-storage) APIs to the Vue object.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Installing
Install using NPM
```
npm install vue-electron-json-storage --save
```

Include using webpack or browserify

**main.js**
```js
import Vue from 'vue'
import VueElectronJSONStorage from 'vue-electron-json-storage'

Vue.use(VueElectronJSONStorage)
```

## Using the plugin
This plugin will attach electron-json-storage APIs to the Vue object itself, so accessing all APIs is dead simple. All official documentation from electron-json-storage can be used and accessed from `this.$storage`.

So instead of...
```js
const storage = require('electron-json-storage')

export default {
  methods: {
    getName () {
      storage.get('name', (err, data) => {
        if (err) {
          console.error(err)
        } else {
          console.log(data)
        }
      })
    }
  }
}
```

Now you can...

```js
export default {
  methods: {
    getName () {
      this.$storage.get('name', (err, data) => {
        if (err) {
          console.error(err)
        } else {
          console.log(data)
        }
      })
    }
  }
}
```

Now you might be thinking, "Is it really that annoying to simply require electron to access it?" Probably not, but it can get cumbersome to have to include it in every component file that needs it. In the end, attaching electron-json-storage directly to Vue just makes sense.
