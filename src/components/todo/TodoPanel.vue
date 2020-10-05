<template>
  <section id="todo-panel">

    <div class="mb-12 py-3 ">
			<button
				class="flex m-auto font-bold py-2 px-4 rounded-lg shadow active:shadow-inner hover:text-mana-200 active:text-blue-200 text-sm text-gray-500"
			>New List</button>
		</div>
    <ul class="border-b pb-6 border-gray-200">
      <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700">
          <i class="fas fa-list-alt pr-3  text-gray-600  group-focus:text-mana-200"></i>
          All
        </span>
        <span class="font-sans-bold text-gray-600  group-focus:text-gray-800">15</span>
      </li>
      <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700">
          <i class="fas fa-calendar-day pr-3  text-gray-600  group-focus:text-mana-200"></i>
          Today
        </span>
        <span class="font-sans-bold text-gray-600  group-focus:text-gray-800">5</span>
      </li>
      <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100 ">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700">
          <i class="fas fa-calendar-week pr-3  text-gray-600  group-focus:text-mana-200"></i>
          This Week
        </span>
        <span class="font-sans-bold text-gray-600  group-focus:text-gray-800">10</span>
      </li>
    </ul>

    <div class="py-3 mt-4 flex justify-between">
      <span class="text-md text-gray-500">Lists</span>
      <i class="fas fa-plus text-gray-500 text-sm p-1 pt-1 cursor-pointer hover:text-mana-200"></i>  
    </div>

    <ul v-for="list in lists" :key="list.id" @click="selected = list.id">
      <li tabindex="0" :class="{ 'pl-8': list.subList }" 
      class="group flex justify-between items-center h-8 rounded-lg px-2 my-1 cursor-pointer focus:bg-mana-100"
      @click="rotate(list)">
        <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700 truncate ...">
          <i v-if="list.folder && !list.isOpen" class="fas fa-folder pr-3 text-gray-600  group-focus:text-mana-200"></i>
          <i v-else-if="list.isOpen" class="fas fa-folder-open pr-3 text-gray-600  group-focus:text-mana-200"></i>
          <i v-else class="fas fa-list-ul pr-3 text-gray-600 group-focus:text-mana-200 "></i>
          {{list.title}}
        </span>
        <div class="flex items-center pl-2">
          
          <span v-if="!list.folder" class="text-gray-600 group-focus:text-gray-800">
            {{list.tasks}}
          </span>
          <span else class="text-gray-600 group-focus:text-gray-800">
            {{totalTasks(list.sublists)}}
          </span>

          <div :class="{'pl-2' : list.folder}">
            <i v-if="list.folder" class="fas fa-chevron-left fa-fw norm text-gray-600 " :class="{ rotate : list.isOpen }"></i>
          </div>

        </div>

      </li>
      <div v-if="list.sublists && list.isOpen">
        <ul v-for="sublist in list.sublists" :key="sublist.id" @click="selected = sublist.id">
        <li tabindex="0" class="group flex justify-between items-center h-8 rounded-lg px-2 pl-8 my-1 cursor-pointer focus:bg-mana-100"
        @click="rotate(sublist)">
          <span class="text-gray-600 group-focus:font-sans-bold group-focus:text-gray-700 truncate">
            <i class="fas fa-list-ul pr-3  text-gray-600  group-focus:text-mana-200"></i>
            {{sublist.title}}
          </span>
          <div class="flex items-center pl-2">
            <span class="text-gray-600 group-focus:text-gray-800">
              {{sublist.tasks}}
            </span>
          </div>
        </li>
      </ul>

      </div>
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
        a: 1,
        selected: undefined,
        active_el: 0,
        lists: [
          {
            id: 0,
            title: "Clean room",
            tasks: 3,
            folder: false,
            isOpen: false,
            sublists: []
          },
          {
            id: 1,
            title: "Finish app",
            tasks: 7,
            folder: false,
            isOpen: false,
            sublists: []
          },
          {
            id: 2,
            title: "House Renovations",
            tasks: 18,
            folder: true,
            isOpen: false,
            sublists: []  
          },
          {
            id: 3,
            title: "Shopping Lists",
            tasks: 12,
            folder: true,
            isOpen: true,
            sublists: [
              {
                id: 0,
                title: "Groceries",
                tasks: 4,
              },
              {
                id: 1,
                title: "Hardware",
                tasks: 12,
              },
            ]  
          },

        ]
      }
    },
    methods:{
      activate:function(el){
        this.active_el = el;
      },
      rotate(el) {
        if(el.folder) el.isOpen = !el.isOpen;
      },
      totalTasks(lists) {
        if(lists.length > 0){
          return lists.reduce((prev, cur) => {
            return prev + cur.tasks;
          }, 0);
        } else return "";
      }

    },
    computed: {

    },
  }
</script>

<style scoped>
.norm{
    -moz-transition: all .15s linear;
    -webkit-transition: all .15s linear;
    transition: all .15s linear;
}

.rotate{
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    transform:rotate(-90deg);
}
</style>