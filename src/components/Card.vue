<template>
  <div class="container mx-auto py-10">
    <div class="m-6 rounded-lg  bg-white mx-auto max-w-sm rounded-lg overflow-hidden">
    	<div class="sm:flex sm:items-center px-6 py-4">
        	<!-- <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/196/abott@adorable.png" alt=""> -->
       		<div class="text-center sm:text-left sm:flex-grow">
          	<div class="mb-5">
            	<span class="text-base leading-tight">{{title}}</span>
              <i class="fas fa-ellipsis-h p-1 text-gray-500 hover:text-mana-200 float-right"></i>
                   	<!-- <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p> -->
           	</div>
            <div class="flex flex-wrap">
            	<button class="text-xs font-semibold text-gray-600 rounded-full px-4 py-1 leading-normal bg-gray-100 hover:bg-mana-100 hover:text-mana-200">+ Tag</button>
            	<span class="text-xs font-semibold text-green-600 rounded-full px-4 py-1 mx-2 leading-normal bg-green-200 hover:bg-mana-100 hover:text-mana-200">Design</span>
          	</div>
          </div>
       </div>
     </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      completed: Boolean
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>

</style>