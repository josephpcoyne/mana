<template>
  <section id="todo-panel">

    <div class="mb-12 py-3">
			<button
				class="flex m-auto font-bold py-2 px-4 rounded-lg shadow active:shadow-inner hover:text-mana-200 active:text-blue-200 text-sm text-gray-500"
			>New List</button>
		</div>
    <ul class="border-b pb-6 border-gray-200">
      <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700">
          <i class="fas fa-list-alt pr-4  text-gray-600  group-focus:text-mana-200"></i>
          All
        </span>
        <span class="font-sans-bold text-gray-600  group-focus:text-gray-800">15</span>
      </li>
      <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700">
          <i class="fas fa-calendar-day pr-4  text-gray-600  group-focus:text-mana-200"></i>
          Today
        </span>
        <span class="font-sans-bold text-gray-600  group-focus:text-gray-800">5</span>
      </li>
      <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700">
          <i class="fas fa-calendar-week pr-4  text-gray-600  group-focus:text-mana-200"></i>
          This Week
        </span>
        <span class="font-sans-bold text-gray-600  group-focus:text-gray-800">10</span>
      </li>
    </ul>

    <div class="py-3 mt-4 flex justify-between">
      <span class="text-md text-gray-500">Lists </span>
      <i class="fas fa-plus text-gray-500 text-sm p-1 pt-1 cursor-pointer hover:text-mana-200"></i>  
    </div>

    <ul v-for="list in lists" :key="list.id" @click="selected = list.id">
      <li tabindex="0" :class="{ 'pl-8': list.subList }" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700 truncate ...">
          <i v-if="list.folder && !list.isOpen" class="fas fa-folder pr-4  text-gray-600  group-focus:text-mana-200"></i>
          <i v-else-if="list.isOpen" class="fas fa-folder-open pr-4  text-gray-600  group-focus:text-mana-200"></i>
          <i v-else class="fas fa-list-ul pr-4  text-gray-600  group-focus:text-mana-200 "></i>
          {{list.title}}
        </span>
        <div class="flex justify-between items-center">
        <!-- <div class="inline-grid grid-cols-2 justify-items-center items-center"> -->
          <span class="text-gray-600 group-focus:text-gray-800 m-1 ">
            {{list.tasks}}
          </span>
            <i v-if="list.isOpen" class="fas fa-chevron-down fa-fw" ></i>
            <i v-if="!list.isOpen && list.folder" class="fas fa-fw fa-chevron-left"></i>
          </div>
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
            tasks: 3,
            folder: false,
            isOpen: false,
            subList: false
          },
          {
            id: 1,
            title: "Finish app",
            tasks: 7,
            folder: false,
            isOpen: false,
            subList: false
          },
          {
            id: 2,
            title: "House Renovations",
            tasks: 18,
            folder: true,
            isOpen: false,
            subList: false          
            },
          {
            id: 3,
            title: "Shopping Lists",
            tasks: 12,
            folder: true,
            isOpen: true,
            subList: false
          },
          {
            id: 5,
            title: "Groceries",
            tasks: 4,
            folder: false,
            isOpen: false,
            subList: true
          },
          {
            id: 6,
            title: "Hardware",
            tasks: 12,
            folder: false,
            isOpen: false,
            subList: true
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