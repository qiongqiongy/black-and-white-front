// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './store/global';
import { Row, Col,NavBar,Cell, CellGroup } from 'vant';
import './common/css/style.css';

Vue.use(Row).use(Col).use(NavBar).use(Cell).use(CellGroup);
Vue.config.productionTip = false

Vue.prototype.GLOBAL = global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
