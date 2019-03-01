import Chat from './chat.vue'

const chat={
  install:function (Vue) {
    Vue.component('csChat',Chat)
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(chat)
}
export default chat
