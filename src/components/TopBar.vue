<template>
  <div class="top-bar">
    <!-- <i class="fas fa-search search"></i> -->
    <i class="fas fa-bell notification-icon"></i>
    <i class="fas fa-user user-icon"></i>
    <span>tocks@gmail.com</span>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
* {
  font-size: 14px;
}
.top-bar {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  order: 2;
  padding: 35px 50px;
}
.user-icon {
  font-size: 20px;
  color: #32c0fb;
  padding-right: 40px;
}
.notification-icon {
  font-size: 20px;  
  color: #a5aeba;
  padding-right: 40px;
}
.notification-icon:hover {
  color:  #32c0fb;  
}
</style>