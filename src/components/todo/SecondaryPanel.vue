<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/5">
    <div class="flex">
      <div class="flex-auto p-6 mt-8">
        <span class="text-xl">Projects {{projects.length}}</span>
        <i class="fas fa-plus text-gray-500 text-2xl p-1 float-right pt-1 cursor-pointer hover:text-mana-200"></i>  
      </div>
    </div>
    <div class="flex p-6 mt-8">
      <h5 class="text-2xl">Projects</h5>
    </div>
    <div v-for="project in projects" :class="{active:project.id == selected}" @click="selected = project.id">
        
      <button class="max-w-sm mx-auto flex p-3 focus:bg-gray-200 focus:outline-none w-30 rounded-full py-2 px-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="@/assets/mp1.png" alt="Project Icon">
        </div>
        
        <div class="ml-6 pt-1">
          <span class="text-base text-gray-900 leading-tight">{{project.title}}</span>
          <i class="fas fa-ellipsis-h text-gray-500 m-2 pl-4 float-right" v-if="selected == project.id"></i>
          
          <p class="text-sm text-gray-600 leading-normal">{{project.tasks}} tasks</p>
        </div>
      </button>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
      },
    },
    data() {
      return {
        selected: undefined,
        active_el: 0,
        projects: [
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
.selected {
 bac
}
</style>