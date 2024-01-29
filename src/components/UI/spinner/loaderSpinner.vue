<template lang="pug">
.loader(:style="loaderSize")
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
interface ILoaderSpinnerProps {
	size: Number;
}
export default defineComponent({
	name: 'loaderSpinner',
	props: {
		size: {
			require: false,
			default: 20,
			type: Number
		}
	},

	setup(props: ILoaderSpinnerProps, { emit }) {
		let size = ref(props.size);
		const loaderSize = computed(() => {
			return { height: `${size.value}px`, width: `${size.value}px` };
		});
		return { loaderSize };
	}
});
</script>

<style scoped lang="scss">
.loader {
	border: 5px solid $white;
	border-bottom-color: transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
