<template lang="pug">
.menu-base
	.menu-base__container
	.menu-base__top
		.menu-base__btn-burger
			BtnBurger(@clickBtn='clickBtnBurger')
		input.menu-base__input
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BtnBurger from '@/components/UI/btnBurger.vue';

export default defineComponent({
	name: 'menuBase',
	components: { BtnBurger },
	methods: {
		clickBtnBurger(emitButtonBurger: { isButtonBurgerActive: boolean }) {
			console.log('clickBtnBurger', emitButtonBurger);
		}
	}
});
</script>

<style scoped lang="scss">
.menu-base {
	max-width: 261px;
	width: 100%;
	height: 100%;
	padding: 10px 20px;
	&__btn-burger {
		padding-right: 10px;
	}
	&__top {
		display: flex;
	}
}
</style>
