import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import modalBase from '../modalBase.vue';

const modalBaseDefault: Meta<typeof modalBase> = {
	title: 'modals/modalBase',
	component: modalBase,
	tags: ['autodocs'],
	argTypes: {
		isShowModal: { control: 'boolean' }
	},
	args: {
		isShowModal: true
	}
};
export default modalBaseDefault;
type Story = StoryObj<typeof modalBase>;

export const Default: Story = {
	render: (args) => ({
		components: { modalBase },
		setup() {
			return { args };
		},
		template: '<modalBase v-bind="args" @closeModal="closeModal" :isShowModal="args.isShowModal"/>',
		methods: { closeModal: action('closeModal') }
	})
};
