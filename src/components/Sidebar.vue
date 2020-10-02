<template>
  <div class="flex p-3 bg-white md:float-left h-screen rounded-l-lg">
      <div class="md:flex md:flex-col md:items-center sm:flex-row sm:items-end">
        <i class="fas fa-bars m-5 mb-6 hidden md:block"></i>
        <router-link exact to='/email'>
          <i class="fas fa-envelope-open m-5 text-gray-500"></i>
        </router-link>
        <router-link exact to='/games'>
        <i class="fas fa-gamepad m-5 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/todo'>
        <i class="fas fa-list-alt m-5 text-gray-500"></i>
        </router-link>

        <router-link exact to='/calendar'>        
        <i class="fas fa-calendar-alt m-5 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/scheduler'>      
        <i class="fas fa-clock m-5 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/cloud'>        
        <i class="fas fa-file m-5 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/chat'>
        <i class="fas fa-comments m-5 text-gray-500"></i>
        </router-link>
        
        <router-link exact to='/settings'>        
        <i class="fas fa-cog m-5 text-gray-500"></i>
        </router-link>        
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
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
a {
  cursor: default;
}
.router-link-exact-active {
  background-color: #e0f6ff;
  border-radius: 10px;
  animation: createBox .25s;
  color: #32c0fb;

}
@keyframes createBox {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

</style>