<template>
  <div>
    <SecondaryPanel :pageTitle="pageTitle"/>
    <PrimaryPanel />
  </div>
</template>

<script>
import SecondaryPanel from '@/components/todo/SecondaryPanel.vue';
import PrimaryPanel from '@/components/todo/PrimaryPanel.vue';
  export default {
    components: {
      SecondaryPanel,
      PrimaryPanel
    },
    data() {
      return {
        pageTitle: "Todo"
      }
    },
  }
</script>

<style scoped>

</style>