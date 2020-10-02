<template>
  <div>
    <SidePanel />    
    <router-view></router-view>
  </div>
</template>

<script>
import SidePanel from '@/components/email/SidePanel.vue';

  export default {
    components: {
      SidePanel,
    },
  }
</script>

<style scoped>

</style>