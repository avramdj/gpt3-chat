import { combineReducers } from 'redux'
import userReducer from './User/user.reducer'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;