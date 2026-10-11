import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, loginFailure, loginSuccess, loginRequest } from "./actions";
import { api } from "../../services/axiosInstance";
import type { User } from "./types";

function* loginSaga(action: ReturnType<typeof loginRequest>) {
  try {
    const users: User[] = yield call(
      () => api.get(`/users?email=${action.payload.email}&password=${action.payload.password}`)
        .then(r => r.data)
    )

    if (users.length === 0) {
      yield put(loginFailure('Invalid email or password'))
      return
    }

    const token = `mock-token-${users[0].id}`
    yield put(loginSuccess(users[0], token))

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Login failed'
    yield put(loginFailure(message))
  }
}

export function* watchAuth(){
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}