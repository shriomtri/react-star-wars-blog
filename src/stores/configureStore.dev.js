import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducer/root';

let store;
export default initialState => {
    if (store) {
        return store;
    }
    const createdStore = createStore(
        rootReducer,
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState,
        compose(
          applyMiddleware(
            thunk
          )
        )
    );
    store = createdStore;
    return store;
};
