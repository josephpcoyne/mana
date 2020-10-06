<template>
	<section id="chat-panel">
		<div class="mb-8 py-3 ">
			<button
				class="flex m-auto font-bold py-2 px-4 rounded-lg shadow active:shadow-inner hover:text-mana-200 active:text-blue-200 text-sm text-gray-500">
				New Message
			</button>
		</div>
		<ul v-for="user in users" :key="user.id">
			<li tabindex="0" class="flex items-center justify-between rounded-lg cursor-pointer px-2 mb-4 hover:bg-mana-50 focus:bg-mana-100" >
				<div  class="flex items-center truncate">
					<img class="w-10 h-10 rounded-full mr-4 " src="@/assets/mp1.png" alt="Avatar">
					<div class="text-sm">
						<p class="text-gray-900 leading-none">{{ user.name }}</p>
						<p class="text-gray-600 ">Lorem ipsum dolor something</p>
					</div>
				</div>
				<!-- <div class="notification">
					<img class="w-10 h-10 rounded-full mr-5" src="@/assets/mp1.png" alt="Chat Avatar" />
					<span class="badge">3</span>
				</div> -->
			</li>
		</ul>
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