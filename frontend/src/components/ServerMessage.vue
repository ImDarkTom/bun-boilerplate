<script lang="ts">
    export default {
        data() {
            return {
                apiMsg: 'Waiting for response...',
                messageLoaded: false,
            }
        },
        mounted() {
            fetch('/api/status')
                .then(response => response.json())
                .then(data => {
                    this.apiMsg = data.message;
                    this.messageLoaded = true;
                });
        }
    }
</script>

<template>
  <span :class="{ loaded: messageLoaded }">API status: {{ apiMsg }}</span>
</template>

<style scoped>
span {
  color: #b8b842;
  font-weight: bold;
}

span.loaded {
    color: #42b883;
}
</style>
