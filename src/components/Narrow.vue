<template>
    <div class="narrow" @click="switchToNormal">
        <!-- 在线 -->
        <template v-if="status">
            <!-- 显示未读消息数量 -->
            <i>{{ unread > 99 ? 99 : unread }}</i>
            <!-- box -->
            <span class="iconfont online" @mouseenter="showOperate = !showOperate" @click="switchToNormal">&#xec7b;</span>
            <!-- 操作 -->
            <div class="online_operate" v-if="showOperate">
                <span @click="makeOutline">下线</span>
            </div>
        </template>

        <!-- 离线 -->
        <template v-else>
            <!-- box -->
            <span class="iconfont offline" @mouseenter="showOperate = !showOperate" @click="showOperate = !showOperate">&#xec7d;</span>
            <!-- 操作 -->
            <div class="outline_operate" v-if="showOperate">
                <span @click="makeOnline">上线</span>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Narrow",
        data(){
            return {
                unread: 4,
                showOperate: false
            };
        },
        props: {
            status: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            //  切换到normal显示
            switchToNormal() {
                if( ! this.status ) return false;
                this.$emit('switchDisplayType', 'normal');
            },
            //  用户手动下线
            makeOnline() {
                this.$emit('makeUserOnline');
            },
            //  用户手动上线
            makeOutline() {
                this.$emit('makeUserOutline');
            }
        }
    }
</script>

<style scoped lang="less">
    .narrow {
        cursor: pointer;
        position: fixed;
        bottom: 100px;
        right: 50px;
        width: 50px;
        height: 50px;
        /*overflow: hidden;*/
        & > i {
            position: absolute;
            max-width: 40px;
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
        & > span {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            box-shadow: 2px 5px 33px 0px grey;
            font-size: 48px;
        }
        .online {
            color: #0096e1;
        }
        .offline {
            color: #dbdbdb;
        }
        .online_operate {
            text-align: center;
            display: block;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            position: relative;
            background: #2CC169;
            color: white;
            margin-top: 10px;
            border-radius: 5px;
        }
        .outline_operate {
            text-align: center;
            display: block;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            position: relative;
            background: #DA2F2C;
            color: white;
            margin-top: 10px;
            border-radius: 5px;
        }
    }
</style>