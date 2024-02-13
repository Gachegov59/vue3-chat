<template lang="pug">
.chat-view
	.chat-view__top
	.chat-view__content.scroll
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
import { currentChatAPI } from '@/components/chat/helpers/chatViewAPI';
export default defineComponent({
	name: 'chatView',
	components: { LoaderSpinner, ChatViewPagination, BtnBase },
	setup() {
		let clickChatBtn = () => {
			console.log('clickChatBtn');
		};

		// CURRENT CHAT DATE
		let currentChat: ICurrentChat = currentChatAPI;
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
	background: var(--dark-two);
	padding-left: 2px;

	&__top {
		height: 67px;
		background: var(--dark);
	}

	&__content {
		flex-grow: 1;
		overflow-y: scroll;
		height: calc(100vh - 67px - 54px);
	}

	&__textarea-pannel {
		display: flex;
		align-items: center;
		padding: 0 10px;
		height: 54px;
		background: var(--dark);

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
		color: var(--blue-grey);
	}
	&__btn {
		height: 28px;
	}
}
</style>
