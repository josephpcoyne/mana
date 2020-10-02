<template>
  <div class="flex p-6 bg-white md:float-left h-screen rounded-l-lg">
      <div class="md:flex md:flex-col md:items-center sm:flex-row sm:items-end text-2xl ">
        <i class="fas fa-bars m-6 my-6 mb-12 hidden md:block text-xl"></i>

        <router-link exact to='/email' class="m-2 my-3">
          <i class="fas fa-envelope-open m-2 p-2 text-gray-500"></i>
        </router-link>
        <router-link exact to='/games' class="m-2 my-3">
          <i class="fas fa-gamepad m-2 p-2 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/todo' class="m-2 my-3">
          <i class="fas fa-list-alt m-2 p-2 text-gray-500"></i>
        </router-link>

        <router-link exact to='/calendar' class="m-2 my-3">
          <i class="fas fa-calendar-alt m-2 p-2 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/scheduler' class="m-2 my-3">
          <i class="fas fa-clock m-2 p-2 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/cloud' class="m-2 my-3">
          <i class="fas fa-file m-2 p-2 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/chat' class="m-2 my-3">
         <i class="fas fa-comments m-2 p-2 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/settings' class="m-2 mt-48">
         <i class="fas fa-cog m-2 p-2 text-gray-500"></i>
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
.router-link-exact-active {
  background-color: #e0f6ff;
  border-radius: 10px;
  animation: createBox .25s;
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

</style>