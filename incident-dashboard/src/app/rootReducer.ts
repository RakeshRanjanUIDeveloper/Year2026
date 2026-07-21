import {combineReducers} from 'redux'
import { incidentReducer } from '../features/incidents/reducer'
import { authReducer } from '../features/auth/reducer'
export const rootReducer = combineReducers({
    incidents : incidentReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>;