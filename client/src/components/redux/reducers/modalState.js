const initialState = {
    showModal: false,
    title: "",
    id: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "MODAL":
            return action.payload
        default:
            return state
    }
}