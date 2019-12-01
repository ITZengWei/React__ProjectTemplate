import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect }  from 'react-router-dom'

import App from './App'
import 'antd/dist/antd.css';

import { mainRouter } from "./routes";

render(
	<Router>
		<Switch>
			<Route path="/admin" render={routerProps => {
				/* 需要登录才能访问 /admin */
				return <App {...routerProps} />
			}} />
			{
				mainRouter.map(routerProps => {
					return <Route key={ routerProps.path } path={ routerProps.path } component={ routerProps.component } />
				})
			}
			<Redirect to="/admin" from="/" />
			<Redirect to="/404" />
		</Switch>
	</Router>
	,
	document.getElementById('root')
)