<template lang="pug">
.menu-base
	.menu-base__container
		.menu-base__top
		.menu-base__btn-burger
			BtnBurger(@clickBtn='clickBtnBurger' :parentState='isMenuOpen' )

		menuChat(:chats="menuChats")


	.menu-base__sidebar(:class='{_open: isMenuOpen}')
		.menu-base__btn-burger
			BtnBurger(@clickBtn='clickBtnBurger' :parentState='isMenuOpen')._position-right
	.menu-base__modal()
		auth-modal(:isShowAuthModal='isShowAuthModal' @closeAuthModal='closeAuthModal')
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import BtnBurger from '@/components/UI/btnBurger.vue';
import AuthModal from '@/components/menu/authModal.vue';
import AvatarUserBase from '@/components/UI/avatar/avatarUserBase.vue';
import AvatarGroupBase from '@/components/UI/avatar/avatarGroupBase.vue';
import MenuChat from '@/components/menu/menuChat.vue';
import { IMenuChat } from '@/components/menu/interfaces/menu';

export default defineComponent({
	name: 'menuBase',
	components: { MenuChat, AvatarGroupBase, AvatarUserBase, AuthModal, BtnBurger },
	setup() {
		let isMenuOpen: Ref<boolean> = ref(false);

		const clickBtnBurger = () => {
			isMenuOpen.value = !isMenuOpen.value;
			if (isMenuOpen.value) {
				window.addEventListener('keydown', onKeyDown);
			}
		};

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				isMenuOpen.value = false;
				window.removeEventListener('keydown', onKeyDown);
			}
		};

		let isShowAuthModal: Ref<boolean> = ref(false);
		const closeAuthModal = () => {
			isShowAuthModal.value = false;
		};

		// let menuChats: Ref<Array<IMenuChat>> = ref([
		let menuChats: IMenuChat[] = [
			{
				id: '123123edasd',
				image: 'avatar-default_1.png',
				name: 'Петя',
				type: 'user',
				counter: 1,
				lastMessage: {
					text: 'Привет как дела ?',
					date: '2024.01.01'
				}
			},
			{
				id: '123123edasd',
				image: 'avatar-default_1.png',
				name: 'Саша',
				type: 'user',
				counter: 0,
				lastMessage: {
					text: 'Вы где?',
					date: 'Sat Jan 27 2024 15:36:16 GMT+0200'
				}
			}
		];
		return {
			clickBtnBurger,
			isMenuOpen,
			onKeyDown,
			isShowAuthModal,
			closeAuthModal,
			menuChats
		};
	}
});
</script>

<style scoped lang="scss">
.menu-base {
	display: flex;
	//position: relative;
	max-width: 261px;
	width: 100%;
	height: 100%;
	background: $dark;
	&__btn-burger {
		padding-right: 10px;
		display: flex;
		margin-bottom: 20px;
	}
	&__container {
		padding: 20px;
		width: 100%;
	}
	&__top {
		display: flex;
	}
	&__sidebar {
		background: $dark;
		box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
		width: 250px;
		height: 100%;
		padding: 20px;
		position: absolute;
		left: -250px;
		//top: 80px;
		bottom: 0;
		transition: $transition-default;
		._position-right {
			margin-left: auto;
		}
		&._open {
			left: 0;
		}
	}
}
</style>
