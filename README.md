# chat

> 一个简单的聊天组件


## 安装

``` bash
npm i chat_19
# 在main.js引入
import chat from "chat_19"
Vue.use(chat)
##  使用
<template>
  <div id="app">
    <csChat
      :list_=user_list
      :gr=gr
      @getUserVal="getSearchUserVal"
      @message_UploadSuccess='UploadSuccess'
      @message_sendMsg='OnMessageSend'
      @Online = 'Online'
      @Offline = 'Offline'
      @OnConnetionSuccess = "OnConnetionSuccess"
      ref="vueChat"
    ></csChat>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      gr: "",
      user_list: '',
      searchUser: ""
    }
  },
  watch: {
    //搜索
    searchUser: function () {
      var self = this;
      self.lists = [];
      $.each(this.user_list, function (k, v) {
        var item = v
        if (v.name.indexOf(self.searchUser) != -1) {
          self.lists.push(v)
        }
      })
    }
  },
  methods: {
    //用户下线
    Offline(){
      alert("下线")
    },
    //用户上线
    Online(){
      this.OnConnetionService("/package.json")
    },
    // 初始化
    OnConnetionService(url) {
      var self = this;
      self.Connect("get", url, "", function (res) {
        self.$refs.vueChat.Online()
        self.OnConnetionSuccess()
        //模拟接收系统消息
        var timer1 = setTimeout(function () {
          self.OnmessageReceivd(
            {
              type: "tips",
              text: "下午8:33",
              head_img: "",
            })
        }, 2000);
        // 模拟接收普通消息
        var timer2 = setTimeout(function () {
          self.OnmessageReceivd(
            {
              type: "receive",
              text: "你好",
              head_img: "../../static/imgs/dog.png",
            },
          )
        }, 3000)
        //模拟接收文件消息
        var timer3 = setTimeout(function () {
          self.OnmessageReceivd(
            {
              type: "receive_",
              percent:"",
              img_file:false,
              name:"文件.zip",
              size:20
            }
          )
        }, 4000)
        //模拟接收图片消息
        var timer4 = setTimeout(function () {
          self.OnmessageReceivd(
            {
              type: "receive_",
              text: "../../static/imgs/thomas.jpg",
              file: "",
              img_file: true,
            }
          )
        }, 5000)
      })
    },
    //成功回调(设置个人信息跟好友列表)
    OnConnetionSuccess() {
      var self = this;
      //个人信息
      self.gr = {
        userId: "4",
        head_img: '../../static/imgs/dog.png',
        name: 'gogo',
        msgLh: "200"
      }
      // 好友列表
      self.user_list = [
        {
          userId: "1",
          head_img: '../../static/imgs/thomas.jpg',
          name: '你好你好你好',
          time: '下午7:20',
          last_message: "实施以来，深圳控烟执法部门已经对8万多名个人进行了处罚，但对经营场所的罚单只开出了",
          msgLength: "100",
          online:false,
          Message_record: [
            {
              type: "tips",
              content: "下午8:33",
            },
            {
              type: "receive",
              text: "你好",
            },
            {
              type: "tips",
              text: "啦啦啦啦啦，啦啦啦，啦啦啦啦啦，没写,加入了群聊",
            },
            {
              type: "receive_",
              text: "../../static/imgs/wj.png",
              percent: "",
              file: "",
              img_file: false,
              name: "文件.zip",
              size: 20
            },
            {
              type: "receive_",
              text: "../../static/imgs/thomas.jpg",
              file: "",
              img_file: true,
            },
            {
              type: "receive",
              text: "你好face[kun]face[kun]哈哈哈face[huaixiao]",
            },
            {
              type: "send",
              text: "实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一",
            }
          ]
        },
        {
          userId: "2",
          head_img: '../../static/imgs/dog.png',
          name: '啦啦',
          time: '下午7:21',
          last_message: "场所“罚不动”，成为控烟执法的一大难",
          msgLength: "9",
          online:true,
          Message_record: [
            {
              type: "tips",
              text: "下午7:33",
              head_img: "",
            },
            {
              type: "receive",
              text: "你好",
              head_img: "../../static/imgs/dog.png",
            },
            {
              type: "tips",
              text: "啦啦啦啦啦，啦啦啦，啦啦啦啦啦，没写,加入了群聊",
              head_img: "",
            },
            {
              type: "receive_",
              head_img: "../../static/imgs/dog.png",
              text: "../../static/imgs/wj.png",
              percent: "",
              img_file: false,
              name: "文件.zip",
              size: 20
            },
            {
              type: "receive_",
              text: "../../static/imgs/thomas.jpg",
              head_img: "../../static/imgs/dog.png",
              img_file: true,
            },
            {
              type: "receive",
              text: "你好face[kun]face[kun]哈哈哈face[huaixiao]",
              head_img: "../../static/imgs/dog.png",
            },
            {
              type: "send",
              text: "实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一",
              head_img: "../../static/imgs/thomas.jpg",
            }
          ]
        },
        {
          userId: "3",
          head_img: '../../static/imgs/thomas.jpg',
          name: '博 v 了九点半 v 代表 v 九点半 v 家',
          time: '23:30',
          last_message: "逾期不改正的，处一万五千元罚款；有阻碍执法等情形的，处三万元罚款",
          msgLength: "69",
          online:false,
          Message_record: [
            {
              type: "tips",
              text: "下午6:33",
              head_img: "",
            },
            {
              type: "receive",
              text: "你好",
              head_img: "../../static/imgs/dog.png",
            },
            {
              type: "tips",
              text: "啦啦啦啦啦，啦啦啦，啦啦啦啦啦，没写,加入了群聊",
              head_img: "",
            },
            {
              type: "receive_",
              head_img: "../../static/imgs/dog.png",
              text: "../../static/imgs/wj.png",
              percent: "",
              img_file: false,
              name: "文件.zip",
              size: 20
            },
            {
              type: "receive_",
              text: "../../static/imgs/thomas.jpg",
              head_img: "../../static/imgs/dog.png",
              img_file: true,
            },
            {
              type: "receive",
              text: "你好face[kun]face[kun]哈哈哈face[huaixiao]",
              head_img: "../../static/imgs/dog.png",
            },
            {
              type: "send",
              text: "实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一",
              head_img: "../../static/imgs/thomas.jpg",
            }
          ]
        },
        {
          userId: "5",
          head_img: '../../static/imgs/thomas.jpg',
          name: '恰恰齐全',
          time: '23:30',
          last_message: "哈哈哈哈哈",
          msgLength: "300",
          online:false,
          Message_record: [
            {
              type: "tips",
              text: "下午5:33",
              head_img: "",
            },
            {
              type: "receive",
              text: "你好",
              head_img: "../../static/imgs/dog.png",
            },
            {
              type: "tips",
              text: "啦啦啦啦啦，啦啦啦，啦啦啦啦啦，没写,加入了群聊",
              head_img: "",
            },
            {
              type: "receive_",
              head_img: "../../static/imgs/dog.png",
              text: "../../static/imgs/wj.png",
              percent: "",
              img_file: false,
              name: "文件.zip",
              size: 20
            },
            {
              type: "receive_",
              text: "../../static/imgs/thomas.jpg",
              head_img: "../../static/imgs/dog.png",
              img_file: true,
            },
            {
              type: "receive",
              text: "你好face[kun]face[kun]哈哈哈face[huaixiao]",
              head_img: "../../static/imgs/dog.png",
            },
            {
              type: "send",
              text: "实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一",
              head_img: "../../static/imgs/thomas.jpg",
            }
          ]
        },
      ]
    },
    // 链接服务失败回调
    OnConnetionFail() {
      alert("连接失败")
    },
    //链接服务请求
    Connect(type, url, data, success) {
      var self = this;
      $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: "json",
        success: function (res) {
          success(res)
        },
        error: function () {
          self.OnConnetionFail()
        }
      })
    },
    //发送文件或图片成功回调
    UploadSuccess() {
      alert("上传成功")
    },
    // 设置发送文件或图片上传url
    setUploadUrl(url) {
      this.$refs.vueChat.vueMessage(url)
    },
    //消息发送回调
    OnMessageSend() {
      //清空输入
      $("#msg").html("")
      alert("消息发送")
    },
    // 接收消息
    OnmessageReceivd(msg) {
      this.$refs.vueChat.receivdMsg(msg)
      this.$refs.vueChat.scroll_bottom()
    },
    getSearchUserVal(msg) {
      this.searchUser = msg;
    },

  },
  mounted() {
    var self = this;
    // //初始化服务
    // this.OnConnetionService()
    // 设置上传url
    this.setUploadUrl("mkdsmdskad")

  }
}
</script>

<style>
</style>

```
