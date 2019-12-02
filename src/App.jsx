import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRouter } from "./routes";

import './App.less'


class App extends Component {
	render() {
		console.log(adminRouter)

		return (
			<div>
				<div>公共的部分</div>
				<Switch>
					{
						adminRouter.map(route => {
							console.log(adminRouter[0])
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
					<Redirect to={ adminRouter[0].path } from="/admin" exact  />
					<Redirect to="/404" />
				</Switch>
			</div>
		)
	}
}

App.propTypes = {}


// export default TestHOC(App)
export default App