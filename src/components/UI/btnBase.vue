<template lang="pug">
button(
 @click="clickBtn"
 :class="btnColor"
) {{btnText}}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBtnColors } from '@/interfaces/IBtn';
import { IAvatarTypes } from '@/interfaces/IAvatar';
interface IBtnProps {
	btnText: String;
	btnColor: String;
}

export default defineComponent({
	name: 'btn-base',
	props: {
		btnText: {
			required: true,
			type: String
		},
		btnColor: {
			required: false,
			default: 'blue',
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
	setup(props: IBtnProps, { emit }) {
		const clickBtn = () => {
			emit('clickBtn');
			console.log('clickBtn');
		};
		return { clickBtn };
	}
});
</script>

<style scoped lang="scss">
button {
	color: $white;
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 6px 20px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		opacity: 0.8;
	}
}

.blue {
	background: $cool-blue;
}

.blueDark {
	background: $dark-five;
	color: $light-blue;
}
</style>
