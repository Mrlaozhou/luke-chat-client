<template>
  <div class="screen">
    <img :src="gr.head_img" alt="">
    <input type="text" placeholder="搜索" v-model="searchUser"  class="search">

  </div>
</template>

<script>
  export default {
    name: "screen",
    data(){
      return{
        //搜索值
        searchUser:"",
        // 个人信息
        gr_:""
      }
    },
    //接收个人信息
    props:['gr'],
    updated(){
      //赋值个人信息
      this.gr_ = this.gr
    },
    methods:{
    },
    watch:{
      //检测搜索值变化时传值到父组件
      searchUser:function(){
        this.$emit("getUser",this.searchUser)
      }
    }
  }
</script>

<style scoped lang="less">
  .screen {
    width: ~'calc(100% - 7px)';
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &>img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 20px;
      /*border: 1px solid #999999;*/
    }
    & > input {
      width: 60%;
      height: 25px;
      border-radius: 3px;
      background: #d9dadc;
      font-size: 16px;
      border: none;
      outline: none;
      text-indent: 1em;
    }

  }

</style>
