<template>
    <div>
        <div class="title">
            <span>{{target.name}}</span>
            <span @click="switchToNarrow()">
            <i class="iconfont">&#xe619;</i>
            </span>
        </div>
        <div class="msgbox">
            <ul>
                <li v-for="item in target.sessions" :class="item.type">
                    <span v-if="item.type=='tips'">{{item.text}}</span>
                    <div v-else-if="item.type=='receive'">
                        <img :src="target.head_img" alt="">
                        <p><i></i><span>{{item.text}}</span></p>
                    </div>
                    <div v-else-if="item.type=='receive_'">
                        <p>
                            <i></i>
                            <span>
                            <img v-if="item.img_file" :src="item.text" alt="">
                                <div v-else>
                                    <!--<img :src="item.text" alt="">-->
                                    <span class="iconfont">&#xec7c;</span>
                                    <div>
                                        <span>{{item.name}}</span>
                                        <span>{{item.size}}MB</span>
                                    </div>
                                </div>
                            </span>
                        </p>
                        <img :src="target.head_img" alt="">
                    </div>
                    <div v-else-if="item.type=='send'">
                        <p>
                            <i></i>
                            <span v-html="item.text"></span>
                            <img :class="'shibai m'+item.percent" src="../../../static/imgs/sb.png" alt="">
                        </p>
                        <img :src="gr.head_img" alt="">
                    </div>
                    <div v-else-if="item.type=='send_'">
                        <p>
                            <i></i>
                            <span>
                            <img v-if="item.img_file" :src="item.text" alt="">
                                <div v-else>
                                    <span class="iconfont">&#xec7c;</span>
                                    <div>
                                        <span>{{item.name}}</span>
                                        <span>{{item.size}}MB</span>
                                    </div>
                                </div>
                            <span :class="'mk'+item.percent">
                                <span>
                                    <img src="../../../static/imgs/loading.gif" alt="">
                                    <br><span :class="'t'+item.percent"></span>
                                </span>
                            </span>
                            </span>
                            <img :class="'shibai m'+item.percent" src="../../../static/imgs/sb.png" alt="">
                        </p>
                        <img :src="gr.head_img" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Self from './Session/Self';
    import Target from './Session/Target';
    import System from './Session/System';
    export default {
        name: "Sessions",
        components: { Self, Target, System },
        props: {
            target: Object,
        },
        data(){
            return {

            };
        },
        methods: {
            //
            switchToNarrow() {
                this.$parent.$parent.$emit('switchDisplayType', 'narrow');
            }
        }
    }
</script>

<style scoped lang="less">
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
            & > i {
                position: absolute;
                top: 55%;
                left: 57%;
                transform: translate(-50%, -50%);
                width: 13px;
                font-size: 12px;
                /*transition: ease-in-out opacity 0.2s;*/
            }
        }
    }
</style>