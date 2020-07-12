import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import * as serviceWorker from './serviceWorker';

// import {createStore}  from 'redux'
import {createStore, combineReducers} from 'redux'
import {Provider}  from 'react-redux'
import ReduxToastr, {reducer as toastrReducer} from 'react-redux-toastr'
const reducers = {
    toastr: toastrReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Router />
        <Provider store={store}>
            <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
