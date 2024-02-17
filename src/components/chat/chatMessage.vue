<template lang="pug">
.chat-message(:class='{_mine: chatMessage.isMine}')
	.chat-message__container
		AvatarChatBase(
			:image='chatMessage.userAvatar'
			:name="'user'"
			:size="35"
			).chat-message__avatar
		.chat-message__items
			template(v-for='messages in chatMessage.messages' )
				MessageItem(:chatMessage="messages")
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';
import MessageItem from '@/components/chat/messageItem.vue';
import { IChatMessage, IChatMessageItem } from '@/components/chat/interfaces/IChat';
import AvatarChatBase from '@/components/UI/avatar/avatarChatBase.vue';
//todo: add styles for mine messages
export default defineComponent({
	name: 'chat-message',
	components: { AvatarChatBase, MessageItem },
	props: {
		chatMessage: {
			type: Object as PropType<IChatMessage>,
			required: true
		}
	}
});
</script>

<style scoped lang="scss">
.chat-message {
	padding-bottom: 20px;
	max-width: 50rem;
	border-bottomw: 1px solid red;
	&._mine {
		align-items: end;
	}
	&__container {
		display: flex;
		padding: 0 5px;
	}
	&__avatar {
		margin-right: 10px;
		position: sticky;
		top: 10px;
	}
}
</style>
