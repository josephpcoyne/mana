<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
}
</script>
