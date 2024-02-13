<template lang="pug">
modal-base(:isShowModal='isShowAuthModal' @closeModal='closeAuthModal')
	template(v-slot:modal-content)
		.auth-modal
			.auth-modal__container
				.auth-modal__circle
					.auth-modal__logo
				.auth-modal__title Авторизация
				.auth-modal__text Введите пожалуйста своё фио и ник для дальнейшей авторизации
				.auth-modal__input
				.auth-modal__input
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalBase from '@/components/UI/modal/modalBase.vue';

export default defineComponent({
	name: 'auth-modal',
	components: { ModalBase },
	props: {
		isShowAuthModal: {
			type: Boolean,
			required: true
		}
	},
	emits: {
		closeAuthModal: () => true
	},
	setup(prop, { emit }) {
		const closeAuthModal = () => {
			// console.log('closeAuthModal');
			emit('closeAuthModal');
		};
		return { closeAuthModal };
	}
});
</script>

<style scoped lang="scss">
.auth-modal {
	width: 516px;
	&__circle {
		width: 140px;
		height: 140px;
		border-radius: 100%;
		background: var(--dark-three);
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto 35px;
	}
	&__logo {
		height: 66px;
		width: 85px;
		background-image: url('assets/auth-logo.png');
	}
	&__title {
		font-size: 24px;
		font-weight: 500;
		text-align: center;
		margin-bottom: 16px;
	}
	&__text {
		font-size: 16px;
		font-weight: 300;
		text-align: center;
		color: var(--blue-grey);
		max-width: 300px;
		margin: 0 auto 49px;
	}
}
</style>
