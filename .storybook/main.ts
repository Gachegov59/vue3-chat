import type { StorybookConfig } from '@storybook/vue3-webpack5';
const path = require('path');
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	staticDirs: [{ from: '../src/assets/images', to: '/assets' }],
	framework: {
		name: '@storybook/vue3-webpack5',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	webpackFinal: async (config, { configType }) => {
		// @ts-ignore
		config.resolve.alias = {
			// @ts-ignore
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src/')
		};

		// @ts-ignore
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader',
				{
					loader: 'sass-loader',
					options: {
						additionalData: `@import "src/styles/vars.scss";`
					},
				},
			],
			include: path.resolve(__dirname, '../'),
		});
		// @ts-ignore
		config.module.rules.push(
			{
				test: /\.pug$/,
				use: [
					{ loader: 'pug-plain-loader' }
				]
			}
		);
		// Return the altered config
		return config;
	},
};
export default config;
