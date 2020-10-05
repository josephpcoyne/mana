<template>
	<section id="email-panel">
		<div class="mb-12 py-3">
			<button
				class="flex m-auto font-bold py-2 px-4 rounded-lg shadow active:shadow-inner hover:text-mana-200 active:text-blue-200 text-sm text-gray-500"
			>Compose Email</button>
		</div>

		<ul>
			<li tabindex="0" class="group flex justify-between items-center focus:bg-mana-100 h-8 rounded-lg cursor-pointer px-2 ">
				<!-- <router-link to="/inbox" class="group w-full focus:bg-mana-100 rounded-lg"> -->
					<span class="text-gray-600 group-focus:text-gray-600 group-focus:font-sans-bold">
						<i class="fas fa-inbox pr-8 text-gray-600 group-focus:text-mana-200"></i>
						Inbox
					</span>
					<span class="text-gray-600 group-focus:text-gray-800">27</span>
				<!-- </router-link> -->
			</li>
			<li tabindex="0" class="group flex justify-between items-center focus:bg-mana-100 h-8 rounded-lg cursor-pointer px-2 ">

				<!-- <router-link to="/starred"> -->
					<span class="text-gray-600 group-focus:text-gray-600 group-focus:font-sans-bold">
					<i class="fas fa-star pr-8 text-gray-600 group-focus:text-mana-200"></i>
						Starred</span>
					<span class="text-gray-600 group-focus:text-gray-800">5</span>

				<!-- </router-link> -->
			<li tabindex="0" class="group flex justify-between items-center focus:bg-mana-100 h-8 rounded-lg cursor-pointer px-2 ">


			<!-- <router-link to="/snoozed"> -->
					<span class="text-gray-600 group-focus:text-gray-600 group-focus:font-sans-bold">
				<i class="fas fa-clock pr-8 text-gray-600 group-focus:text-mana-200"></i>
					Snoozed</span>
				<span class="text-gray-600 group-focus:text-gray-800">3</span>

			<!-- </router-link> -->
			<li tabindex="0" class="group flex justify-between items-center focus:bg-mana-100 h-8 rounded-lg cursor-pointer px-2 ">


				<!-- <router-link to="/sent"> -->
					<span class="text-gray-600 group-focus:text-gray-600 group-focus:font-sans-bold">
					<i class="fas fa-paper-plane pr-8 text-gray-600 group-focus:text-mana-200"></i>
						Sent</span>
					<span class="text-gray-600 group-focus:text-gray-800">0</span>

				<!-- </router-link> -->
			</li>
			<li tabindex="0" class="group flex justify-between items-center focus:bg-mana-100 h-8 rounded-lg cursor-pointer px-2 ">


				<!-- <router-link to="/drafts"> -->
					<span class="text-gray-600 group-focus:text-gray-600 group-focus:font-sans-bold">
					<i class="fas fa-file pr-8 text-gray-600 group-focus:text-mana-200"></i>
						Drafts</span>
					<span class="text-gray-600 group-focus:text-gray-800">2</span>

				<!-- </router-link> -->
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'EmailPanel',
};
</script>

<style scoped>
li {
	list-style-type: none;
}
i {
	width: 16px;
	height: 16px;
}
/* .router-link-exact-active {
	color: #32c0fb !important;
	font-weight: bold;
}
.router-link-exact-active .email-count {
	visibility: visible !important;
	border-radius: 10px;
	background-color: #e0f6ff;
	color: #32c0fb;
} */
</style>
