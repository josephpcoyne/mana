<template>
  <div class="flex justify-between w-full h-12 mx-10 my-6 ">
    <div class="flex items-center p-6">
      <i class="fas fa-search text-gray-500 mr-5"></i> 
      <input class="appearance-none bg-transparent border-none w-full text-gray-600 mr-6 py-1 px-2 text-base focus:outline-none" type="text" placeholder="Search...">
    </div>
    <ul class="flex items-center p-6">
      <li class="">
         <i class="fas fa-bell p-2 m-2 text-gray-500"></i>
      </li>
      <li class="">
        <i class="fas fa-user icon p-2 m-2 text-mana-200"></i>
      </li>
      <li class="m-2">
        <span class="text-sm p-2 ">joseph@coyne.dev</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>

.icon:hover {
  background-color: #e0f6ff;
  border-radius: 50%;
}
</style>