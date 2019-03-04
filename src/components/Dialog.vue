<template>
    <div class="dialog">
        <DialogSessions :target="target"></DialogSessions>
        <DialogBox
                :target="target"
                :fileUploadUrl="fileUploadUrl"
                @dialogSendMessage="dialogSendMessage"
        ></DialogBox>
    </div>
</template>

<script>
    import DialogBox from './Dialog/Box';
    import DialogSessions from './Dialog/Sessions';
    export default {
        name: "Dialog",
        components: { DialogBox, DialogSessions },
        data(){
            return {};
        },
        props: {
            target: Object,
            fileUploadUrl: String,
        },
        methods: {
            //  发送对话消息
            dialogSendMessage(message) {
                return this.$emit('SendMessage', message);
            }
        }
    }
</script>

<style scoped lang="less">
    .dialog {
        height: 100%;
        width: 590px;
        position: relative;
        background-color: #eee;
        float: left;
    }
</style>