<template>
  <!-- <div class="card">
    <i class="fas fa-ellipsis-h options"></i>
    <br>
    <div class="card-body">
      <li v-for="item in Items">
        <i class="fas fa-square" v-if="!item.completed"></i>
        <i class="fas fa-check-square" v-else></i>{{item.title}}
      </li>
    </div>
  </div> -->
  <div class="flex mx-auto p-6  bg-white max-w-xs rounded-lg shadow-lg">
    <div class="flex-shrink-0">
      <p class="h-12 w-12">Logo</p>
    </div>
    <div class="ml-6 pt-1">
      <h4 class="text-xl text-gray-900 leading-tight">Title</h4>
      <p class="text-base text-gray-600 leading-normal">Body Text Goes Here!</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      Items: {
        type: Array, 
      },
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>

</style>