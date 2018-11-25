// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(MintUI)

/* eslint-disable no-new */
import './lib/mui/css/mui.css'
//1.引入Header组件
import { Header,Search,Toast,Swipe,SwipeItem,Lazyload } from "mint-ui";
//注册Header组件
Vue.component(Header.name,Header);
Vue.component(Search.name,Search);
Vue.component(Toast.name,Toast);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.use(Lazyload);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
