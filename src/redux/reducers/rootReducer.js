

const initialState = { theme: "pink" };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECIEVE_USER_INFO': return {
            ...state, ...action.payload
        }
        case 'SET_THEME': return {
            ...state, theme: action.theme
        }
        case 'SET_BLOGS': return {
            ...state, blogs: action.blogs
        }
        default: return state;
    }
}

export default rootReducer;