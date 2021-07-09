import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { appReducer } from './app.reducer'

export const rootReducer = combineReducers({
    counterReducer,
    appReducer
})
