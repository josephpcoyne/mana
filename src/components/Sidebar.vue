<template>
  <div class="flex p-5 bg-white float-left h-screen rounded-l-lg">
    <div class="flex flex-col items-center">
      <i class="fas fa-bars m-4 p-1 mb-6 pb-6" ></i>
    
      <router-link :to="{ name: 'email' }" class="tab grow">
        <i class="p-3 m-3 fas fw fa-envelope-open text-gray-500 z-10"></i>
      </router-link>
      <router-link :to="{ name: 'games' }"
        class="p-3 m-3 fas fw fa-gamepad text-gray-500" 
        tag="i">
      </router-link>
      <router-link :to="{ name: 'todo' }"
        class="p-3 m-3 fas fw fa-list-alt text-gray-500" 
        tag="i">
      </router-link>
      <router-link :to="{ name: 'calendar' }"     
        class="p-3 m-3 fas fw fa-calendar-alt text-gray-500" 
        tag="i">
      </router-link>
      <router-link :to="{ name: 'scheduler' }"   
        class="p-3 m-3 fas fw fa-clock text-gray-500" 
        tag="i">
      </router-link>
      <router-link :to="{ name: 'cloud' }"   
        class="p-3 m-3 fas fw fa-file text-gray-500" 
        tag="i">
      </router-link>
      <router-link :to="{ name: 'chat' }"
        class="p-3 m-3 fas fw fa-comments text-gray-500" 
        tag="i">
      </router-link>
      <router-link :to="{ name: 'settings' }"     
        class="p-3 m-3 fas fw fa-cog text-gray-500" 
        tag="i">
      </router-link>   
    </div>
  </div>
</template>

<script>
  export default {
    data() {
    },
    methods: {
    }
  };
</script>

<style scoped>
.fa-bars { 
  transform: scale(1.3,1);
  cursor: pointer;
  }
.fas:hover {
  color:  #32c0fb;
  cursor: pointer;
}
i {
  z-index: 10;
  position: relative;
}
a {
  cursor: default;
}
.router-link-exact-active .grow:before{ 
  transform: scale(2);
  
}
.router-link-exact-active i{
  color: #32c0fb;
}
.tab {
  width: 15px;
  height: 15px;
  position: relative;
  transform-origin: 0 0;
  transition: all 2s;
}
.tab:before{
  content: "";
  background-color: #e0f6ff;
  /* border-radius: 10px; */
  width: 15px;
  height: 15px;
  z-index: 1;
  position: absolute;
  transform-origin: 0 0;
  transition: all 2s;
}

/* @keyframes grow {
  from {
    transform: scale(0);
  }
  to {
  }
} */


</style>