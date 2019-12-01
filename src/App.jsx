import React, { Component } from 'react'
import './App.less'

import { Button } from 'antd'

const TestHOC = (WrappedComponent) => {
	return class HOCComponent extends Component {
		render() {
			return (
				<>
					<WrappedComponent />
					<div>这是高阶组件装饰器信息</div>
				</>
			)
		}
	}
}
@ TestHOC
class App extends Component {
	render() {
		return (
			<div><Button type="primary">App</Button></div>
		)
	}
}

App.propTypes = {}


// export default TestHOC(App)
export default App