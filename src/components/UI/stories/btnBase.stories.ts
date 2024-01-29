import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import btnBase from '@/components/UI/button/btnBase.vue';

const btnBaseDefault: Meta<typeof btnBase> = {
	title: 'BUTTONS/btnBase',
	component: btnBase,
	tags: ['autodocs'],
	argTypes: {
		btnText: { control: 'text' },
		btnColor: { control: 'select', options: ['blue', 'blueDark'] }
	},
	args: { btnColor: 'blue', btnText: 'blue' }
};
export default btnBaseDefault;
type Story = StoryObj<typeof btnBase>;

export const Blue: Story = {
	render: (args) => ({
		components: { btnBase },
		setup() {
			return { args };
		},
		template: '<btnBase v-bind="args" @click="clickBtn" />',
		methods: { clickBtn: action('clicked') }
	}),
	args: {
		btnText: 'blue',
		btnColor: 'blue'
	}
};

export const BlueDark: Story = {
	render: (args) => ({
		components: { btnBase },
		setup() {
			return { args };
		},
		template: '<btnBase v-bind="args" @click="clickBtn" />',
		methods: { clickBtn: action('clicked') }
	}),
	args: {
		btnText: 'blue',
		btnColor: 'blueDark'
	}
};
