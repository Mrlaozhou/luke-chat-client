<template>
  <div class="message">
    <div class="title">
      <span>{{active_list.name}}</span>
      <span @click="close_()">
          <img src="/src/assets/x.png" alt="">
      </span>
    </div>
    <div class="msgbox">
      <ul>
        <li class="tips">下午4:33</li>
        <li class="receive">
          <img src="../assets/dog.png" alt="">
          <p><i></i><span>你好</span></p>
        </li>
        <li class="tips">啦啦啦啦啦，啦啦啦，啦啦啦啦啦，没写,加入了群聊</li>
        <li class="send">
          <p><i></i><span>实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一</span>
          </p>
          <img src="../../static/imgs/thomas.jpg" alt="">
        </li>
      </ul>
    </div>
    <div class="ed">
      <div>
        <img src="../assets/biaoq.png" @click.stop="open_face()" alt="">
        <img src="../assets/wjian.png" alt="">
      </div>
      <div contenteditable="true" id="msg" ref="textarea" @keyup.enter="send()">
        <img src="../../static/imgs/qqface/cahan.gif" alt="">
      </div>

    </div>
    <face @choose_face="get_faceVal" :open_faceList=open_faceList></face>
  </div>

</template>

<script>
  import face from "../components/face"

  export default {
    components: {face},
    name: "message",
    props: ["active_list", 'gr'],
    data() {
      return {
        gr_: "",
        active_face: "",
        open_faceList: ""
      }
    },
    watch: {
      active_face: function (val) {
        this.open_faceList = false
      }
    },
    updated() {
      this.gr_ = this.gr;
    },
    methods: {
      placeCaret(el, atStart) {
        el.focus();
        if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(atStart);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (typeof document.body.createTextRange != 'undefined') {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(atStart);
          textRange.select();
        }
      },
      send() {
        var self = this;
        var text = $("#msg").html();
        if (text != "") {
          $(".msgbox>ul").append(
            '   <li class="send">' +
            '       <p><i></i><span>' + text + '</span></p>' +
            '      <img src="' + self.gr_.head_img + '" alt="">' +
            '   </li>'
          )
        }
        this.scroll_bottom()
        $("#msg").html("")
      },
      scroll_bottom() {
        var content_height = $(".msgbox>ul").height()
        $(".msgbox").animate({
          scrollTop: $(".msgbox>ul").height()
        })
      },
      close_() {
        $(".content").fadeOut("fast")
        $(".chat_icon").fadeIn("fast")
      },
      get_faceVal(msg) {
        this.active_face = msg
        $("#msg").append(
          '<img src="../../static/imgs/qqface/' + this.active_face + '.gif">'
        );
        this.placeCaret(document.querySelector('#msg'), false)
      },
      open_face() {
        this.open_faceList = true
      }
    },
    mounted() {
      var self = this;
      self.scroll_bottom()
      $("#msg").focus()
      $("body,html").click(function(){
        if( self.open_faceList){
          self.open_faceList = false
        }
      })
    }

  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .message {
    .msgbox {
      width: 100%;
      height: 360px;
      padding: 0 25px;
      padding-bottom: 30px;
      box-sizing: border-box;
      overflow-y: scroll;
      border-bottom: 1px solid #d8d8d8;
    }
    .title {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dbdbdb;
      padding: 0 19.5px;
      box-sizing: border-box;
      & > span:nth-of-type(1) {
        font-size: 16px;
        display: inline-block;
        max-width: 85%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      & > span:nth-of-type(2) {
        width: 13px;
        height: 13px;
        background: #f56467;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        cursor: pointer;
        &:hover > img {
          opacity: 1;
        }
        & > img {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          opacity: 1;
          /*transition: ease-in-out opacity 0.2s;*/
        }
      }
    }
    ul {
      overflow: hidden;
    }
    li {
      width: 400px;
      margin-top: 35px;
      position: relative;
      & > img {
        width: 30px;
        height: 30px;
        border-radius: 3px;
      }
      & > p {
        display: inline-block;
        max-width: 350px;
        position: relative;
        & > i {
          display: inline-block;
          border-width: 8px;
          border-style: solid;
          position: absolute;
          top: 12px;
        }
        & > span {
          display: inline-block;
          padding: 10px;
          min-height: 36px;
          border-radius: 3px;
          box-sizing: border-box;
          font-size: 14px;
        }
      }
    }
    .send {
      float: right;
      & > img {
        position: absolute;
        right: 0;
        top: 0;
        margin-left: 20px;
      }
      & > p {
        float: right;
        margin-right: 55px;
        & > i {
          border-color: transparent transparent transparent #b2e281;
          right: -16px;
        }
        & > span {
          background: #b2e281;
          & > img {
            width: 20px;
            position: relative;
            top: 4px;
          }
        }
      }
    }
    .tips {
      width: 100%;
      font-size: 12px;
      color: #999999;
      text-align: center;
      float: left;
      display: block;
    }
    .receive {
      float: left;
      & > img {
        margin-right: 20px;
      }
      & > p {
        & > i {
          border-color: transparent white transparent transparent;
          left: -16px;
        }
        & > span {
          background: white;
        }
      }
    }
  }

  .ed {
    height: 150px;
    padding: 20px;
    & > div:nth-of-type(1) {
      & > img {
        width: 25px;
        margin-right: 8px;
        cursor: pointer;
      }
    }
    #msg {
      width: 100%;
      height: 120px;
      resize: none;
      border: none;
      outline: none;
      background: #eeeeee;
      & > img {
        width: 20px;
        position: relative;
        top: 4px;
      }
    }
  }

</style>
