<template>
  <div>
    <ChatPanel :people="people"/>
    <!-- <TopBar /> -->
  </div>
</template>

<script>
import ChatPanel from '@/components/chat/ChatPanel.vue';
import TopBar from '@/components/TopBar.vue';
  export default {
    name: "Chat",
    components: {
      ChatPanel,
      TopBar,
    },

  }
</script>

<style scoped>
</style>