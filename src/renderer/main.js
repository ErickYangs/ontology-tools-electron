import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import './assets/reset.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
import * as http from '@/api/role'
Vue.use(ElementUI)
import enLang from './lang/en'
import zhLang from './lang/zh'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.prototype.$http = http

const i18n = new VueI18n({
  locale: localStorage.getItem('user_lang') || 'en',
  messages: {
    zh: {
      ...zhLang,
      ...zhLocale
    },
    en: {
      ...enLang,
      ...enLocale
    }
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value))


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
