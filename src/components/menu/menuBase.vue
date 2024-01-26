<template lang="pug">
.menu-base
	.menu-base__container
		.menu-base__top
		.menu-base__btn-burger
			BtnBurger(@clickBtn='clickBtnBurger' :parentState='isMenuOpen' )

		avatarUserBase(
			:iserId="1234"
			:image="'avatar.jpg'"
			:name="'user'"
			:size="50"
		).chat-view__avatar

		avatarGroupBase(
			:groupId="12345"
			:images="['avatar.jpg', 'avatar-default_1.png']"
			:name="'group1'"
			:size="50"
		).chat-view__avatar


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

export default defineComponent({
	name: 'menuBase',
	components: { AvatarGroupBase, AvatarUserBase, AuthModal, BtnBurger },
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

		return {
			clickBtnBurger,
			isMenuOpen,
			onKeyDown,
			isShowAuthModal,
			closeAuthModal
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
