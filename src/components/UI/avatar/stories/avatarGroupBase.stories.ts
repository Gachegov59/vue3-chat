import type { Meta, StoryObj } from '@storybook/vue3';
import avatarGroupBase from '@/components/UI/avatar/avatarGroupBase.vue';

const avatarGroupBaseDefault: Meta<typeof avatarGroupBase> = {
	title: 'AVATAR/avatarGroupBase',
	component: avatarGroupBase,
	tags: ['autodocs'],
	argTypes: {
		images: { control: ['avatar.jpg', 'avatar-default_1.png'] },
		size: { control: 'range' }
	},
	args: { images: ['avatar.jpg', 'avatar-default_1.png'], size: 100 }
};
export default avatarGroupBaseDefault;
type Story = StoryObj<typeof avatarGroupBase>;

export const User: Story = {
	render: (args) => ({
		components: { avatarGroupBase },
		setup() {
			return { args };
		},
		template: '<avatarGroupBase v-bind="args" />'
	}),
	args: {
		images: ['avatar.jpg', 'avatar-default_1.png'],
		size: 100
	}
};

// export const Default: Story = {
// 	render: (args) => ({
// 		components: { avatarGroupBase },
// 		setup() {
// 			return { args };
// 		},
// 		template: '<avatarUserBase v-bind="args" />'
// 	}),
// 	args: {
// 		image: 'avatar-default_1.png',
// 		size: 100
// 	}
// };
