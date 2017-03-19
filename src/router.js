import Form from './components/Form.vue'
module.exports = function(router){
  router.transitionOnLoad = true
  router.map({
    '/form': {
      component: Form
    }
  })
}
