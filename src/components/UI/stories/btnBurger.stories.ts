import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import btnBurger from '../btnBurger.vue';

const btnBurgerDefault: Meta<typeof btnBurger> = {
	title: 'BUTTONS/btnBurger',
	component: btnBurger,
	tags: ['autodocs'],
	argTypes: {
		btnColor: { control: 'select', options: ['grey'] }
	},
	args: {
		btnColor: 'grey'
	}
};
export default btnBurgerDefault;
type Story = StoryObj<typeof btnBurger>;

export const Default: Story = {
	render: (args) => ({
		components: { btnBurger },
		setup() {
			return { args };
		},
		template: '<btnBurger v-bind="args" @click="clickBtn" />',
		methods: { clickBtn: action('clickBtn') }
	})
};
