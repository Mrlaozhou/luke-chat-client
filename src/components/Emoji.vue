<template>
    <div class="face" v-show="show">
        <i v-for="item in face_list" :name = item.name @click="choose_face($event.currentTarget)">
            <img :title="'['+item.describe+']'" :src="'../../static/imgs/qqface/'+item.name+'.gif'" alt="">
        </i>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "Emoji",
        data() {
            return {
                face_list: [{name: 'weixiao', describe: '微笑'},
                    {name: 'piezui', describe: '撇嘴'},
                    {name: 'se', describe: '色'},
                    {name: 'fadai', describe: '发呆'},
                    {name: 'deyi', describe: '得意'},
                    {name: 'liulei', describe: '流泪'},
                    {name: 'haixiu', describe: '害羞'},
                    {name: 'bizui', describe: '闭嘴'},
                    {name: 'shui', describe: '睡'},
                    {name: 'daku', describe: '大哭'},
                    {name: 'ganga', describe: '尴尬'},
                    {name: 'fanu', describe: '发怒'},
                    {name: 'tiaopi', describe: '调皮'},
                    {name: 'ciya', describe: '呲牙'},
                    {name: 'jingya', describe: '惊讶'},
                    {name: 'nanguo', describe: '难过'},
                    {name: 'ku', describe: '酷'},
                    {name: 'lenghan', describe: '冷汗'},
                    {name: 'zhuakuang', describe: '抓狂'},
                    {name: 'tu', describe: '吐'},
                    {name: 'touxiao', describe: '偷笑'},
                    {name: 'keai', describe: '可爱'},
                    {name: 'baiyan', describe: '白眼'},
                    {name: 'aoman', describe: '-傲慢'},
                    {name: 'jie', describe: '饥饿'},
                    {name: 'kun', describe: '困'},
                    {name: 'jingkong', describe: '惊恐'},
                    {name: 'liuhan', describe: '流汗'},
                    {name: 'hanxiao', describe: '憨笑'},
                    {name: 'dabing', describe: '大兵'},
                    {name: 'fendou', describe: '奋斗'},
                    {name: 'zhouma', describe: '咒骂'},
                    {name: 'yiwen', describe: '疑问'},
                    {name: 'xu', describe: '嘘'},
                    {name: 'yun', describe: '晕'},
                    {name: 'zhemo', describe: '折磨'},
                    {name: 'shuai', describe: '衰'},
                    {name: 'kulou', describe: '骷髅'},
                    {name: 'qiaoda', describe: '敲打'},
                    {name: 'zaijian', describe: '再见'},
                    {name: 'cahan', describe: '擦汗'},
                    {name: 'koubi', describe: '抠鼻'},
                    {name: 'guzhang', describe: '鼓掌'},
                    {name: 'qiudale', describe: '糗大了'},
                    {name: 'huaixiao', describe: '坏笑'},
                    {name: 'zuohengheng', describe: '左哼哼'},
                    {name: 'youhengheng', describe: '右哼哼'},
                    {name: 'haqian', describe: '哈欠'},
                    {name: 'bishi', describe: '鄙视'},
                    {name: 'weiqu', describe: '委屈'},
                    {name: 'kuaikule', describe: '快哭了'},
                    {name: 'yinxian', describe: '阴险'},
                    {name: 'qinqin', describe: '亲亲'},
                    {name: 'xia', describe: '吓'},
                    {name: 'kelian', describe: '可怜'},
                    {name: 'caidao', describe: '菜刀'},
                    {name: 'xigua', describe: '西瓜'},
                    {name: 'pijiu', describe: '啤酒'},
                    {name: 'lanqiu', describe: '篮球'},
                    {name: 'pingpang', describe: '乒乓'},
                    {name: 'kafei', describe: '咖啡'},
                    {name: 'fan', describe: '饭'},
                    {name: 'zhutou', describe: '猪头'},
                    {name: 'meigui', describe: '玫瑰'},
                    {name: 'diaoxie', describe: '凋谢'},
                    {name: 'shiai', describe: '示爱'},
                    {name: 'aixin', describe: '爱心'},
                    {name: 'xinsui', describe: '心碎'},
                    {name: 'dangao', describe: '蛋糕'},
                    {name: 'shandian', describe: '闪电'},
                    {name: 'zhadan', describe: '炸弹'},
                    {name: 'dao', describe: '刀'},
                    {name: 'zuqiu', describe: '足球'},
                    {name: 'piaochong', describe: '瓢虫'},
                    {name: 'bianbian', describe: '便便'},
                    {name: 'yueliang', describe: '月亮'},
                    {name: 'taiyang', describe: '太阳'},
                    {name: 'liwu', describe: '礼物'},
                    {name: 'yongbao', describe: '拥抱'},
                    {name: 'qiang', describe: '强'},
                    {name: 'ruo', describe: '弱'},
                    {name: 'woshou', describe: '握手'},
                    {name: 'shengli', describe: '胜利'},
                    {name: 'baoquan', describe: '抱拳'},
                    {name: 'gouyin', describe: '勾引'},
                    {name: 'quantou', describe: '拳头'},
                    {name: 'chajin', describe: '差劲'},
                    {name: 'aini', describe: '爱你'},
                    {name: 'no', describe: 'NO'},
                    {name: 'ok', describe: 'OK'}
                ],
                active_face:""
            }
        },
        props:{
            show: Boolean,
        },
        methods:{
            choose_face(node){
                this.active_face = $(node).attr("name");
                this.$emit("chooseEmoji",this.active_face)
            }
        }
    }
</script>

<style scoped lang="less">
    .face{
        width: 270px;
        position: absolute;
        z-index: 1000;
        bottom: 185px;
        background: white;
        padding: 10px;
        border-radius: 3px;
        left: -111px;
        box-shadow: 1px 1px 14px -2px #9b9999;
        &>i{
            width: 30px;
            height: 30px;
            display: inline-block;
            box-sizing: border-box;
            cursor: pointer;
            &>img{
                width: 25px;
                height: 25px;
                margin-left: 2.5px;
                margin-top: 2.5px;
            }
        }
        &>span{
            display: inline-block;
            border-width: 8px;
            border-style: solid;
            border-color:white transparent transparent transparent ;
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>