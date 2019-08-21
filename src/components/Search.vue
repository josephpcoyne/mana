<template>
  <div>
    <i class="fas fa-search search"></i> <span><input type="text" placeholder="Search..."class="search-form"></input></span>  
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .search {
    font-size: 18px;  
    color: #a5aeba;
    padding: 40px 0 0 50px;
    
  }
  .search-form {
    font-size: 18x;  
    color: #a5aeba;
    padding: 40px 0 0 20px;
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