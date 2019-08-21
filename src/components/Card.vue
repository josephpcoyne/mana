<template>
  <div class="card">
    <i class="fas fa-ellipsis-h options"></i>
    <br>
    <div class="card-body">
      <li v-for="item in Items">
        <i class="fas fa-square" v-if="!item.completed"></i>
        <i class="fas fa-check-square" v-else></i>{{item.title}}
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      Items: {
        type: Array, 
      },
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
.card {
  height: auto;
  transition: 0.3s;
  font-family: "Lexend Deca", sans-serif;
  background-color: white;
  border-radius: 15px;
  padding: 25px 25px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.05);
  /* padding: 20px 5px; */
  margin-top: 80%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
li {
  list-style-type: none;
}
li i {
  color: #a5aeba;
  padding: 10px;
  padding-left: 20px;
}
/* .card-title {
  font-family: "Lexend Deca", sans-serif;
  font-size: 8px;
  color: #a5aeba;
  padding: 5px 10px;
} */
.card-body {
  margin-left: -10%;
  font-family: "Lexend Deca", sans-serif;
  /* padding: 5px 20px; */
}
.options {
  float: right;
  color: #a5aeba;
}
.options:hover {
  color: #32c0fb;
}

</style>