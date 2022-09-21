import { takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { setTasks, fetchExampleTasks, selectTasks } from './tasksSlice';
import { saveTasksInLocalStorage} from './tasksLocalStorage'

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield call(alert, "Something went wrong!")
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};