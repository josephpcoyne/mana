<template>
  <div class="bg-white h-screen flex float-left border-l-2 border-gray-200">
    <div class="flex w-56">
      <div class="flex-auto p-6 mt-8">
        <span class="text-2xl">{{pageTitle}}</span>
        <i class="fas fa-plus text-gray-500 text-2xl p-1 float-right pt-1 cursor-pointer hover:text-mana-200"></i>  
      </div>
    </div>
    
    <!-- <h5 class="subtitle">Projects {{projects.length}}</h5>
    <ul class="items">
      <li class="item" v-for="project in projects" :class="{active:project.id == selected}" @click="selected = project.id">
        <i class="fas fa-check-square"></i>
        {{project.title}} <i class="fas fa-ellipsis-h options" v-if="selected == project.id"></i>
        <br />
        <span class="task-count">{{project.tasks}} tasks</span>
      </li>
    </ul> -->
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
/*  */
</style>