import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'antd/dist/antd.css'
import 'video-react/dist/video-react.css'

import App from './App'
import state from './Reducers'
import { loadState, saveState } from './misc'
import './index.scss'

const persistedState = loadState()

const store = createStore(
	state,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
