<template>
	<div id="app" class="bg-gray-700">
		<NavBar @send-tab="sentTab" />
		<SidePanel :currentTab="currentTab" />
		<router-view />
	</div>
</template>

<style>
</style>

<script>
import NavBar from '@/components/NavBar.vue';
import SidePanel from '@/components/SidePanel.vue';

export default {
	components: {
		NavBar,
		SidePanel,
	},
	data() {
		return {
			currentTab: 'home',
		};
	},
	methods: {
		sentTab(e) {
			this.currentTab = e;
		},
	},
};
</script>
