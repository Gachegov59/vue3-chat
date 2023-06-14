<template lang="pug">
button(
    @click="clickBtn"
    :class="btnColor.toLowerCase()"
    ) {{btnText}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { IBtnBase } from "../../interfaces/IUser.ts";
import { IBtnColors } from '@/interfaces/IUser';

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
			required: true,
			type: String,
			validator(value: string) {
				return Object.values(IBtnColors).includes(value as IBtnColors);
			}
		}
	},
	computed: {},
	methods: {
		clickBtn() {
			console.log('clickBtn');
			this.$emit('clickBtn');
		}
	}
	// setup(props) {
	//   // const { text: btnText } = ref(props);
	//   const { text } = ref<IbtnBase>(props.text);
	//   const clickBtn = () => {
	//     console.log(text);
	//     // console.log(context);
	//   };
	//   return { clickBtn, text };
	// },
});
</script>

<style scoped lang="scss">
button {
	color: var(--white);
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 6px 20px;
	cursor: pointer;
	font-size: 32px;
	&:hover {
		opacity: 0.8;
	}
}
.blue {
	background: var(--cool-blue);
}
</style>
