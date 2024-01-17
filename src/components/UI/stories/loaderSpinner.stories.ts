import type { Meta, StoryObj } from '@storybook/vue3';
import loaderSpinner from '../loaderSpinner.vue';

const loaderSpinnerDefault: Meta<typeof loaderSpinner> = {
	title: 'loaders/loaderSpinner',
	component: loaderSpinner,
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'range' }
	},
	args: {
		size: 30
	}
};
export default loaderSpinnerDefault;
type Story = StoryObj<typeof loaderSpinner>;

export const Default: Story = {
	render: (args) => ({
		components: { loaderSpinner },
		setup() {
			return { args };
		},
		parameters: {
			backgrounds: [{ name: 'dark background', value: '#8a9297', default: true }]
		},
		template: '<loaderSpinner v-bind="args"  :size="50"/>'
	})
};
