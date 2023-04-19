import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            thunk: false,
            immutableCheck: false,
            serializableCheck: false,
        }).prepend(sagaMiddleware);
    },
});
sagaMiddleware.run(rootSaga);

export default store;