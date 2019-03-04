<template>
    <div class="normal">
        <!-- 右侧联系人列表 -->
        <ContactsPond
                ref="contactsComponent"
                :profile="profile"
                :target="target"
                @getCurrentTarget="getCurrentTarget"
                @setCurrentTarget="setCurrentTarget"
        ></ContactsPond>

        <!-- 左侧对话 -->
        <Dialog
                :target="target"
                @getCurrentTarget="getCurrentTarget"
                @switchDisplayType="switchDisplayType"
        ></Dialog>
    </div>
</template>

<script>
    import ContactsPond from './ContactsPond';
    import Dialog from './Dialog';
    export default {
        name: "Normal",
        components: { ContactsPond, Dialog },
        data() {
            return {
                target: {},
            };
        },
        props: {
            profile: Object,
        },
        methods: {
            //  获取选中用户
            getCurrentTarget() {
                return this.target;
            },
            //  设置选中用户
            setCurrentTarget(target) {
                if( target ) {
                    this.target         =   target;
                    this.$console('切换联系人', target);
                }
            },
            //  切换显示方式
            switchDisplayType(type) {
                this.$emit('switchDisplayType', type);
            },
            //  刷新联系人列表
            normalRefreshContacts(contacts) {
                this.__contactsComponent().refreshContacts(contacts);
            },
            //  联系人上线
            normalContactOnline(contact) {
                this.__contactsComponent().contactOnline( contact );
            },
            //  联系人下线
            normalContactOutline(contact) {
                this.__contactsComponent().contactOutline( contact );
            },
            /**
             *
             * @returns {Vue | Element | Vue[] | Element[]}
             * @private
             */
            __contactsComponent() {
                return this.$refs.contactsComponent;
            }
        }
    }
</script>

<style scoped lang="less">
    .normal {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 850px;
        height: 600px;
        background: #999999;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 2px 5px 33px 0px grey;
        z-index: 99999;
    }
</style>