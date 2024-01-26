<template lang="pug">
.group
	template(v-for="(avatar, number) in images")
		avatarUserBase(
			:iserId="1234"
			:image="avatar"
			:name="'user'"
			:size="50"
			:style="{zIndex: -number + 1 }"
		)

</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue';
import loaderSpinner from '@/components/UI/loaderSpinner.vue';
import AvatarUserBase from '@/components/UI/avatar/avatarUserBase.vue';
interface IAvatarBaseSpinnerProps {
	size: Number;
}
export default defineComponent({
	name: 'avatar-group-base',
	components: { AvatarUserBase, loaderSpinner },
	props: {
		images: {
			required: true,
			type: Array as PropType<Array<string>>
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
	}

	// setup(props: IAvatarBaseSpinnerProps, { emit }) {
	//
	// }
});
</script>

<style scoped lang="scss">
.group {
	display: flex;

	.avatar {
		margin-left: -25px;
	}
	:first-child {
		margin-left: 0;
	}
}
</style>
