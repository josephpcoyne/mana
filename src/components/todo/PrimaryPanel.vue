<template>
  <div class="main">
    <!-- <Search /> -->
    <TopBar />
    <div class="content">
    <div class="column" v-for="column of board.columns">
      
    </div>
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
.main {
  display: flex;
  /* flex-direction: row; */
  background-color: #f5f6f8;
  /* width: 100%; */
  height: 99.4vh;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0 10px 10px 0;
}
</style>