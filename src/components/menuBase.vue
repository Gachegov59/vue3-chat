<template lang="pug">
.menu-base
	.menu-base__container
		.menu-base__top
		.menu-base__btn-burger
			BtnBurger(@clickBtn='clickBtnBurger' :parentState='isMenuOpen' )
		//input.menu-base__input
	.menu-base__modal(:class='{_open: isMenuOpen}')
		.menu-base__btn-burger
			BtnBurger(@clickBtn='clickBtnBurger' :parentState='isMenuOpen')._position-right
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, Ref, ref } from 'vue';
import BtnBurger from '@/components/UI/btnBurger.vue';

export default defineComponent({
	name: 'menuBase',
	components: { BtnBurger },
	setup(prop, { emit }) {
		let isMenuOpen: Ref<boolean> = ref(false);
		const clickBtnBurger = (emitButtonBurger: boolean) => {
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
		return { clickBtnBurger, isMenuOpen, onKeyDown };
	}
});
</script>

<style scoped lang="scss">
.menu-base {
	display: flex;
	position: relative;
	max-width: 261px;
	width: 100%;
	height: 100%;
	background: $dark;
	&__btn-burger {
		padding-right: 10px;
		display: flex;
	}
	&__container {
		padding: 20px;
		width: 100%;
	}
	&__top {
		display: flex;
	}
	&__modal {
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
