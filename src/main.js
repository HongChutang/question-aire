import Vue from 'vue'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import App from './App'

Vue.use(VueResource)

new Vue({
  el: 'body',
  components: { App }
})
