<template>
  <div class="sidebar">

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
.sidebar {
  display: flex;
  flex-direction: column;
  float: left;
  background-color: white;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  padding: 30px 20px;
  /* padding: 15px, 20px; */
}

.toggle {
  margin: 0 auto;
  padding: 5px 10px 30px 15px;
}
i::before {
  cursor: pointer;
}
.menu {
  margin: 0 auto;
  color: #a5aeba;
  padding: 15px 15px; 
}
.menu:hover {
  color:  #32c0fb;
}
.selected {  
  color: #32c0fb;
  background-color: #e0f6ff;
  border-radius: 10px;
  animation: createBox .25s;
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