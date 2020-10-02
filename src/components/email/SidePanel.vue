<template>
<<<<<<< HEAD
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/5">
    <span class="logo flex p-6 text-mana-200 text-2xl">mana</span>
    <div class="p-6 text-gray-600"> 
      <router-link to="/inbox"><i class="fas fa-inbox m-3"></i>Inbox</router-link>
      <br>
      <router-link to="/starred"><i class="fas fa-star m-3"></i>Starred</router-link>
      <li><i class="fas fa-clock m-3"></i>Snoozed</li>
      <li><i class="fas fa-paper-plane m-3" ></i>Sent</li>
      <li><i class="fas fa-file m-3"></i>Drafts</li>   
=======
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/6">
    
    <span class="logo flex p-6 text-mana-200 text-2xl">mana</span>
      <div class="py-3">
          <button class="flex m-auto font-bold py-2 px-4 rounded-lg shadow active:shadow-none hover:text-mana-200 text-sm text-gray-500 active:shadow-none">
  Compose Email
          </button>
      </div>
    <div class="p-6 "> 
      <ul>
        <li>
          <router-link to="/inbox"><i class="fas fa-inbox m-3 pr-1 "></i> <span class="pl-1">Inbox</span><span class="email-count float-right px-1 m-2 mt-2">27</span></router-link>
        </li>
        <li >
          <router-link to="/starred"><i class="fas fa-star m-3 pr-1"></i> <span class="pl-1">Starred</span></router-link>
        </li >
          <router-link to="/snoozed"><i class="fas fa-clock m-3 pr-1"></i> <span class="pl-1">Snoozed</span></router-link>
        <li>
          <router-link to="/sent"><i class="fas fa-paper-plane m-3 pr-1"></i> <span class="pl-1">Sent</span></router-link>
        </li>
        <li>
          <router-link to="/drafts"><i class="fas fa-file m-3 pr-1"></i><span class="pl-1">Drafts</span></router-link>   
        </li>
      </ul>





>>>>>>> master
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
<<<<<<< HEAD
/* .router-link-active {
  color: black;
  background-color: #e0f6ff;
  border-radius: 10px;
  animation: createBox .25s;
}
.router-link-exact-active i {
  color: #32c0fb;
} */
=======
i {
width: 16px;
height: 16px;
}
.email-count {
  /* visibility: hidden; */
}
.router-link-exact-active {
  color: #32c0fb !important;
  font-weight: bold;
}
.router-link-exact-active .email-count {
  visibility: visible !important;
  border-radius: 10px;
  background-color: #e0f6ff;
  color: #32c0fb;
}
button:focus {outline:0;}
>>>>>>> master
</style>
