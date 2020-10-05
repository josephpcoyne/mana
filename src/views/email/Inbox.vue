<template>
  <div class="flex content-start flex-wrap bg-gray-100 h-screen rounded-r-lg">
    <TopBar />
    <!-- <MainPanel /> -->
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
// import MainPanel from '@/components/email/MainPanel.vue';
  export default {
    components: {
      TopBar,
      // MainPanel
    },
    created () {
      localStorage.setItem('tab', JSON.stringify('EmailPanel'));
    },
  }
</script>

<style scoped>

</style>