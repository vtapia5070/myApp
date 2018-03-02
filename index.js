import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from './TodoApp/reducers/index'
import App from './TodoApp/components/App';

let store = createStore(TodoApp);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('app'));
};

store.subscribe(render);
render();

