import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRoutes } from "./routes";

import './App.less'


class App extends Component {
	render() {
		return (
			<div>
				<div>公共的部分</div>
				<Switch>
					{
						adminRoutes.map(route => {
							return (
								<Route
									key={ route.path }
									path={ route.path }
									exact={ route.exact }
									render={
										(routerProps) => {
											return <route.component { ...routerProps }/>
										}
									}
								/>
							)
						})
					}`
					<Redirect to={ adminRoutes[0].path } from="/admin" exact  />
					<Redirect to="/404" />
				</Switch>
			</div>
		)
	}
}

App.propTypes = {}


// export default TestHOC(App)
export default App