import { createStore, applyMiddleware, combineReducers } from 'redux'
import cityDataReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
const configureStore = () => {
    const store = createStore(
    	combineReducers({cityData: cityDataReducer}), applyMiddleware(thunk))
    return store;
}
export default configureStore;