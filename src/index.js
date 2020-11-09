import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducers'
import Portfolio from './components/Portfolio'
import "./styles/common/base.sass"
import "./styles/common/common.sass"

const store = createStore(
    rootReducer
)

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Portfolio />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)