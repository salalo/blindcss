import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import { store } from './store/store.js';
import io from 'socket.io-client';
import VueSocketio from 'vue-socket.io-extended';

Vue.config.productionTip = false;

Vue.use(VueSocketio, io('http://localhost:8081'));

new Vue({
  router,
  store,
  render: h => h(App)
  // sockets: {
  //   connect() {
  //     console.log('socket connected');
  //   },
  //   socket_id(id) {
  //     console.log('ID:', id);
  //   },
  //   message(msg) {
  //     console.log('msg:', msg);
  //   }
  // },
  // methods: {
  //   clickButton(val) {
  //     // this.$socket is `socket.io-client` instance
  //     this.$socket.emit('emit_method', val);
  //   }
  // }
}).$mount('#app');
