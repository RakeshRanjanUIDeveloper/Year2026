import type { User } from "./types";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = (email:string, password:string) =>
    ({type: LOGIN_REQUEST, payload:{email, password}} as const);
export const loginSuccess = (user: User, token: string) =>
    ({type: LOGIN_SUCCESS, payload: {user, token}} as const);
export const loginFailure = (error:string) =>
    ({type: LOGIN_FAILURE, payload:error} as const);
export const logout = () =>
    ({type: LOGOUT} as const);

export type AuthActions =
    | ReturnType<typeof loginRequest>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailure>
    | ReturnType<typeof logout>;