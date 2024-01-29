<template lang="pug">
.chat-page
  menu-base
  chat-view
</template>

<script>
import ChatView from '@/components/chat/chatView.vue';
import MenuBase from '@/components/menu/menuBase.vue';

export default {
	name: 'chatPage',
	components: { MenuBase, ChatView }
};
</script>

<style lang="scss">
.chat-page {
	display: flex;
	justify-content: space-between;
	flex-grow: 1;
}
</style>
