<template lang="pug">
.chat-view
	.chat-view__top
	.chat-view__content
	.chat-view__input-pannel
		.chat-view__input
			input(placeholder="Ввдите сообщение..")
		btnBase(
			:btnText="'Отправить'"
			:btnColor="'blueDark'"
			@clickBtn="clickChatBtn"
		).chat-view__btn
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BtnBase from './UI/btnBase.vue';
// import { IBtnBase } from "../interfaces/IUser.ts";
export default defineComponent({
	name: 'chatView',
	components: { BtnBase },
	methods: {
		clickChatBtn() {
			console.log('clickChatBtn');
		}
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

	&__input-pannel {
		display: flex;
		align-items: center;
		padding: 10px;
		height: 54px;
		background: $dark;
	}

	&__input {
		flex-grow: 1;
		input {
			background: transparent;
			border: none;
			&::placeholder {
				font-size: 14px;
				color: $blue-grey;
			}
			&:focus-visible {
				outline: none;
			}
		}
	}

	&__btn {
		height: 28px;
	}
}
</style>
