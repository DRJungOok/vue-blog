import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
            name: 'home',
            redirect: '/home',
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/components/MainHome.vue'),
		},
		{
			path: '/front/FrontHtml',
			name: 'html',
			component: () => import('@/components/Left/front/FrontHtml.vue')
		},
		{
			path: '/front/FrontJs',
			name: 'js',
			component: () => import('@/components/Left/front/FrontJs.vue')
		},
		{
			path: '/front/FrontCss',
			name: 'css',
			component: () => import('@/components/Left/front/FrontCss.vue')
		},
		{
			path: '/front/FrontVue',
			name: 'vue',
			component: () => import('@/components/Left/front/FrontHtml.vue')
		},
		{
			path: '/back/BackJava',
			name: 'java',
			component: () => import('@/components/Left/back/BackJava.vue')
		},
		{
			path: '/back/BackSpring',
			name: 'spring',
			component: () => import('@/components/Left/back/BackSpring.vue')
		},
		{
			path: '/database/DBMariadb',
			name: 'mariadb',
			component: () => import('@/components/Left/database/DBMariadb.vue')
		},
		{
			path: '/database/DBmySql',
			name: 'mysql',
			component: () => import('@/components/Left/database/DBMariadb.vue')
		},
		{
			path: '/database/DBpostgres',
			name: 'postgres',
			component: () => import('@/components/Left/database/DBpostgres.vue')
		},
	],
})

export default router