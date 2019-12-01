import {
	Dashboard,
	Login,
	NotFound,
	Article,
	ArticleEdit,
	Settings
} from '../views'

export const mainRouter = [
	{ path: '/login', component: Login },
	{ path: '/404', component: NotFound },
]

export const adminRouter = [
	{ path: '/admin/dashboard', component: Dashboard },
	{ path: '/admin/settings', component: Settings },
	{ path: '/admin/article', component: Article, exact: true },
	{ path: '/admin/article/edit/:id', component: ArticleEdit },
	{ path: '/404', component: NotFound },
]