import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, type AuthActions } from "./actions";
import type { AuthState } from "./types";

const initialState:AuthState={
        user: null,
        token: null,
        loading: false,
        error:  null
}
export function authReducer(
    state:AuthState = initialState,
    action:AuthActions
):AuthState{
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, user:null, token:null, loading:true, error:null}
        case LOGIN_SUCCESS:
            return {...state, user:action.payload.user, token:action.payload.token, loading:false, error:null}
        case LOGIN_FAILURE:
            return {...state, user:null, token:null, loading:false, error:action.payload}
        case LOGOUT:
            return initialState
        default:
            return state
    }
}