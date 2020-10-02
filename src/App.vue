<template>
  <div id="app">
    <NavBar @send-tab="sentTab"/>
    <SidePanel :is="currentTab"/>
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
  import NavBar from '@/components/NavBar.vue';
	import SidePanel from '@/components/SidePanel.vue';
	import Email from '@/views/Email.vue';
	import Games from '@/views/Games.vue';

  export default {
    components: {
      NavBar,
			SidePanel,
			Email,
			Games
		},
		data() {
			return {
				currentTab: "home",
			}
		},
		methods: {
			sentTab(e) {
				this.currentTab = e.toLowerCase()
			}
		}
  }
</script>
