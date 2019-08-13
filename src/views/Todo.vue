<template>
  <div>
    <TodoSidePanel :pageTitle="pageTitle"/>
    <TodoPrimaryPanel />
  </div>
</template>

<script>
import TodoSidePanel from '@/components/TodoSidePanel.vue';
import TodoPrimaryPanel from '@/components/TodoPrimaryPanel.vue';
  export default {
    components: {
      TodoSidePanel,
      TodoPrimaryPanel
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