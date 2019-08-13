<template>
  <div class="main">
    <div class="content">
      <TopBar />
      <Card />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Card from '@/components/Card.vue';
  export default {
    components: {
      TopBar,
      Card
    },
    
  }
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  background-color: #f5f6f8;
  height: 750px;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0 10px 10px 0;
}
.content {
  display: flex;
  flex-direction: row;
}
</style>