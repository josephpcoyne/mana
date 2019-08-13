<template>
  <div class="card">
    <div class="card-title">
      <h1>Favorite champion <i class="fas fa-ellipsis-h options"></i></h1>
    </div>
    <div class="card-body">
      <h1>Gnar!</h1>
      <p>He is the best.</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.card {
  align-self: flex-start; 
  height: auto;
  transition: 0.3s;
  font-family: "Lexend Deca", sans-serif;
  background-color: white;
  border-radius: 15px;
  padding: 2px, 15px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 100px 40px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-title {
  /* text-align: center; */
  font-family: "Lexend Deca", sans-serif;
  font-size: 8px;
  color: #a5aeba;
  padding: 10px 20px;
}
.card-body {
  font-family: "Lexend Deca", sans-serif;
  padding: 10px 20px;
}
.card-body p {
  color: #a5aeba;
}
.card-body h1 {
  color: black;
}
.options {
  padding-left: 20px;
}
.options:hover {
  color: #32c0fb;
}

</style>