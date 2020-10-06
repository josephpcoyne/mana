<template>
	<nav class="flex p-4 bg-white md:float-left h-screen rounded-l-lg">
		<div class="md:flex md:flex-col md:items-center text-2xl">
			<i class="fas fa-bars m-6 my-6 mb-16 hidden md:block text-xl"></i>
			<button
				v-for="tab in tabs"
				:key="tab.id"
				class="m-2 my-3"
				:class="{ link : selectedTab == tab.component }"
				@click="sendTab(tab)"
			>
				<i class="fas m-2 p-2 text-gray-500 hover:cursor-pointer hover:text-mana-200" :class="tab.icon"></i>
			</button>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			selectedTab: null,
			tabs: [
				{
					route: '/email',
					component: 'EmailPanel',
					icon: 'fa-envelope-open',
				},
				{
					route: '/games',
					component: 'GamesPanel',
					icon: 'fa-gamepad',
				},
				{
					route: '/todo',
					component: 'TodoPanel',
					icon: 'fa-list-alt',
				},
				{
					route: '/calendar',
					component: 'CalendarPanel',
					icon: 'fa-calendar-alt',
				},
				{
					route: '/scheduler',
					component: 'SchedulerPanel',
					icon: 'fa-clock',
				},
				{
					route: '/cloud',
					component: 'CloudPanel',
					icon: 'fa-file',
				},
				{
					route: '/chat',
					component: 'ChatPanel',
					icon: 'fa-comments',
				},
				{
					route: '/settings',
					component: 'SettingsPanel',
					icon: 'fa-cog',
				},
			],
		};
	},
	methods: {
		sendTab(t) {
			this.selectedTab = t.component;
			this.saveStorage(this.selectedTab);
			this.$emit('send-tab', this.selectedTab);
		},
		openStorage () {
      return JSON.parse(localStorage.getItem('tab'));
    },
    saveStorage (tab) {
      localStorage.setItem('tab', JSON.stringify(tab));
    },
	},

	beforeMount () {
	const storedTab = this.openStorage()
	if (storedTab) {
		this.selectedTab = storedTab;
	}
}
};
</script>

<style scoped>
.fa-bars {
	transform: scale(1.3, 1);
	cursor: pointer;
}
.link {
	background-color: #e0f6ff;
	border-radius: 10px;
	/* animation: createBox 0.2s; */
}
.link i {
	color: #32c0fb;
}
</style>