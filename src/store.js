import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './features/tasks/tasksSlice';
import themeReducer from './common/Header/ThemeSwitch/themeSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;