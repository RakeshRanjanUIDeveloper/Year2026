

//API
function fetchUsersApi() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

//worker saga
import { call, put, takeLatest } from 'redux-saga/effects';
function* fetchUsersSaga() {
    try {
        const users = yield call(fetchUsersApi);
        yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
    }
    catch (error) {
        yield put({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    } 
}

//watcher saga
export function* watchFetchUsers() {
    yield takeLatest('FETCH_USERS', fetchUsersSaga);
}