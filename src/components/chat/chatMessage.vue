<template lang="pug">
.chat-message
	.chat-message__container
		.chat-message__avatar
			AvatarChatBase(
				:image='chatMessage.userAvatar'
				:name="'user'"
				:size="35"
				)
		.chat-message__items
			template(v-for='messages in chatMessage.messages' )
				MessageItem(:chatMessage="messages")
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';
import MessageItem from '@/components/chat/messageItem.vue';
import { IChatMessage, IChatMessageItem } from '@/components/chat/interfaces/IChat';
import AvatarChatBase from '@/components/UI/avatar/avatarChatBase.vue';

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
	&__container {
		display: flex;
	}
	&__avatar {
		margin-right: 10px;
	}
}
</style>
