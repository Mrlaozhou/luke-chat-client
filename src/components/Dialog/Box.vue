<template>
    <div class="ed">
        <div>
            <span class="iconfont" @click.stop="open_face()">&#xe691;</span>
            <span class="iconfont">&#xe65f;</span>
            <form class="upload" enctype='multipart/form-data'>
                <input type="file" id="userfile" @change="upload($event.currentTarget)" name="file">
            </form>
        </div>
        <div contenteditable="true" id="msg" ref="textarea" @keyup.enter="send()"></div>
    </div>
</template>

<script>
    export default {
        name: "Box",
        props: {
            target: Object,
        },
        methods: {

        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .ed {
        height: 150px;
        padding: 20px;
        & > div:nth-of-type(1) {
            position: relative;
            & > span {
                display: inline-block;
                width: 25px;
                margin-right: 8px;
                cursor: pointer;
                color: #8a8a8a;
                font-size: 25px;
            }
            .upload {
                width: 25px;
                height: 25px;
                cursor: pointer !important;
                background: red;
                position: absolute;
                top: 0;
                left: 37px;
                opacity: 0;
                & > input {
                    width: 100%;
                    cursor: pointer !important;
                }
            }
        }
        #msg {
            width: 100%;
            height: 120px;
            resize: none;
            border: none;
            outline: none;
            background: #eeeeee;
            & > img {
                width: 20px;
                position: relative;
                top: 4px;
            }
        }
    }
    .send {
        float: right;
        &>div{
            & > img {
                position: absolute;
                right: 0;
                top: 0;
                margin-left: 20px;
            }
            & > p {
                float: right;
                margin-right: 55px;
                position: relative;
                & > i {
                    border-color: transparent transparent transparent #b2e281;
                    right: -16px;
                }
                & > span {
                    background: #b2e281;
                    & > img {
                        width: 20px;
                        position: relative;
                        top: 4px;
                    }
                    .img {
                        max-width: 340px;
                    }
                }
                .shibai{
                    width: 35px;
                    height: 35px;
                    position: absolute;
                    top: 50%;
                    left:-45px;
                    transform: translateY(-50%);
                    cursor: pointer;
                    display: none;
                }
            }
        }

    }
    .send_ {
        float: right;
        &>div{
            & > img {
                position: absolute;
                right: 0;
                top: 0;
                margin-left: 20px;
            }
            & > p {
                float: right;
                margin-right: 55px;
                max-height: 350px;
                position: relative;
                & > i {
                    border-color: transparent transparent transparent white;
                    right: -16px;
                }
                & > span {
                    display: inline-block;
                    width: 100%;
                    background: white;
                    padding: 0;
                    overflow: hidden;
                    font-size: 0;
                    position: relative;
                    min-height: 70px;
                    &>div{
                        width: 250px;
                        background: white;
                        &>span{
                            font-size: 80px;
                            color: #0096e1;
                        }
                        &>div{
                            width: 160px;
                            height: 85px;
                            display: inline-block;
                            vertical-align: bottom;
                            padding: 15px 0 0 5px;
                            box-sizing: border-box;
                            &>span{
                                display: block;
                                font-size: 16px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                            &>span:nth-of-type(1){
                                margin-bottom: 5px;
                            }
                            &>span:nth-of-type(2){
                                font-size: 14px;
                                color: #999999;
                            }
                        }
                    }
                    & > span {
                        display: inline-block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.2);
                        top: 0;
                        left: 0;

                        & > span {
                            display: inline-block;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 50px;
                            transform: translate(-50%, -50%);
                            text-align: center;
                            &>span{
                                font-size: 12px;
                                color: white;
                            }
                            & > img {
                                width: 100%;
                            }
                        }
                    }
                    &>img{
                        width: 200px;
                        min-height: 70px;
                    }
                }
                .shibai{
                    width: 35px;
                    height: 35px;
                    position: absolute;
                    top: 50%;
                    left:-45px;
                    transform: translateY(-50%);
                    cursor: pointer;
                    display: none;
                }
            }
        }
    }
    .tips {
        width: 100%;
        text-align: center;
        float: left;
        display: block;
        &>span{
            font-size: 12px;
            color: #999999;
        }
    }
    .receive {
        float: left;
        &>div{
            & > img {
                margin-right: 20px;
            }
            & > p {
                & > i {
                    border-color: transparent white transparent transparent;
                    left: -16px;
                }
                & > span {
                    background: white;
                }
            }
        }

    }
    .receive_ {
        float: left;
        &>div{
            position: relative;
            & > img {
                position: absolute;
                left: 0;
                top: 0;
            }
            & > p {
                margin-left: 55px;
                max-height: 350px;
                position: relative;
                & > i {
                    border-color: transparent white transparent transparent;
                    left: -16px;
                }
                & > span {
                    display: inline-block;
                    width: 100%;
                    background: white;
                    padding: 0;
                    overflow: hidden;
                    font-size: 0;
                    position: relative;
                    min-height: 70px;
                    &>div{
                        width: 250px;
                        background: white;
                        &>span{
                            font-size: 80px;
                            color: #0096e1;
                        }
                        &>div{
                            width: 160px;
                            height: 85px;
                            display: inline-block;
                            vertical-align: bottom;
                            padding: 15px 0 0 5px;
                            box-sizing: border-box;
                            &>span{
                                display: block;
                                font-size: 16px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                            &>span:nth-of-type(1){
                                margin-bottom: 5px;
                            }
                            &>span:nth-of-type(2){
                                font-size: 14px;
                                color: #999999;
                            }
                        }
                    }
                    & > span {
                        display: inline-block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.2);
                        top: 0;
                        left: 0;

                        & > span {
                            display: inline-block;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 50px;
                            transform: translate(-50%, -50%);
                            text-align: center;
                            &>span{
                                font-size: 12px;
                                color: white;
                            }
                            & > img {
                                width: 100%;
                            }
                        }
                    }
                    &>img{
                        width: 200px;
                        min-height: 70px;
                    }
                }
                .shibai{
                    width: 35px;
                    height: 35px;
                    position: absolute;
                    top: 50%;
                    left:-45px;
                    transform: translateY(-50%);
                    cursor: pointer;
                    display: none;
                }
            }
        }
    }
</style>