<template>
    <div class="contact">
        <div class="profile">
            <!-- 用户信息 -->
            <img :src="profile.avatar" :alt="profile.name">
            <!-- 用户搜索 -->
            <input type="text" placeholder="搜索" v-model="keywords">
        </div>
        <div class="lists">
            <!--<ContactItem v-for="(ci,fd) in contacts" :key="fd" :data="ci" @click="contactChoose(ci)"></ContactItem>-->
            <ul>
                <li v-for="item in contacts" v-if="item" @click="contactChoose(item)" :class="(item.fd == target.fd) ? 'active' : ''">
                    <span>
                      <i v-show="item.msgLength>0" v-if="item.msgLength>99">99+</i>
                      <i v-show="item.msgLength>0" v-else>{{item.msgLength}}</i>
                      <img :src="item.avatar">
                    </span>
                    <div>
                        <div>
                            <span class="name">{{item.name}}</span>
                            <span>2018.10.25</span>
                        </div>
                        <p class="message">{{ item.label }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ContactItem from './Contact/Contact';
    export default {
        name: "ContactsPond",
        components: { ContactItem },
        data(){
            return {
                contacts: {},
                keywords: ''
            };
        },
        props: {
            profile: Object,
            target: [Object]
        },
        methods: {
            //  初始化联系人列表(多)
            refreshContacts(contacts) {
                if(Array.isArray( contacts )) {
                    let contactsObject      =   {};
                    contacts.forEach(function (value) {
                        contactsObject[ value.fd ]      =   value;
                    });
                    this.contacts       =   contactsObject;
                } else {
                    this.contacts       =   contacts;
                }
                this.$console( '刷新联系人列表', contacts, this.contacts );
            },

            //  联系人上线
            contactOnline(contact) {
                if( contact && (typeof contact === 'object') ) {
                    this.$set( this.contacts, contact.fd, contact );
                    this.$console( 'online', contact, this.contacts );
                }
            },

            //  联系人下线
            contactOutline(contact) {
                if( contact && (typeof contact === 'object') ) {
                    this.$set( this.contacts, contact.fd, false );
                    this.$console( 'outline', contact, this.contacts );
                }
            },

            //  选择对话联系人
            contactChoose(target) {
                this.$emit('setCurrentTarget', target);
            },
            //  normal接收到服务端消息
            normalReceivedContactMessage(message) {
                if( message && typeof message === 'object') {
                    this.contacts[ message.fd ]     =   message;
                }
            },
            //
            getContactEntityByFd (fd) {
                return this.contacts[fd]
                    ?   this.contacts[fd]
                    :   false;
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .contact {
        float: left;
        width: 260px;
        height: 100%;
        background: #F9F9F9;
        .profile {
            width: ~'calc(100% - 7px)';
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &>img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 20px;
                /*border: 1px solid #999999;*/
            }
            & > input {
                width: 60%;
                height: 25px;
                border-radius: 3px;
                background: #d9dadc;
                font-size: 16px;
                border: none;
                outline: none;
                text-indent: 1em;
            }

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
    }
</style>