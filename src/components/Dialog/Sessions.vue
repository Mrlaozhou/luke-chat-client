<template>
    <div>
        <div class="title">
            <span>{{target.name}}</span>
            <span @click="switchToNarrow()">
            <i class="iconfont">&#xe619;</i>
            </span>
        </div>
        <div class="sessionLists">
            <template v-for="(item, index) in target.sessions">
                <System v-if="item.type === 'system'" :message="item"></System>
                <Target v-else-if="item.type === 'message'" :message="item"></Target>
                <Self v-else :message="item"></Self>
            </template>
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
    .sessionLists {
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