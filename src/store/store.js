import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';// а надо ли оно мне блять ?

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export default store;