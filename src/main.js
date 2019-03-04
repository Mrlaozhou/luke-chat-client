import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';

Vue.prototype.$console      =   function  (title, ...data) {
    console.log( 'luke-chat: '+title, ...data );
};

new Vue({
    el: '#app',
    render: h => h(App2),
})
