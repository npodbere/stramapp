import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import signInOut from './reducers/SignInOut'
import streams from './reducers/stramReducer'


export default combineReducers({
    oauth: signInOut,
    form: formReducer,
    streams
})