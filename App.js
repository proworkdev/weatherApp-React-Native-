import React from 'react';
import configureStore from './src/store/configureStore'
import Routes from './src/routes/routes'
import { Provider } from 'react-redux'
const store  = configureStore();
export default class App extends React.Component {
    render() {
        return ( <Provider store = { store }>
            <Routes/>
            </Provider>
        );
    }
}