<template>
  <div id="app">
    <my-popup
    :visible.sync="popupVisible"
    pop-transition="popup-fade"
    class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">{{tips}}
    </my-popup>
    <my-form></my-form>
    <p class="footer">深圳大学出品</p>
  </div>
</template>

<script>
import { Popup } from 'mint-ui'
import Form from './components/Form.vue'

export default {
  components: {
    'my-popup': Popup,
    'my-form': Form
  },
  data() {
    return {
      popupVisible: false,
      tips: '感谢你参与本次问卷调查！问卷最后请完整填写你的基本信息，所有学生信息仅用于调研分析，不会透漏给任何第三方，请放心填写。'
    }
  }
  // ready() {
  //   var storage = window.localStorage
  //   var token = storage.getItem('Token')
  //   var curMin = new Date().getMinutes()
  //   var flag = Math.abs(token - curMin)
  //   if (token===null||flag>10){
  //     storage.setItem('Token', curMin)
  //     document.location = 'https://ia.szu.edu.cn/cas/login?service=https://szupu.szu.edu.cn/enquiry'
  //   } else {
  //     this.popupVisible = true
  //   }
  // }
}
</script>

<style scoped>
.mint-popup-1 {
        width: 220px;
        border-radius: 5px;
        margin-top: -60px;
        padding: 20px;
        transform: translate(-50%, 0);
        font-size: 18px;
      }
.mint-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
}
.footer{
  color: grey;
  text-align: center;
  font-style: italic;
  font-size: 12px;
}
</style>
