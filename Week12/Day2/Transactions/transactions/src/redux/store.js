import { createStore } from 'redux';
import transactionReducer from './reducers/transactionReducers';

const store = createStore(transactionReducer);

export default store;