<template>
  <div>
    <TodoPanel :pageTitle="pageTitle"/>
    <PrimaryPanel />
  </div>
</template>

<script>
import TodoPanel from '@/components/todo/TodoPanel.vue';
import PrimaryPanel from '@/components/todo/PrimaryPanel.vue';
  export default {
    name: "Todo",
    components: {
      TodoPanel,
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