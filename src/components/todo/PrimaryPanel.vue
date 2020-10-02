<template>
  <div class="flex content-start flex-wrap bg-gray-100 h-screen rounded-r-lg">
    <TopBar />
    
    <div class="flex p-6 h-40" v-for="item in items" :key="item.id">
      <Card :title="item.title" :completed="item.completed" />
    </div>
    <div class="flex p-6">
      <div class="container mx-auto py-10">
        <div class=" border border-gray-400 m-6 bg-gray-200 mx-auto max-w-sm rounded-lg overflow-hidden">
        	<div class="sm:flex sm:items-center px-6 py-4">
         		<div class="text-center sm:text-left sm:flex-grow">
            	<div class="px-2 text-center">
                <input class="appearance-none bg-transparent border-none text-gray-600 py-1 text-sm focus:outline-none" type="text" v-model="newTask" placeholder="Add new task">
                <button @click="addTask()">Add</button>
             	</div>
            </div>
           </div>
         </div>
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
      ],
      newTask: ""
    }
  },
  methods: {
    addTask() {
      var newTask = {
        title: this.newTask,
        completed: false
      }
      if(this.newTask === "") {
        alert('Task name cannot be blank!')
      } else {
        this.items.push(newTask);
        this.newTask = "";
      }
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