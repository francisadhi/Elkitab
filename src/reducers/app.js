const initialState = {
    copyRight: 'CopyRight 2K18',
    pageTitle: 'Elkitab',
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_COPYRIGHT':
            return {
                ...state,
                copyRight: action.payload.newCopyRight,
            }
        case 'ADD_TOKEN':
            return {
                ...state,
                token: action.payload.token,
            }

            default:
                return state
    }
}

export default appReducer