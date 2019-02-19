<template>
  <div id="app">
    <chat :list_ = lists :gr = gr @getMessage="getVal"></chat>
  </div>
</template>

<script>
  import chat from "../src/components/chat"

  export default {
    components: {chat},
    name: 'app',
    data() {
      return {
        lists:[],
        gr:{
          userId:"4",
          head_img: '../../static/imgs/dog.png',
          name: 'gogo',
          msgLh:"200"
        },
        user_list:[
          {
            userId:"1",
            head_img: '../../static/imgs/thomas.jpg',
            name: '你好你好你好',
            time: '下午7:20',
            message: "实施以来，深圳控烟执法部门已经对8万多名个人进行了处罚，但对经营场所的罚单只开出了",
            msgLength:"100"
          },
          {
            userId:"2",
            head_img: '../../static/imgs/dog.png',
            name: '啦啦',
            time: '下午7:21',
            message: "场所“罚不动”，成为控烟执法的一大难",
            msgLength:"9"
          },
          {
            userId:"3",
            head_img: '../../static/imgs/thomas.jpg',
            name: '博 v 了九点半 v 代表 v 九点半 v 家',
            time: '23:30',
            message: "逾期不改正的，处一万五千元罚款；有阻碍执法等情形的，处三万元罚款",
            msgLength:"69"
          },
          {
            userId:"5",
            head_img: '../../static/imgs/thomas.jpg',
            name: '恰恰齐全',
            time: '23:30',
            message: "哈哈哈哈哈",
            msgLength:"300"
          },
        ],
        Message:""
      }
    },
    watch:{
      Message:function(){
        var self = this;
        self.lists = [];
        $.each(this.user_list,function(k,v){
          var item = v
            if(v.name.indexOf(self.Message)!=-1){
              self.lists.push(v)
            }
        })
      }
    },
    methods: {
      getVal(msg){
        this.Message=msg;
      },
      onSubmit () {
        let value = this.$refs.textarea.innerHTML

        // 把它转成txt，以便存储
        let txt = this.$qqface.transToText(value)
        console.log(txt)

        // 再转成html
        let html = this.$qqface.transToHtml(txt)
        console.log(html)
      }
    },
    mounted() {
      this.lists = this.user_list
    }
  }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }



</style>
