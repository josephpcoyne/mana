<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 w-1/6">
    <div class="flex justify-center p-4 mt-5">
      <span class="logo text-mana-200 text-2xl">mana</span>
    </div>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
  import Home from '@/views/Home.vue';
	import EmailPanel from '@/components/email/EmailPanel.vue';
	import Games from '@/views/Games.vue';
  export default {
    name: "SidePanel",
    components: {
      Home,
      EmailPanel,
      Games,
    },
    props: {
      currentTab: {
        type: String,
        default: "home",
        required: true
      }
    },
    data() {
      return {
        
      }
    },
    methods: {

		}
  }
</script>

<style scoped>
</style>