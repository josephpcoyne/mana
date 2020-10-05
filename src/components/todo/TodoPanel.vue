<template>
  <section id="todo-panel">

    <div class="mb-12 py-3">
			<button
				class="flex m-auto font-bold py-2 px-4 rounded-lg shadow active:shadow-inner hover:text-mana-200 active:text-blue-200 text-sm text-gray-500"
			>New List</button>
		</div>

    <div class="py-3 mt-8 flex justify-between">
      <span class="text-md text-gray-500">Lists </span>
      <i class="fas fa-plus text-gray-500 text-sm p-1 pt-1 cursor-pointer hover:text-mana-200"></i>  
    </div>
    <ul v-for="list in lists" :key="list.id" @click="selected = list.id">
      <li tabindex="0" class="group flex justify-between items-center focus:bg-mana-100 h-8 rounded-lg cursor-pointer px-2 my-1 ">
        <span class="text-gray-600 group-focus:text-gray-800">
          <i class="fas fa-list-ul pr-4 text-gray-600 group-focus:text-mana-200"></i>
          {{list.title}}
        </span>
        <span class="text-gray-600 group-focus:text-gray-800">{{list.tasks}}</span>
      </li>
    </ul>
    
  </section>
</template>

<script>
  export default {
    name: "TodoPanel",
    props: {
      pageTitle: {
        type: String,
      },
    },
    data() {
      return {
        selected: undefined,
        active_el: 0,
        lists: [
          {
            id: 0,
            title: "Clean room",
            tasks: 3
          },
          {
            id: 1,
            title: "Finish app",
            tasks: 12
          },
        ]
      }
    },
    methods:{
      activate:function(el){
        this.active_el = el;
      }
    },
  }
</script>

<style scoped>

</style>