import {UPDATE_AUTH, CREATE_STREAM, GET_STREAM, GET_STREAMS, DELETE_STREAM, UPDATE_STREAM} from './types'
import streams from '../../api/streams'
import history from '../../history'



export const signInOutTry = (isSignedIn, id) => {
    return {
        type: UPDATE_AUTH,
        payload: {isSignedIn, id} 
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const userID = getState().oauth.id
    const response = await streams.post('/streams', {...formValues, userID})
    dispatch({type: CREATE_STREAM, payload: response.data})
    history.push("/")
}

export const getStreams = () => async dispatch => {
    const response = await streams.get('/streams')
     dispatch({type: GET_STREAMS, payload: response.data})
 }

 export const getStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`)
     dispatch({type: GET_STREAM, payload: response.data})
 }

 export const updateStream = (id, formValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, {...formValues})
    history.push("/")
     dispatch({type: UPDATE_STREAM, payload: response.data})
 }

 export const deleteStream = id => async dispatch => {
     await streams.delete(`/streams/${id}`)
     dispatch({type: DELETE_STREAM, payload: id})
 }