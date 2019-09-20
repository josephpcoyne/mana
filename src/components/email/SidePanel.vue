<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/5">
    
    <span class="logo flex p-6 text-mana-200 text-2xl">mana</span>
    <div class="p-6"> 
      <router-link to="/inbox"><i class="fas fa-inbox m-3"></i>Inbox</router-link>
      <br>
      <router-link to="/starred"><i class="fas fa-star m-3"></i>Starred</router-link>
      <li><i class="fas fa-clock m-3"></i>Snoozed</li>
      <li><i class="fas fa-paper-plane m-3" ></i>Sent</li>
      <li><i class="fas fa-file m-3"></i>Drafts</li>   
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
