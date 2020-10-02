<template>
  <div>
    <ChatSidePanel :people="people"/>
    <TopBar />
  </div>
</template>

<script>
import ChatSidePanel from '@/components/chat/ChatSidePanel.vue';
import TopBar from '@/components/TopBar.vue';
  export default {
    components: {
      ChatSidePanel,
      TopBar,
    },
    data() {
      return {
        people: [
          { id: 1, name: "Justin Baker" },
          { id: 2, name: "Sean Hass" }, 
          { id: 3, name: "Micah Castaneda" }
          ]
      }
    },
  }
</script>

<style scoped>
</style>