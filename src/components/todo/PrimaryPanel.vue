<template>
  <div class="flex content-start flex-wrap bg-gray-100 h-screen rounded-r-lg">
    <TopBar />
    
    <div class="flex p-6" v-for="item in items">
      <Card :title="item.title" :completed="item.completed" />
    </div>
   

  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopBar from '@/components/TopBar.vue';
import Card from '@/components/Card.vue';
import Search from '@/components/Search.vue';

export default {
  components: {
    TopBar,
    Card,
    Search
  },
  data() {
    return {
      items: [
        {
          title: "Make bed",
          completed: true
        },
        {
          title: "Vaccuum",
          completed: false
          
        },
        {
          title: "Fold clothes",
          completed: false
          
        },
      ]
    }
  },
  computed: mapState(['board'])
}
</script>

<style scoped>
/* .main {
  display: flex;

  background-color: #f5f6f8;

  height: 99.4vh;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0 10px 10px 0;
} */
</style>