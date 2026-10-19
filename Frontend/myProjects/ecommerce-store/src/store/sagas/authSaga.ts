import { call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginStart, loginSuccess } from "../slices/authSlice";
import { loginUser, type LoginCredentials, type LoginResponse } from "../../services/authService";
import type { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(action: PayloadAction<LoginCredentials>) {
    try {
        const response = (yield call(loginUser, action.payload)) as LoginResponse
        yield put(loginSuccess({
            email: action.payload.username,
            token: response.token
        }))
    } catch (error) {
        const message = error instanceof Error ? error.message : "Login Failed. Please try again."
        yield put(loginFailure(message))
    }
}

function* authSaga() {
    yield takeLatest(loginStart.type, handleLogin)
}

export default authSaga