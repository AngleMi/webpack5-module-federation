// import Vue from 'vue'
// import App from './app.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const myApp = createApp(App)
myApp.use(ElementPlus)
myApp.mount('#app')
