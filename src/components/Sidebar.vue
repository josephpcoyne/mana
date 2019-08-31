<template>
  <div class="flex p-5 bg-white float-left h-screen rounded-l-lg">
      <div class="flex flex-col items-center">
        <i class="fas fa-bars m-5"></i>
        <router-link to='/email'>
          <i class="fas fa-envelope-open m-5 text-gray-500"></i>
        </router-link>
        <router-link to='/games'>
        <i class="fas fa-gamepad m-5 text-gray-500"></i>
        </router-link>
        
        <router-link to='/todo'>
        <i class="fas fa-list-alt m-5 text-gray-500"></i>
        </router-link>

        <router-link to='/calendar'>        
        <i class="fas fa-calendar-alt m-5 text-gray-500"></i>
        </router-link>
        
        <router-link to='/scheduler'>      
        <i class="fas fa-clock m-5 text-gray-500"></i>
        </router-link>
        
        <router-link to='/cloud'>        
        <i class="fas fa-file m-5 text-gray-500"></i>
        </router-link>
        
        <router-link to='/chat'>
        <i class="fas fa-comments m-5 text-gray-500"></i>
        </router-link>
        
        <router-link to='/settings'>        
        <i class="fas fa-cog m-5 text-gray-500"></i>
        </router-link>        
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active_el: 0
      }
    },
    methods:{
      activate:function(el){
        this.active_el = el;
      }
    },
  };
</script>

<style scoped>
.fas:hover {
  color:  #32c0fb;
}
.router-link-exact-active {
  background-color: #e0f6ff;
  border-radius: 10px;
  animation: createBox .25s;
}
.router-link-exact-active i {
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