import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(logger, ReduxPromise)(createStore);

const store = createStoreWithMiddleware(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

import App from './components/app';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.container'),
);
