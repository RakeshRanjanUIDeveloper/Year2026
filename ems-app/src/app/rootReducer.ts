import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  // slices added feature by feature
})

export type RootState = ReturnType<typeof rootReducer>