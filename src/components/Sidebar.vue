<template>
  <!-- <div class="sidebar">

    <i class="fas toggle fa-bars"></i>
    
    <router-link to='/email'>
    <i class="fas menu fa-envelope-open" @click="activate(2)" :class="{ selected : active_el == 2 }"></i>
    </router-link>
    <i class="fas menu fa-gamepad" @click="activate(3)" :class="{ selected : active_el == 3 }"></i>
    <router-link to='/todo'>
    <i class="fas menu fa-list-alt" @click="activate(4)" :class="{ selected : active_el == 4 }"></i>
    </router-link>
    <i class="fas menu fa-calendar-alt" @click="activate(5)" :class="{ selected : active_el == 5 }"></i>
    <i class="fas menu fa-clock" @click="activate(6)" :class="{ selected : active_el == 6 }"></i>
    <i class="fas menu fa-file" @click="activate(7)" :class="{ selected : active_el == 7 }"></i>
    <i class="fas menu fa-comments" @click="activate(8)" :class="{ selected : active_el == 8 }"></i>
    <i class="fas menu fa-cog" @click="activate(9)" :class="{ selected : active_el == 9 }"></i>
  </div> -->
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