<template>
    <div class="message-self">
        {{ message.content }}
    </div>
</template>

<script>
    export default {
        name: "Self",
        props: {
            message: Object,
        }
    }
</script>

<style scoped>
    .message-self {
        float: right;
    }
</style>