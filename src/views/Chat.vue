<template>
  <div>
    <SidePanel />
    <TopBar />
  </div>
</template>

<script>
import SidePanel from '@/components/chat/SidePanel.vue';
import TopBar from '@/components/TopBar.vue';
  export default {
    components: {
      SidePanel,
      TopBar,
    },
  }
</script>

<style scoped>

</style>