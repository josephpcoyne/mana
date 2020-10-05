<template>
  <div class="bg-white h-screen float-left border-l border-gray-200 max-w-xs w-1/6 ">
    <div class="flex justify-center p-4 mt-5">
      <span class="font-logo text-mana-200 text-3xl">mana</span>
    </div>
    <component class="p-4" :is="currentTab"></component>
  </div>
</template>
<script>
  import Home from '@/views/Home.vue';
	import EmailPanel from '@/components/email/EmailPanel.vue';
	import GamesPanel from '@/components/games/GamesPanel.vue';
	import TodoPanel from '@/components/todo/TodoPanel.vue';
	import ChatPanel from '@/components/chat/ChatPanel.vue';
	import SchedulerPanel from '@/components/scheduler/SchedulerPanel.vue';
	import CloudPanel from '@/components/cloud/CloudPanel.vue';
	import CalendarPanel from '@/components/calendar/CalendarPanel.vue';
	import SettingsPanel from '@/components/settings/SettingsPanel.vue';
  export default {
    name: "SidePanel",
    components: {
      Home,
      EmailPanel,
      GamesPanel,
      ChatPanel,
      SchedulerPanel,
      CalendarPanel,
      CloudPanel,
      TodoPanel,
      SettingsPanel
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