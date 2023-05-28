const { defineConfig } = require('@vue/cli-service');
// const stylelintPlugin = require('stylelint-webpack-plugin');

module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		devtool: 'source-map'
		// plugins: [new stylelintPlugin({ files: ['**/*.(vue|scss)'] })]
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
        @import "@/styles/index.scss";
        `
			},
			css: {
				sourceMap: true
			}
		}
	}
});
