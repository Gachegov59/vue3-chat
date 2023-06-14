<template lang="pug">
.chat-view
  .chat-view__top
  .chat-view__content
  .chat-view__input-pannel
    input(placeholder="ввдите сообщение..").chat__input
    btnBase(
        :btnText="'Отправить'"
        :btnColor="'Blue'"
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
	background: var(--dark-two);
	padding-left: 2px;
	&__top {
		height: 67px;
		background: var(--dark);
	}
	&__content {
		flex-grow: 1;
	}
	&__input-pannel {
		padding: 10px;
		height: 54px;
		background: var(--dark);
	}
	&__btn {
		//height: 28px;
		height: 60px;
	}
}
</style>
