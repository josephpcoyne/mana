<template>
	<section id="chat-panel">
		<div class="flex items-center m-2 my-4" v-for="user in users" :key="user.id">
			<div class="notification">
				<img class="w-10 h-10 rounded-full mr-5" src="@/assets/mp1.png" alt="Chat Avatar" />
				<span class="badge">3</span>
			</div>
			<div class="text-sm">
				<p class="text-gray-900 leading-none">{{ user.name }}</p>
				<p class="text-gray-600 truncate">Lorem ipsum dolor</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ChatPanel',
	props: {
		people: {
			type: Array,
		},
	},
    data() {
      return {
        users: [
          { id: 1, name: "Justin Baker" },
          { id: 2, name: "Sean Hass" }, 
          { id: 3, name: "Micah Castaneda" }
          ]
      }
    },
};
</script>

<style scoped>
.notification {
	position: relative;
	display: inline-block;
}

.notification .badge {
	position: absolute;
	top: -8px;
	right: 5px;
	padding: 1px 6px;
	border-radius: 50%;
	background: rgb(48, 179, 255);
	color: white;
	font-size: 10px;
}
</style>