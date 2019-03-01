<template>
  <div class="lists">
    <ul>
      <li v-for="item in list_"  v-show="item.online" :userid = item.userId @click="active($event.currentTarget)">
        <span>
          <i v-show="item.msgLength>0" v-if="item.msgLength>99">99+</i>
          <i v-show="item.msgLength>0" v-else>{{item.msgLength}}</i>
          <img :src="item.head_img">
        </span>
        <div>
          <div>
            <span class="name">{{item.name}}</span>
            <span>{{item.time}}</span>
          </div>
          <p class="message">{{item.last_message}}</p>
        </div>
      </li>
      <li v-for="item in list_"  v-show="!item.online" :userid = item.userId @click="active($event.currentTarget)">
        <span>
          <i v-show="item.msgLength>0" v-if="item.msgLength>99">99+</i>
          <i v-show="item.msgLength>0" v-else>{{item.msgLength}}</i>
          <img :src="item.head_img">
          <span></span>
        </span>
        <div>
          <div>
            <span class="name">{{item.name}}</span>
            <span>{{item.time}}</span>
          </div>
          <p class="message">{{item.last_message}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        //好友列表
        userList:{},
        // 当前好友
        activeUser:""
      }
    },
    //接收来自chat的好友信息
    props:['list_'],
    // updated(){
    //
    //   if(this.userList == ""){
    //     // 接收好友列表复制以用于操作
    //     this.userList = this.list_
    //     //设置默认聊天好友为列表第一个用户
    //     // this.activeUser = this.userList[0];
    //   }
    // },
    methods:{
      //设置当前选中好友并更新聊天记录为当前好友
      active(node){
        if(!$(node).hasClass("active")){
          $(node).siblings().removeClass("active")
          $(node).addClass("active")
          //根据id查找到选中好友信息
          for (var i = 0; i <this.userList.length ; i++) {
            if($(node).attr("userid") == this.userList[i].userId){
              //设置当前选中好友
              this.activeUser = this.userList[i]
            }
          }
        }
      }
    },
    watch:{
      list_:function(val){
          // 接收好友列表复制以用于操作
          this.userList = val
      },
      // 检测当前好友信息变化
      activeUser:{
        handler(){
          //设置消息未读为0
          this.activeUser.msgLength = 0;
          // 传值给chat
          this.$emit("getActiveUser",this.activeUser)
        },
        deep:true
      }
    },
    mounted(){
      // $(".lists>ul>li").eq(0).addClass("active")
    }

  }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .lists {
    width: 100%;
    height: ~'calc(100% - 50px)';
    overflow-y: scroll;
    li {
      height: 50px;
      border-bottom: 1px solid #efefef;
      padding: 12px 15px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      &>span{
        position: relative;
        width: 43px;
        height: 43px;
        display: inline-block;
        font-size: 0;
        &>i{
          max-width: 40px;
          padding: 0 8px;
          height: 20px;
          position: absolute;
          border-radius: 10px;
          background: red;
          color: white;
          font-size: 12px;
          text-align: center;
          line-height: 20px;
          font-style: normal;
          top: -10px;
          left: 50%;
          z-index: 99;
        }
        & > img {
          width: 43px;
          height: 43px;
          border-radius: 3px;
        }
        &>span{
          position: absolute;
          top: 0;
          left: 0;
          display: inline-block;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.8);
          z-index: 9;
        }
      }
      & > div {
        width: 165px;
        & > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          & > span:nth-of-type(1) {
            display: inline-block;
            width: 100px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #000;
            font-size: 14px;
          }
          & > span {
            font-size: 12px;
            color: #999999;
          }
        }
        & > p {
          font-size: 12px;
          color: #999999;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    .active {
      background: #dbdbdb;
    }
  }

  .lists::-webkit-scrollbar {
    width: 7px;
  }

  .lists::-webkit-scrollbar-thumb {
    background-color: #7c7c7c;
    background-clip: padding-box;
    border-radius: 15px;
  }

  .avatar, .name {
    vertical-align: middle;
  }
</style>
