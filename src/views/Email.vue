<template>
  <div>
    <h1>qesfd</h1>
    <!-- <SidePanel />     -->
    <router-view></router-view>
  </div>
</template>

<script>
import SidePanel from '@/components/email/SidePanel.vue';
  export default {
    name: "Email",
    components: {
      SidePanel,
    },
  }
</script>

<style scoped>

</style>