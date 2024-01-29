<template lang="pug">
.menu-chat(v-for="chat in chats" )
	.menu-chat__avatar
		avatarChatBase(
			:userId="1234"
			:image="chat.image"
			:name="'user'"
			:size="50"
		)
	.menu-chat__container
		.menu-chat__top
			.menu-chat__nane {{chat.name}}
			.menu-chat__date {{$dayjs(chat.lastMessage.date).format('HH.MM')}}
		.menu-chat__contant
			.menu-chat__text {{chat.lastMessage.text}}
	.menu-chat__counter(v-if="chat.counter > 0" ) {{chat.counter}}

</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import avatarChatBase from '@/components/UI/avatar/avatarChatBase.vue';
import AvatarGroupBase from '@/components/UI/avatar/avatarGroupBase.vue';
import { IMenuChat } from '@/components/menu/interfaces/IMenu';

export default defineComponent({
	name: 'menu-chat',
	components: { AvatarGroupBase, avatarChatBase },
	props: {
		chats: {
			required: true,
			type: Array as PropType<Array<IMenuChat>>
		},
		size: {
			type: Number
		}
	}
});
</script>

<style scoped lang="scss">
.menu-chat {
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 20px;
	max-width: 600px;
	&__avatar {
		margin-right: 10px;
	}
	&__container {
		flex-grow: 1;
	}
	&__top {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
	}
	&__contant {
		display: flex;
		justify-content: space-between;
	}
	&__text {
		color: $blue-grey;
		white-space: nowrap;
		max-width: 150px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	&__date {
		font-size: 10px;
	}
	&__counter {
		font-size: 11px;
		line-height: 18px;
		position: absolute;
		bottom: 0;
		right: 0;
		text-align: center;
		width: 18px;
		height: 18px;
		background: $cool-blue;
		border-radius: 100%;
	}
}
</style>
