<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<style>
#app {
  /* display: flex; */
  /* height: 100vh; */
}
</style>

<script>
import Sidebar from '@/components/Sidebar.vue';
import SecondaryPanel from '@/components/SecondaryPanel.vue';

export default {
  components: {
    Sidebar,
    SecondaryPanel
  },
}
</script>
