<template>
  <div>
    <div class="content">
      <div class="list">
        <screen @getMessage="getVal" :gr = gr></screen>
        <list :list_ = list_ @active_lists="getActiveList" ></list>
      </div>
      <div class="main">
        <message :active_list = active_list :gr = gr></message>
      </div>
    </div>
    <div class="chat_icon" @click="open_chat()">
      <i v-if="gr.msgLh>99">99+</i>
      <i v-else>{{gr.msgLh}}</i>
      <img src="../../static/imgs/chat.png" alt="">
    </div>
  </div>

</template>

<script>
  // import sid from "../components/sidebar"
  import list from "../components/list"
  import screen from "../components/screen"
  import message from "../components/message"

  export default {
    components: { list, screen, message},
    name: "chat",
    data() {
      return {
        Message:"",
        active_list:"",
      }
    },
    methods:{
      getVal(msg){
        this.Message=msg;
      },
      getActiveList(msg){
        this.active_list=msg;
      },
      open_chat(){
        $(".chat_icon").fadeOut("fast")
        $(".content").fadeIn("fast")
      }
    },
    watch:{
      Message:function(){
        this.$emit("getMessage",this.Message)
      }
    },
    props:['list_','gr']
  }
</script>

<style scoped lang="less">
  .content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 850px;
    height: 600px;
    background: #999999;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 2px 5px 33px 0px grey;
    z-index: 999;
    display: none;
    .sidebar {
      float: left;
      width: 70px;
      color: #f4f4f4;
      background-color: #2e3238;
      padding: 15px 8px;
      box-sizing: border-box;
    }
    .list {
      float: left;
      width: 260px;
      height: 100%;
      background: #F9F9F9;

    }

    .main {
      height: 100%;
      width: 590px;
      position: relative;
      background-color: #eee;
      float: left;
      .title {
        width: 500px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dbdbdb;
        padding: 0 9.5px;
        & > span {
          font-size: 16px;
          display: inline-block;
          max-width: 85%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        & > img {
          width: 25px;
        }
      }
    }
  }
  .chat_icon{
    cursor: pointer;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    /*overflow: hidden;*/
    &>i{
      position: absolute;
      max-width:40px;
      padding: 0 8px;
      background: red;
      border-radius: 10px;
      top: -5px;
      right: -20%;
      color: white;
      text-align: center;
      font-size: 12px;
      font-style: normal;
    }
    &>img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: 2px 5px 33px 0px grey;
    }
  }
</style>
