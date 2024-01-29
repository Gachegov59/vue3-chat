<template lang="pug">
.chat-view-pagination(v-for='message in chatMessages' )
	ChatMessage(:chatMessage="message")

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChatMessage from '@/components/chat/chatMessage.vue';
import { IChatMessage, ICurrentChat } from '@/components/chat/interfaces/IChat';

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
		let chatMessages: IChatMessage[] = [
			{
				messageId: '14123edasd',
				userId: '126123edasd',
				userAvatar: 'avatar-default_1.png',
				date: 'Sat Jan 17 2024 15:36:16 GMT+0200',
				messages: [
					{
						id: '123123edasd',
						userId: '123123edasd',
						type: 'text',
						content: 'Рад был пообщаться',
						date: 'Sat Jan 17 2024 15:36:16 GMT+0200',
						isRead: true
					},
					{
						id: '123123edasd',
						userId: '123123edasd',
						type: 'text',
						content: 'У меня тоже все хорошо',
						date: 'Sat Jan 20 2024 15:36:16 GMT+0200',
						isRead: true
					}
				]
			},
			{
				messageId: '1467123edasd',
				userId: '12612423edasd',
				userAvatar: 'avatar-default_2.png',
				date: 'Sat Jan 17 2024 10:36:16 GMT+0200',
				messages: [
					{
						id: '123123edasd',
						userId: '123123edasd',
						type: 'text',
						content: 'все ок',
						date: 'Sat Jan 17 2024 10:36:16 GMT+0200',
						isRead: true
					},
					{
						id: '123123edasd',
						userId: '123123edasd',
						type: 'text',
						content: 'Что нового у тебя?',
						date: 'Sat Jan 20 2024 10:36:16 GMT+0200',
						isRead: true
					},
					{
						id: '123123edasd',
						userId: '123123edasd',
						type: 'text',
						content: 'Ты тут?',
						date: 'Sat Jan 20 2024 10:46:16 GMT+0200',
						isRead: false
					}
				]
			}
		];
		return { chatMessages };
	}
});
</script>

<style scoped></style>
