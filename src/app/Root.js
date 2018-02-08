import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Panel from 'components/Panel'

const Root = () => {
	return (
		<Router>
			<Route path="/" component={Panel} />
		</Router>
	)
}

export default Root
