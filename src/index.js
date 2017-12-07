import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import store from './store';

class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Main;