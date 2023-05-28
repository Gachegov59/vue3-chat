<template lang="pug">
button(
    @click="{}"
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
	computed: {}
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

<style scoped lang="scss"></style>
