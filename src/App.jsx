import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

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
					}
				</Switch>
			</div>
		)
	}
}

App.propTypes = {}


// export default TestHOC(App)
export default App