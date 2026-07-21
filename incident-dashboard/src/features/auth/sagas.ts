import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, loginFailure, loginSuccess, loginRequest } from "./actions";
import { api } from "../../services/axiosInstance";
import type { User } from "./types";

function* loginSaga(action: ReturnType<typeof loginRequest>){
    try {
        const response:{user:User, token:string} = yield call(()=> api.post('/auth/login', action.payload).then((r) => r.data))
        yield put(loginSuccess(response.user, response.token))
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Login failed'
        yield put(loginFailure(message))
    }
}

export function* watchAuth(){
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}