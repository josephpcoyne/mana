<template>
  <div class="content">
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
      },
    },
    data() {
      return {
        selected: undefined,
        active_el: 0,
        projects: [
          {
            id: 0,
            title: "Clean room",
            tasks: 3
          },
          {
            id: 1,
            title: "Finish app",
            tasks: 12
          },
        ]
      }
    },
    methods:{
      activate:function(el){
        this.active_el = el;
      }
    },
  }
</script>

<style scoped>
.title {
  font-family: 'Nunito', sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
  float: left;
  border-style: solid;
  border-color: #a5aeba3a;
  border-width: 1px;
  border-right: 1px;
  border-top: 1px;
  border-bottom: 1px;
  background-color: white;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  padding: 30px 20px;
  width: 20%;
  height: 91.5vh;
}
.title {
  margin-top: 20%;
}
.subtitle {
  color: #a5aeba
}
.items {
  list-style-type: none;
  margin-left: -10%;
  margin-top: -1%; 

}
.item {
  padding: 5px 0px 20px 1px;
  height: 20px;
  max-width: 240px;
}
li i {
  color: #a5aeba;
  padding: 10px;
  padding-left: 20px;
}
.task-count {
  font-size: 14px;
  color: #a5aeba;
  margin-left: 15%;
}
.active {  
  color: #32c0fb;
  background-color: #e0f6ff;
  border-radius: 40px;

  /* animation: createBox .25s; */
}
.options {
  margin-right: 4%;
  float: right;
}
.options:hover {
  color: #32c0fb;
}
.add-project {
  float: right;
  margin-top: 1%;
  color: #a5aeba;  
}
.add-project:hover {
  color: #32c0fb;
  
}
/* @keyframes createBox {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
} */
</style>