<template lang="pug">
.chat-view-pagination
	ChatMessage(v-for='message in chatMessages'  :chatMessage="message")

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChatMessage from '@/components/chat/chatMessage.vue';
import { IChatMessage, ICurrentChat } from '@/components/chat/interfaces/IChat';
import { chatMessagesAPI } from '@/components/chat/helpers/chatViewAPI';

export default defineComponent({
	name: 'chat-view-pagination',
	components: { ChatMessage },
	props: {
		chatId: {
			required: true,
			type: Object as PropType<ICurrentChat>
		}
	},
	setup() {
		let chatMessages: IChatMessage[] = chatMessagesAPI;
		return { chatMessages };
	}
});
</script>

<style scoped lang="scss">
.chat-view-pagination {
	display: flex;
	flex-direction: column;
}
</style>
