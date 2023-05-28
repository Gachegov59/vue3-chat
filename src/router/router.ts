import index from '@/pages/pageChat.vue';
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router';
import defaultLayout from '@/layouts/defaultLayout.vue';

// interface RouteMeta {
//     // is optional
//     isAdmin?: boolean
//     // must be declared by every route
//     requiresAuth: boolean
// }

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: index,
			meta: {
				layout: defaultLayout
				// requiresAuth: false
			}
		},
		{
			path: '/auth',
			component: () => import('@/pages/pageAuth.vue'),
			meta: {
				layout: defaultLayout
			}
		}
	]
});
