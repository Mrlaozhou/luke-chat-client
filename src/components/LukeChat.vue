<template>
    <div>
        <!-- 完整显示状态 -->
        <Normal
                v-show="status && (displayType === 'normal')"
                @switchDisplayType="switchDisplayType"
                :profile="profile"
                ref="normalComponent"
        ></Normal>

        <!-- 缩小简化显示 -->
        <Narrow
                v-show="!status || displayType === 'narrow'"
                :status="status"
                @makeUserOnline="makeUserOnline"
                @makeUserOutline="makeUserOutline"
                @switchDisplayType="switchDisplayType"
                ref="narrowComponent"
        ></Narrow>
    </div>
</template>

<script>
    import Normal from './Normal';
    import Narrow from './Narrow';
    export default {
        name: "LukeChat",
        components: { Normal, Narrow },
        props: {
            profile: [Object, Array],       //  当前用户信息

            fileUploadUrl: String,          //  文件上传地址

            serviceAddress: String,         //  服务端地址

            serviceConnectHeaders: Object,  //  连接事的请求headers

            customAnalysisReceived: {
                type: [ Function, Boolean ],
                default: false
            },

            customNotification: Function,   //  自定义信息提示实现

            customBroadcast: Function,      //  自定义广播实现
        },
        data() {
            return {
                status: false,  //  当前用户状态
                displayType: 'narrow', //  显示方式
                wsConnection: {}
            };
        },
        methods: {
            //  用户上线
            makeUserOnline() {
                this.wsConnection       =   this.__establishWebSocketConnection();
            },
            /**
             * 建立webSocket连接
             * @returns {WebSocket}
             * @private
             */
            __establishWebSocketConnection() {
                let _this               =   this,
                    WS                  =   require('websocket').w3cwebsocket,
                    wsClient            =   new WS( this.serviceAddress );
                //  ws连接成功
                wsClient.onopen         =   function (ws, event) {
                    _this.$console( 'Connected' );
                    //
                    _this.setStatusOnline();
                };
                //  数据接收
                wsClient.onmessage      =   function (event) {
                    if(_this.customAnalysisReceived && (typeof _this.customAnalysisReceived === 'function')) {
                        _this.customAnalysisReceived.call(event.data);
                    } else {
                        _this.__analysisReceived(event.data);
                    }
                };
                //
                wsClient.onerror        =   function (error) {
                    _this.$console( 'Error', error );
                    // _this.setStatusOutline();
                };
                //
                wsClient.onclose        =   function () {
                    _this.$console( 'Closed' );
                    _this.setStatusOutline();
                };

                return wsClient;
            },
            /**
             * 解析接收
             * @param received String
             * @private
             */
            __analysisReceived(received) {
                //  转换成json
                let jsonData            =   JSON.parse( received );
                if( typeof jsonData !== 'object') return false;
                //  message/system/broadcast/notification/uses/online/outline
                switch (jsonData.type) {
                    case 'broadcast':
                        if(typeof this.customBroadcast === 'function') {
                            this.customBroadcast.call( jsonData.payload );
                        }
                        break;
                    case 'notification':
                        if(typeof this.customNotification === 'function') {
                            this.customNotification.call( jsonData.payload );
                        }
                        break;
                    case 'users':
                        this.__normalComponent().normalRefreshContacts( jsonData.payload );
                        break;
                    case 'online':
                        this.__normalComponent().normalContactOnline( jsonData.payload );
                        break;
                    case 'outline':
                        this.__normalComponent().normalContactOutline( jsonData.payload );
                        break;
                    case 'system':
                    default:

                        break;
                }
            },
            //  用户下线
            makeUserOutline() {
                this.wsConnection.close();
                this.setStatusOutline();
            },
            //  切换显示方式
            switchDisplayType(type) {
                this.displayType        =   type;
            },
            //  状态上线
            setStatusOnline() {
                this.status         =   true;
            },
            //  状态下线
            setStatusOutline() {
                this.status         =   false;
            },
            /**
             * @returns {Vue | Element | Vue[] | Element[]}
             */
            __normalComponent() {
                return this.$refs.normalComponent;
            },
        },
        created(){
        }
    }
</script>

<style>
    @font-face {
        font-family: 'iconfont';  /* project id 1063067 */
        src: url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.eot');
        src: url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.woff') format('woff'),
        url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1063067_4zxrhygrvk9.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>