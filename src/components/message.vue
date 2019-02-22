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
        <li  v-for="item in message"  :class="item.class">
          <span v-if="item.class=='tips'">{{item.text}}</span>
          <div v-else-if="item.class=='receive'">
            <img :src="item.head_img" alt="">
            <p><i></i><span>{{item.text}}</span></p>
          </div>
          <div v-else-if="item.class=='receive_'">
            <p>
              <i></i>
              <span >
                <img v-if="item.img_file" :src="item.text" alt="">
                  <div v-else>
                     <img :src="item.text" alt="">
                    <div>
                      <span>{{item.name}}</span>
                      <span>{{item.size}}MB</span>
                    </div>
                  </div>

                <!--<span :class="'mk'+item.percent">-->
                  <!--<span >-->
                    <!--<img src="../../static/imgs/loading.gif" alt="">-->
                    <!--<br><span :class="'t'+item.percent"></span>-->
                  <!--</span>-->
                <!--</span>-->
              </span>
            </p>
            <img :src="item.head_img" alt="">
          </div>
          <div v-else-if="item.class=='send'">
            <p>
              <i></i>
              <span v-html="item.text"></span>
              <img  :class="'shibai m'+item.percent" src="../../static/imgs/sb.png" alt="">
            </p>
            <img :src="item.head_img" alt="">
          </div>
          <div v-else-if="item.class=='send_'">
              <p>
                <i></i>
                <span >
                <img v-if="item.img_file" :src="item.text" alt="">
                  <div v-else>
                     <img :src="item.text" alt="">
                    <div>
                      <span>{{item.name}}</span>
                      <span>{{item.size}}MB</span>
                    </div>
                  </div>

                <span :class="'mk'+item.percent">
                  <span >
                    <img src="../../static/imgs/loading.gif" alt="">
                    <br><span :class="'t'+item.percent"></span>
                  </span>
                </span>
              </span>
                <img  :class="'shibai m'+item.percent" src="../../static/imgs/sb.png" alt="">
            </p>
              <img :src="item.head_img" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="ed">
      <div>
        <img src="../assets/biaoq.png" @click.stop="open_face()" alt="">
        <img src="../assets/wjian.png" alt="">
        <form class="upload" enctype='multipart/form-data'>
          <input type="file" id="userfile" @change="upload($event.currentTarget)" name="file">
        </form>
      </div>
      <div contenteditable="true" id="msg" ref="textarea" @keyup.enter="send()"></div>
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
        open_faceList: "",
        message: [
          {
            class: "tips",
            text: "下午4:33",
            head_img: "",
          },
          {
            class: "receive",
            text: "你好",
            head_img: "../../static/imgs/dog.png",
          },
          {
            class: "tips",
            text: "啦啦啦啦啦，啦啦啦，啦啦啦啦啦，没写,加入了群聊",
            head_img: "",
          },
          {
            class: "receive_",
            head_img: "../../static/imgs/dog.png",
            text:"../../static/imgs/wj.png",
            percent:"",
            img_file:false,
            name:"文件.zip",
            size:20
          },
          {
            class: "receive_",
            text: "../../static/imgs/thomas.jpg",
            head_img: "../../static/imgs/dog.png",
            img_file:true,
          },
          {
            class: "receive",
            text: "你好face[kun]face[kun]哈哈哈face[huaixiao]",
            head_img: "../../static/imgs/dog.png",
          },
          {
            class: "send",
            text: "实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一实施以来的一",
            head_img: "../../static/imgs/thomas.jpg",
          }
        ]
      }
    },
    watch: {
      active_face: function (val) {
        this.open_faceList = false
      }
    },
    updated() {
      var self = this;
      self.gr_ = self.gr;
      for (var i = 0; i <self.message.length ; i++) {

        // var str1 = self.message[i].text.replace("face[", "<img src='../../static/imgs/qqface/")

        // console.log(str1)
        // var str = "face["+str1+"]"
        // $.each(self.face_list,function (k,v) {
        //
        //   if(self.message[i].text.indexOf(str)){
        //
        //   }
        //
        //
        // })
        // self.message[i].text.replace(str, "333")



      }

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
        var text = $("#msg").html().replace('<div><br></div>','');
        if (text != "") {
          this.message.push({
            class:"send",
            text:text,
            head_img:self.gr_.head_img
          })
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
      },
      upload(node) {
        var self = this;
        var file = document.querySelector('input[type=file]').files[0];
        console.log(file)
        var formData = new FormData();
        formData.append('userfile', document.querySelector('input[type=file]').files[0])
        var timestamp = Date.parse(new Date());
        self.scroll_bottom()
        var path = $(node).val();
        var extStart = path.lastIndexOf('.'),
          ext = path.substring(extStart, path.length).toUpperCase();
        if (ext !== '.PNG' && ext !== '.JPG' && ext !== '.JPEG' && ext !== '.GIF'&& ext !== '.webp' && ext !== '.bmp' && ext !== '.tif') {
          self.message.push({
            class:"send_",
            text:"../../static/imgs/wj.png",
            head_img:self.gr_.head_img,
            percent:timestamp,
            img_file:false,
            name:file.name,
            size:(file.size/1024/1024).toFixed(2)
          })
        }else{
          self.message.push({
            class:"send_",
            text:window.URL.createObjectURL(file),
            head_img:self.gr_.head_img,
            percent:timestamp,
            img_file:true,
          })
        }
        $.ajax({
          url: ".....",
          type: 'POST',
          cache: false,
          data: formData,
          processData: false,
          contentType: false,
          dataType: "json",
          xhr: xhrOnProgress(function (e) {
            var percent = e.loaded / e.total;
            var per= 't'+timestamp;
            $("."+per).text(percent+'%')
          }),
          success: function (data) {
            if (data.code == 1) {
              var per= 'mk'+timestamp;
              $("."+per).fadeOut("fast")
            } else {
              var per= 'm'+timestamp;
              $("."+per).fadeIn("fast")
            }
          },
          error:function(){
            var per= 'm'+timestamp;
            $("."+per).fadeIn("fast")
          }
        });
      }
    },
    mounted() {
      var self = this;
      self.scroll_bottom()
      $("#msg").focus()
      $("body,html").click(function () {
        if (self.open_faceList) {
          self.open_faceList = false
        }
      })
    }
  }
  var xhrOnProgress = function (fun) {
    xhrOnProgress.onprogress = fun; //绑定监听
    //使用闭包实现监听绑
    return function () {
      //通过$.ajaxSettings.xhr();获得XMLHttpRequest对象
      var xhr = $.ajaxSettings.xhr();
      //判断监听函数是否为函数
      if (typeof xhrOnProgress.onprogress !== 'function')
        return xhr;
      //如果有监听函数并且xhr对象支持绑定时就把监听函数绑定上去
      if (xhrOnProgress.onprogress && xhr.upload) {
        xhr.upload.onprogress = xhrOnProgress.onprogress;
      }
      return xhr;
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
      &>div{
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
      &>img{
        width: 35px;
        height: 35px;
      }
    }
    .send {
      float: right;
      &>div{
        & > img {
          position: absolute;
          right: 0;
          top: 0;
          margin-left: 20px;
        }
        & > p {
          float: right;
          margin-right: 55px;
          position: relative;
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
            .img {
              max-width: 340px;
            }
          }
          .shibai{
            width: 35px;
            height: 35px;
            position: absolute;
            top: 50%;
            left:-45px;
            transform: translateY(-50%);
            cursor: pointer;
            display: none;
          }
        }
      }

    }
    .send_ {
      float: right;
      &>div{
        & > img {
          position: absolute;
          right: 0;
          top: 0;
          margin-left: 20px;
        }
        & > p {
          float: right;
          margin-right: 55px;
          max-height: 350px;
          position: relative;
          & > i {
            border-color: transparent transparent transparent white;
            right: -16px;
          }
          & > span {
            display: inline-block;
            width: 100%;
            background: white;
            padding: 0;
            overflow: hidden;
            font-size: 0;
            position: relative;
            min-height: 70px;
            &>div{
              width: 250px;
              background: white;
              &>img{
                width: 80px;
              }
              &>div{
                width: 160px;
                height: 85px;
                display: inline-block;
                vertical-align: bottom;
                padding: 15px 0 0 5px;
                box-sizing: border-box;
                &>span{
                  display: block;
                  font-size: 16px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                &>span:nth-of-type(1){
                  margin-bottom: 5px;
                }
                &>span:nth-of-type(2){
                  font-size: 14px;
                  color: #999999;
                }
              }
            }
            & > span {
              display: inline-block;
              position: absolute;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              top: 0;
              left: 0;

              & > span {
                display: inline-block;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 50px;
                transform: translate(-50%, -50%);
                text-align: center;
                &>span{
                  font-size: 12px;
                  color: white;
                }
                & > img {
                  width: 100%;
                }
              }
            }
            &>img{
              width: 200px;
              min-height: 70px;
            }
          }
          .shibai{
            width: 35px;
            height: 35px;
            position: absolute;
            top: 50%;
            left:-45px;
            transform: translateY(-50%);
            cursor: pointer;
            display: none;
          }
        }
      }
    }
    .tips {
      width: 100%;
      text-align: center;
      float: left;
      display: block;
      &>span{
        font-size: 12px;
        color: #999999;
      }
    }
    .receive {
      float: left;
      &>div{
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
    .receive_ {
      float: left;
      &>div{
        position: relative;
        & > img {
          position: absolute;
          left: 0;
          top: 0;
        }
        & > p {
          margin-left: 55px;
          max-height: 350px;
          position: relative;
          & > i {
            border-color: transparent white transparent transparent;
            left: -16px;
          }
          & > span {
            display: inline-block;
            width: 100%;
            background: white;
            padding: 0;
            overflow: hidden;
            font-size: 0;
            position: relative;
            min-height: 70px;
            &>div{
              width: 250px;
              background: white;
              &>img{
                width: 80px;
              }
              &>div{
                width: 160px;
                height: 85px;
                display: inline-block;
                vertical-align: bottom;
                padding: 15px 0 0 5px;
                box-sizing: border-box;
                &>span{
                  display: block;
                  font-size: 16px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                &>span:nth-of-type(1){
                  margin-bottom: 5px;
                }
                &>span:nth-of-type(2){
                  font-size: 14px;
                  color: #999999;
                }
              }
            }
            & > span {
              display: inline-block;
              position: absolute;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              top: 0;
              left: 0;

              & > span {
                display: inline-block;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 50px;
                transform: translate(-50%, -50%);
                text-align: center;
                &>span{
                  font-size: 12px;
                  color: white;
                }
                & > img {
                  width: 100%;
                }
              }
            }
            &>img{
              width: 200px;
              min-height: 70px;
            }
          }
          .shibai{
            width: 35px;
            height: 35px;
            position: absolute;
            top: 50%;
            left:-45px;
            transform: translateY(-50%);
            cursor: pointer;
            display: none;
          }
        }
      }
    }
  }

  .ed {
    height: 150px;
    padding: 20px;
    & > div:nth-of-type(1) {
      position: relative;
      & > img {
        width: 25px;
        margin-right: 8px;
        cursor: pointer;
      }
      .upload {
        width: 25px;
        height: 25px;
        cursor: pointer !important;
        background: red;
        position: absolute;
        top: 0;
        left: 37px;
        opacity: 0;
        & > input {
          width: 100%;
          cursor: pointer !important;
        }
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
