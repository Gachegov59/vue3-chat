<template lang="pug">
.modal-wrap(v-if='isShowModal')
	.modal-overlay(@click.self='closeModal')
	.modal
			.modal__close(@click='closeModal')
				include ../../../assets/svg/close-button.svg
			.modal__container
				slot(name="modal-content")
			.modal__button
				slot(name="modal-button")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface IModalProps {
	isShowModal: Boolean;
}
export default defineComponent({
	name: 'modal-base',
	props: {
		isShowModal: {
			type: Boolean,
			required: true
		}
	},
	emits: {
		closeModal: () => true
	},
	setup(prop: IModalProps, { emit }) {
		// let isShowAuthModal: Ref<boolean> = ref(false);
		const closeModal = () => {
			// console.log('closeModal');
			emit('closeModal');
		};
		return { closeModal };
	}
});
</script>

<style scoped lang="scss">
.modal-wrap {
	//transition: $transition-default;
}
.modal-overlay {
	position: absolute;
	background: gray;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0.4;
	z-index: 10;
}
.modal {
	padding: 20px;
	position: absolute;
	z-index: 100;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: auto;
	min-width: 300px;
	min-height: 250px;
	background: $dark;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), 0 5px 15px -7px rgba(0, 0, 0, 0.5);
	&__close {
		width: 20px;
		height: 20px;
		margin-left: auto;
		cursor: pointer;
		svg path {
			fill: $battleship-grey-two;
			transition: $transition-default;
		}
		&:hover svg path {
			fill: $light-blue;
		}
	}
}
</style>
