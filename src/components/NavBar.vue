<template>
  <div class="flex p-6 bg-white md:float-left h-screen rounded-l-lg">
      <div class="md:flex md:flex-col md:items-center sm:flex-row sm:items-end text-2xl ">

        <i class="fas fa-bars m-6 my-6 mb-16 hidden md:block text-xl"></i>

        <button v-for="tab in tabs" :key="tab.id" class="m-2 my-3" :class="{ link : selectedTab == tab.component }" @click="sendTab(tab)">
          <i class="fas m-2 p-2 text-gray-500" :class="tab.icon"></i>
        </button>

      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        selectedTab: null,
        tabs: [
          {
            route: "/email",
            component: "EmailPanel",
            icon: "fa-envelope-open"
          },
          {
            route: "/games",
            component: "Games",
            icon: "fa-gamepad"
          },
          {
            route: "/todo",
            component: "Todo",
            icon: "fa-list-alt"
          },
          {
            route: "/calendar",
            component: "Calendar",
            icon: "fa-calendar-alt"
          },
          {
            route: "/scheduler",
            component: "Scheduler",
            icon: "fa-clock"
          },
          {
            route: "/cloud",
            component: "Cloud",
            icon: "fa-file"
          },
          {
            route: "/chat",
            component: "Chat",
            icon: "fa-comments"
          },
          {
            route: "/settings",
            component: "Settings",
            icon: "fa-cog"
          }
        ]
      }
    },
    methods: {
      sendTab(t) {
        this.selectedTab = t.component;
        if (this.$route.path !== "/") this.$router.push('/');
        this.$emit('send-tab', this.selectedTab);
      }
    }
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
button {
  outline: none;
}
.link {
  background-color: #e0f6ff;
  border-radius: 10px;
  animation: createBox .20s;
}
.link i {
  color: #32c0fb;
}


</style>