<template lang="pug">
.message-item
	.message-item__container
		.message-item__text {{chatMessage.content}}
		.message-item__date {{$dayjs(chatMessage.date).format('HH.MM')}}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IChatMessageItem } from '@/components/chat/interfaces/IChat';

export default defineComponent({
	name: 'message-item',
	props: {
		chatMessage: {
			type: Object as PropType<IChatMessageItem>,
			required: true
		}
	}
});
</script>

<style scoped lang="scss">
.message-item {
	margin-bottom: 10px;
	background: var(--dark-four);
	padding: 10px;
	border-radius: 5px;
	width: fit-content;
	//display: table;
	//max-width: 100%;
	&__container {
		display: flex;
		justify-content: space-between;
	}
	&__date {
		font-size: 12px;
		color: var(--bluish-grey);
		align-self: flex-end;
		padding-left: 10px;
	}
}
</style>
