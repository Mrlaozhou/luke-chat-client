<template>
  <div class="lists">
    <ul>
      <li v-for="(item,index) in list_" :class ="{'active':index==0}"  :userid = item.userId @click="active($event.currentTarget)">
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
          <p class="message">{{item.message}}</p>
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
        active_list:'',
        new_list :""
      }
    },
    props:['list_'],
    updated(){
      this.new_list = this.list_;
      this.active_list = this.new_list[0];
    },
    methods:{
      active(node){
        if(!$(node).hasClass("active")){
          $(node).siblings().removeClass("active")
          $(node).addClass("active")
          for (var i = 0; i <this.new_list.length ; i++) {
            if($(node).attr("userid") == this.new_list[i].userId){
              this.active_list = this.new_list[i]
            }
          }
        }
      }
    },
    watch:{
      active_list:{
        handler(){
          this.active_list.msgLength = 0;
          this.$emit("active_lists",this.active_list)
        },
        deep:true
      }
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
        display: inline-block;
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
        }
        & > img {
          width: 43px;
          height: 43px;
          border-radius: 3px;
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
