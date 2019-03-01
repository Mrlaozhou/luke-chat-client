<template>
  <div>
    <div class="content">
      <div class="list">
        <screen @getUser="getUserVal" :gr = gr></screen>
        <list :list_ = list_  @getActiveUser="ActiveUser" ></list>
      </div>
      <div class="main">
        <message @sendMsg = 'sendMsg' @success  = 'UploadSuccess' :activeUser = activeUser :gr = gr ref = 'vueMessage'></message>
      </div>
    </div>
    <div class="chat_icon">
      <i v-if="gr.msgLh>99">99+</i>
      <i v-else>{{gr.msgLh}}</i>
      <span v-if="gr" class="iconfont online" @mouseenter="hover_()" @click="open_chat($event.currentTarget)">&#xec7b;</span>
      <span v-else class="iconfont offline" @mouseenter="hover_()" @click="open_chat($event.currentTarget)">&#xec7d;</span>
        <div>
          <div class="OnlineState">
            <span @click="Online()">上线</span>
            <span @click="Offline()">下线</span>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
  import 'jquery'
  import list from "../components/list"
  import screen from "../components/screen"
  import message from "../components/message"

  export default {
    components: { list, screen, message},
    name: "chat",
    data() {
      return {
        // 搜索值
        searchUser:"",
        //当前好友
        activeUser:"",
      }
    },
    methods:{
      //设置在线
      Online(){
        $(".OnlineState").addClass("On_line")
        this.$emit('Online')
      },
      //下线
      Offline(){
        $(".OnlineState").removeClass("On_line")
        this.$emit('Offline')
        var gr = {}
        this.$emit('OnConnetionSuccess',gr)
      },
      //调用message中的设置上传路径方法
      vueMessage(url){
        this.$refs.vueMessage.setUploadUrl(url)
      },
      //调用message中的接收消息方法
      receivdMsg(msg){
        this.$refs.vueMessage.receivdMsg(msg)
      },
      //消息发送
      sendMsg(){
        this.$emit('message_sendMsg')
      },
      //消息滚动
      scroll_bottom() {
       this.$refs.vueMessage.scroll_bottom()
      },
      //上传成功回调
      UploadSuccess(){
        this.$emit('message_UploadSuccess')
      },
      //接收screen的搜索值
      getUserVal(msg){
        this.searchUser=msg;
      },
      // 接收list的当前好友信息
      ActiveUser(msg){
        this.activeUser=msg;
      },
      open_chat(node){
        if($(node).hasClass("online")){
          $(".chat_icon").fadeOut("fast")
          $(".content").fadeIn("fast")
        }

      },
      hover_(){
        $(".chat_icon>div").fadeIn("fast")
        setTimeout(function(){
          $(".chat_icon>div").fadeOut("fast")
        },2000)
      }
    },
    watch:{
      //检测搜索值变化时传值给父组件
      searchUser:function(){
        this.$emit("getUserVal",this.searchUser)
      }
    },
    props:['list_','gr']
  }
</script>

<style  lang="less">
  @font-face {
    font-family: 'iconfont';  /* project id 1063067 */
    src: url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.eot');
    src: url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.woff') format('woff'),
    url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
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
    bottom: 100px;
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
    &>span{
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: 2px 5px 33px 0px grey;
      font-size: 48px;
    }
    .online{
      color: #0096e1;
    }
    .offline{
      color:#dbdbdb;
    }
    &>div{
      width: 100%;
      height: 20px;
      overflow: hidden;
      position: relative;
      bottom: -10px;
      border-radius: 8px;
      display: none;
      &>div{
        width: 100%;
        &>span:nth-of-type(1){
          text-align: center;
          display: block;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          position: relative;
          background: #2CC169;
          color: white;
        }
        &>span:nth-of-type(2){
          text-align: center;
          display: block;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          position: relative;
          background: #DA2F2C;
          color: white;
        }
      }
      .OnlineState{
        position: relative;
      }
      .On_line{
        top:-20px
      }
    }
  }
</style>
