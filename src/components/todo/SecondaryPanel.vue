<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/6">
  <span class="logo flex p-6 text-mana-200 text-2xl">mana</span>
    <div class="flex">
      <div class="flex-auto p-6 mt-8">
        <span class="text-xl focus:text-red-600">Projects - {{projects.length}}</span>
        <i class="fas fa-plus text-gray-500 text-2xl p-1 float-right pt-1 cursor-pointer hover:text-mana-200"></i>  
      </div>
    </div>
        
		<button v-for="project in projects" :key="project.id" :class="{active:project.id == selected}" @click="selected = project.id" class="group max-w-sm mx-auto focus:text-gray-700 focus:outline-none w-full flex my-4 p-2 text-gray-600">
			<div class="flex justify-between w-full">
				<i class="fas fa-list">
					<span class="leading-tight ml-2 font-thin group-focus:font-medium ">
						{{project.title}}
					</span>
				</i>
				
				<!-- <i class="fas fa-ellipsis-h text-gray-500 self-center hover:text-mana-200" v-if="selected == project.id"></i> -->
				<div class="text-sm text-gray-600">
					{{project.tasks}}
				</div>
			</div>
		</button>

    
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
/* .active {  
  background-color: #e0f6ff;
  border-radius: 10px;
}


.active>i {
  color: #32c0fb;
} */
</style>