<template lang="pug">
component(:is="$route.meta.layout || 'div'")
</template>

<script lang="ts">
// import {defineComponent, ref} from 'vue'
import { defineComponent } from 'vue';
// import axios from 'axios';

export default defineComponent({
	name: 'App',
	components: {},
	data() {
		return {
			posts: null
		};
	},
	setup() {},
	mounted() {
		// this.fetchData();
	},
	methods: {
		// async fetchData() {}
	}
});
</script>

<style scoped lang="scss">
#app {
}
</style>
