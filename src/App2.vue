<template>
    <div>
        <luke-chat
                :serviceConnect="connectWebSocket"
                :serviceDisconnect="disconnectWebSocket"
                :profile="{name: '老子天下第一', avatar: 'http://127.0.0.1:8201/storage/avatar/SCVCKNonybb2Xt22Q8ID8kMcytzRzwQDSv3mCwvy.jpeg'}"
                serviceAddress="ws://127.0.0.1:7777"
                :serviceConnectHeaders="{
                    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhhODY4YWM3YzI3YjU2ZDgyOWE4M2RmZDEwNzI4MzUxMjc5MmRiYzA2Yjk1OGYxOTc3ZGQ3YmRjYzA1YmQ1NWZjM2Q0YmZhMTJhYmNhMWRhIn0.eyJhdWQiOiI4IiwianRpIjoiOGE4NjhhYzdjMjdiNTZkODI5YTgzZGZkMTA3MjgzNTEyNzkyZGJjMDZiOTU4ZjE5NzdkZDdiZGNjMDViZDU1ZmMzZDRiZmExMmFiY2ExZGEiLCJpYXQiOjE1NTEyNDU3NTcsIm5iZiI6MTU1MTI0NTc1NywiZXhwIjoxNTgyNzgxNzU3LCJzdWIiOiIxMCIsInNjb3BlcyI6W119.S0-Te_pJwg5_Pw473DFc2NtzhelInTuDns82lB8W0XK_0o43bEYu3rHy5ACvj-AhdMhWiMbAUy7gOU6RZZqBMU-xx4MemumpD9GVYzHedBFca-J6TNtP_eSYhtoccmgr5Imx7D-FtZp-2hIfOclkk9Z0PcwTKfwsNWv-iCE3fpOVvjapY435z4-9wnOZrRx8qpChUe6uRi_tS78dwcR24dibTLo2Hosqs7mAI6nCvNbzEqFjK06rL_rP0yVmxRg7DIlgLt9ZAodQ-v4dCsG8LwQMuTjdO1rXH8ji-lsa7wxMpJLMNU39FB8wqy8ewTbkrvArZrl0C_qipCqVOqxDJ9FWJzNHWPSG0fQUPEx36bvvgQPGyX9XVJR5p-9R6O8TOmR75QJ8_d7vwBhSBXO2NR8SOx44_wWKLZvP_9NclEbwEFvdOceZ1ZvxIQ90PTcpsRNwLXAKNIfp7OKpIPdxjMpmRYLWhShfP74AVr-emqzXHbGTRZiBQ8bmEj17QryWsty3cUh050HcQZzlOZUvOynzEiuEymfKzZmYQ6rA1qJgqVb8bX8dU3wxBW2oX4M9mpu6N6YNVfF5HOhgDq34T2zDMbrgbb8NQATCDLPuitZuGJETKu5U5VqHvm3gKd3m7Qx5TgI_rYRj7to0yFYPLNGqN73gJzayusy0YYnaO4k',
                    type: 'headmaster'
                }"
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
                test: 'laozhou'
            };
        },
        methods: {
            connectWebSocket() {
                return true;
            },
            disconnectWebSocket(){
                return true;
            }
        }
    }
</script>

<style scoped>

</style>