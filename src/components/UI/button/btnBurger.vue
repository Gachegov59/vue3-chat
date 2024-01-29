<template lang="pug">
button.btn-burger(@click.stop='clickBtn' :class="[{_isActive:btnState.value }, btnColor]")
	.btn-burger__line-top
	.btn-burger__line-middle
	.btn-burger__line-bottom

</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, watch, PropType } from 'vue';
import { IBtnColors } from '@/interfaces/IBtn';

interface IBtnBurgerProps {
	btnColor: String;
	parentState: Boolean;
}

export default defineComponent({
	name: 'btnBurger',
	props: {
		parentState: {
			required: false,
			type: Boolean,
			default: null
		},
		btnColor: {
			required: false,
			default: 'grey',
			type: String as PropType<IBtnColors>,
			validator(value: string) {
				// return Object.values(IBtnColors).includes(value as IBtnColors);
				// todo: add validator
				return true;
			}
		}
	},
	emits: {
		clickBtn: () => true
	},
	setup(props: IBtnBurgerProps, { emit }) {
		let isButtonBurgerActive: Ref<boolean> = ref(false);
		let propParentState = ref(props.parentState);

		watch(
			() => props.parentState,
			(newValue) => {
				propParentState.value = newValue;
			}
		);

		const btnState = computed(() => {
			if (propParentState.value !== null) {
				return propParentState;
			}
			return isButtonBurgerActive;
		});

		const clickBtn = () => {
			isButtonBurgerActive.value = !isButtonBurgerActive.value;
			emit('clickBtn');
		};
		return { clickBtn, isButtonBurgerActive, btnState };
	}
});
</script>

<style scoped lang="scss">
.btn-burger {
	display: inline;
	height: 16px;
	width: 20px;
	border: none;
	position: relative;
	padding: 0;
	font: inherit;
	cursor: pointer;
	background: none;
	transition: $transition-default;

	&:hover * {
		background: $light-blue;
	}

	&__line-top,
	&__line-middle,
	&__line-bottom {
		display: block;
		width: 20px;
		height: 2px;
		background: $battleship-grey-two;
		transition: $transition-default;
		position: absolute;
	}

	&__line-top {
		top: 0;
	}

	&__line-middle {
		transform: translateY(calc(50% - 2px));
	}

	&__line-bottom {
		bottom: 0;
	}

	&._isActive {
		overflow: hidden;

		.btn-burger__line-top {
			position: absolute;
			transform: rotate(45deg);
			top: 7px;
		}

		.btn-burger__line-middle {
			transition: $transition-default;
			transform: rotate(-45deg);
			opacity: 0;
		}

		.btn-burger__line-bottom {
			transform: rotate(-45deg);
			bottom: 7px;
		}
	}
}
</style>
