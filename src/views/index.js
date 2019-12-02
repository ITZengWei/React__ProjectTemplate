import Loadable from 'react-loadable';

import Loading from '../components/index'



const Dashboard = Loadable({
		loader: () => import('./Dashboard'),
		loading: Loading,
	})

const Login = Loadable({
	loader: () => import('./Login'),
	loading: Loading,
})

const Settings = Loadable({
	loader: () => import('./Settings'),
	loading: Loading,
})

const Article = Loadable({
	loader: () => import('./Article'),
	loading: Loading,
})

const ArticleEdit = Loadable({
	loader: () => import('./Article/Edit'),
	loading: Loading,
})

const NotFound = Loadable({
	loader: () => import('./NotFound'),
	loading: Loading,
})

// import Dashboard  from './Dashboard'
//
// import Login  from './Login'

// import Settings  from './Settings'
//
// import Article  from './Article'
//
// import ArticleEdit  from './Article/Edit'
//
// import NotFound  from './NotFound'



export {
	Dashboard,
	Login,
	NotFound,
	Settings,
	Article,
	ArticleEdit
}