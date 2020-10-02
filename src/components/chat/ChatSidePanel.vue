<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/6">
    <h1 class="logo flex p-6 text-mana-200 text-2xl">mana</h1>

    <div class="flex items-center m-2 mx-8">
      <!-- <img class="w-16 h-16 mb-10 -mx-5" src="@/assets/mana-logo-light.png" alt="Mana Logo"> -->

    </div>
  
  
    <div class="flex items-center m-2 my-4" v-for="person in people" :key="person.id">
      <div class="notification">
        <img class="w-10 h-10 rounded-full mr-5" src="@/assets/mp1.png" alt="Avatar of Jonathan Reinink">
        <span class="badge">3</span>
      </div>
      <div class="text-sm">
        <p class="text-gray-900 leading-none">{{ person.name }}</p>
        <p class="text-gray-600 truncate">Lorem ipsum dolor</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      people: {
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
.notification {
  position: relative;
  display: inline-block;
}

.notification .badge {
  position: absolute;
  top: -8px;
  right: 5px;
  padding: 1px 6px;
  border-radius: 50%;
  background: rgb(48, 179, 255);
  color: white;
  font-size: 10px;
}
</style>