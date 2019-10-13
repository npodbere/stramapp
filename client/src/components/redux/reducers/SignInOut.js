import { UPDATE_AUTH } from '../../actions/types'

export default (state={ isSignedIn: false, id: null }, action) => {
    switch (action.type) {
        case UPDATE_AUTH:
            let finalID
            if(action.payload.isSignedIn) {
                finalID = action.payload.id
            }
            else{
                finalID = null
            }
            return {...state, isSignedIn: action.payload.isSignedIn, id:finalID}
        default:
            return state
    }
}