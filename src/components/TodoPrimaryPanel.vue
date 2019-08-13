<template>
  <div class="main">
    <TopBar />
    To do list!
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
  export default {
    components: {
      TopBar,
    },
    
  }
</script>

<style scoped>
.main {
  display: flex;
  background-color: #f5f6f8;
  height: 860px;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0 10px 10px 0;
  
}
</style>