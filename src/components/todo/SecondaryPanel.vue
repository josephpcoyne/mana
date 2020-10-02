<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/6">
    <span class="logo flex p-6 text-mana-200 text-2xl">mana</span>
      <div class="p-4 mt-8">
        <span class="text-md text-gray-500">Lists </span>
        <i class="fas fa-plus text-gray-500 text-md p-1 pt-1 cursor-pointer hover:text-mana-200"></i>  
      </div>
    <div class="p-2 flex flex-col items-center">
			<button v-for="list in lists" :key="list.id" :class="{active:list.id == selected}" @click="selected = list.id" 
      class="max-w-sm w-full m-2 my-1 p-2 text-gray-600 focus:text-gray-900 focus:outline-none rounded-lg focus:bg-mana-100">
				<div class="flex justify-between w-full">
					<i class="fas fa-list">
						<span class="leading-tight ml-2 font-thin">
							{{list.title}}
						</span>
					</i>
					
					<!-- <i class="fas fa-ellipsis-h text-gray-500 self-center hover:text-mana-200" v-if="selected == list.id"></i> -->
					<div class="text-sm text-gray-600">
						{{list.tasks}}
					</div>
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
/* .active {  
  background-color: #e0f6ff;
  border-radius: 10px;
}


.active>i {
  color: #32c0fb;
} */
</style>