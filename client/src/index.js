import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import thunk from 'redux-thunk';
import reducers  from './reducers';
import reducer  from 'react-redux';
import posts from './reducers/posts';

 const store = configureStore({
    reducer : posts,
    middleware : [thunk],
});


ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'),);