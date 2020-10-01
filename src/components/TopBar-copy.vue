<template>
  <div class="top-bar">
    <div class="search-bar">
      <i class="fas fa-search search"></i> 
      <input type="text" placeholder="Search..." class="search-form"></input>
    </div>
    <div class="user-info">
      <i class="fas fa-bell notification-icon"></i>
      <i class="fas fa-user user-icon"></i>
      <span>tocks@gmail.com</span>
    </div>
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
  padding: 35px 50px;
  /* justify-content: space-between;   */
  
}
.user-info {
  display: flex;
}
.user-icon {
  font-size: 18px;
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
.search {
  font-size: 18px;  
  color: #a5aeba;
  padding-right: 10px;
  
}
.search-form {
  font-size: 18x;  
  color: #a5aeba;
  /* padding: 40px 0 0 20px; */
  font-size: 14px;

}
input {
  font-size: 18px;  
  color: #a5aeba;
  background: transparent;
  border-top: transparent !important;
  border-left: transparent !important;
  border-right: transparent !important;
  border-bottom: transparent !important;
  font-weight: 200;
  color: white;
  padding-left: 0;
  box-shadow: none !important;
}
textarea, input { outline: none; }
</style>