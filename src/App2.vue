<template>
    <div>
        <luke-chat
                :serviceConnect="connectWebSocket"
                :serviceDisconnect="disconnectWebSocket"
                :profile="{name: '老子天下第一', avatar: 'http://127.0.0.1:8201/storage/avatar/SCVCKNonybb2Xt22Q8ID8kMcytzRzwQDSv3mCwvy.jpeg'}"
                serviceAddress="ws://192.168.1.222:7777"
        >
        </luke-chat>
    </div>
</template>

<script>
    import LukeChat from "../src/components/LukeChat";
    export default {
        name: "App2",
        components: { LukeChat },
        data() {
            return {
                lukeChat: {},

            };
        },
        methods: {
            connectWebSocket() {
                return true;
            },
            disconnectWebSocket(){
                return true;
            }
        },
        created(){
        }
    }
</script>

<style scoped>

</style>