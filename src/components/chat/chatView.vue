<template lang="pug">
.chat-view
	.chat-view__top
	.chat-view__content
		//LoaderSpinner
		ChatViewPagination(:currentChat='currentChat')
	.chat-view__textarea-pannel
		.chat-view__textarea
			textarea(placeholder="Ввдите сообщение..")
			.chat-view__help shift + enter
		btnBase(
			:btnText="'Отправить'"
			:btnColor="'blue'"
			@clickBtn="clickChatBtn"
		).chat-view__btn
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BtnBase from '@/components/UI/button/btnBase.vue';
import ChatViewPagination from '@/components/chat/chatViewPagination.vue';
import LoaderSpinner from '@/components/UI/spinner/loaderSpinner.vue';
import { ICurrentChat } from '@/components/chat/interfaces/IChat';
export default defineComponent({
	name: 'chatView',
	components: { LoaderSpinner, ChatViewPagination, BtnBase },
	setup() {
		let clickChatBtn = () => {
			console.log('clickChatBtn');
		};

		// CURRENT CHAT DATE
		let currentChat: ICurrentChat = {
			chatId: '254424131',
			type: 'personal',
			name: 'Петя',
			owner: {
				ownerId: '123123edasd34',
				name: 'Петя'
			},
			members: [
				{
					id: '123123edasd34',
					name: 'Петя',
					surname: 'Петров',
					role: 'owner',
					status: true
				}
			],
			isRead: true
		};
		return { clickChatBtn, currentChat };
	}
});
</script>

<style scoped lang="scss">
.chat-view {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background: $dark-two;
	padding-left: 2px;

	&__top {
		height: 67px;
		background: $dark;
	}

	&__content {
		flex-grow: 1;
	}

	&__textarea-pannel {
		display: flex;
		align-items: center;
		padding: 0 10px;
		height: 54px;
		background: $dark;

		textarea {
			background: none;
			border: none;
			resize: none;
			overflow: hidden;
			width: 100%;
			height: 20px;
			&:focus {
				outline: none;
			}
		}
	}

	&__textarea {
		flex-grow: 1;
		align-self: flex-end;
	}
	&__help {
		font-size: 12px;
		color: $blue-grey;
	}
	&__btn {
		height: 28px;
	}
}
</style>
