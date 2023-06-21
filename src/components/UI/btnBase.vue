<template lang="pug">
button(
 @click="clickBtn"
 :class="btnColor"
) {{btnText}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { IBtnBase } from "../../interfaces/IUser.ts";
// import { IBtnColors } from '@/interfaces/IUser';
import { IBtnColors } from '../../interfaces/IUser';

export default defineComponent({
	name: 'btn-base',
	components: {},
	// data() {
	// 	return {};
	// },
	props: {
		btnText: {
			required: true,
			// type: PropType<IBtnBase>,
			type: String
		},
		btnColor: {
			required: false,
			default: 'blue',
			type: String,
			validator(value: string) {
				return Object.values(IBtnColors).includes(value as IBtnColors);
			}
		}
	},
	computed: {},
	methods: {
		clickBtn() {
			this.$emit('clickBtn');
			console.log('clickBtn');
		}

		// clickBtn: function () {
		// 	this.$emit('clickBtn');
		// 	console.log('clickBtn');
		// }
	}
	// setup(props) {
	// 	// const { text: btnText } = ref(props);
	// 	const { text } = ref<IbtnBase>(props.text);
	// 	const clickBtn = () => {
	// 		console.log(text);
	// 		// console.log(context);
	// 	};
	// 	return { clickBtn, text };
	// }
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
