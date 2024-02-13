<template lang="pug">
.avatar(:style="avatarSize")
	.avatar__container(v-if="showLoader && image" )
		loaderSpinner(:size="this.size")
	.avatar__block(:style="avatarSize")
		img(
			:src="require(`@/assets/images/${image}`)"
			:title="name"
			@load="hideLoader"
			alt="avatar"
			loading="lazy" )


</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import loaderSpinner from '@/components/UI/spinner/loaderSpinner.vue';
interface IAvatarBaseSpinnerProps {
	size: Number;
}
export default defineComponent({
	name: 'avatar-user-base',
	components: { loaderSpinner },
	props: {
		image: {
			required: false,
			type: String
		},
		size: {
			required: false,
			default: 20,
			type: Number
		},
		name: {
			required: true,
			type: String
		}
	},

	setup(props: IAvatarBaseSpinnerProps, { emit }) {
		let size = ref(props.size);
		const avatarSize = computed(() => {
			return { height: size.value + 'px', width: size.value + 'px' };
		});

		let showLoader = ref(true);
		function hideLoader() {
			showLoader.value = false;
		}

		return { avatarSize, showLoader, hideLoader };
	}
});
</script>

<style scoped lang="scss">
.avatar {
	position: relative;
	height: 100%;
	width: 100%;
	&__loader {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	img {
		width: 100%;
		border-radius: 100%;
	}
	&__block {
		border: 1px solid rgba(var(--white), 0.5);
		border-radius: 100%;
		//&._default {
		//	border: 1px solid rgba($white, 0.5);
		//	border-radius: 100%;
		//	display: flex;
		//	justify-content: center;
		//	align-items: center;
		//	svg {
		//		width: 70%;
		//		g {
		//			fill: $light-blue;
		//		}
		//	}
		//}
	}
}
</style>
