import React from 'react'
import { render} from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

//My components
import MainLayout from './components/MainLayout'
import HomePage from './pages/HomePage'

import styles from './main.scss'

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={HomePage}/>
	</Route>
)
console.log('cata')
render(
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('main')
)
