import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducers'
import Portfolio from './components/Portfolio'
// import Test from './components/Test'
import "./styles/common/base.sass"
import "./styles/section/common/common.sass"

const store = createStore(
    rootReducer
)

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Portfolio />
			{/* <Test /> */}
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)