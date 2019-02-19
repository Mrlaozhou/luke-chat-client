<template>
  <div class="screen">
    <img :src="gr.head_img" alt="">
    <input type="text" placeholder="搜索" v-model="message"  class="search">

  </div>
</template>

<script>
  export default {
    name: "screen",
    data(){
      return{
        message:"",
        gr_:""
      }
    },
    props:['gr'],
    updated(){
      this.gr_ = this.gr
    },
    methods:{
      // setUser(){
      //   this.$emit("transferUser",this.message)
      // }
    },
    watch:{
      message:function(){
        this.$emit("getMessage",this.message)
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
