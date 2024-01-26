import type { Meta, StoryObj } from '@storybook/vue3';
import avatarUserBase from '@/components/UI/avatar/avatarUserBase.vue';

const avatarUserBaseDefault: Meta<typeof avatarUserBase> = {
	title: 'AVATAR/avatar',
	component: avatarUserBase,
	tags: ['autodocs'],
	argTypes: {
		image: { control: 'text' },
		size: { control: 'range' }
	},
	args: { image: 'avatar.jpg', size: 100 }
};
export default avatarUserBaseDefault;
type Story = StoryObj<typeof avatarUserBase>;

export const User: Story = {
	render: (args) => ({
		components: { avatarUserBase },
		setup() {
			return { args };
		},
		template: '<avatarUserBase v-bind="args" />'
	}),
	args: {
		image: 'avatar.jpg',
		size: 100
	}
};

export const Default: Story = {
	render: (args) => ({
		components: { avatarUserBase },
		setup() {
			return { args };
		},
		template: '<avatarUserBase v-bind="args" />'
	}),
	args: {
		image: 'avatar-default_1.png',
		size: 100
	}
};
