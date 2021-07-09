const INITIAL_STATE = {
    loading: false,
    posts: [],
    errors: null,
}

export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_POST_START':
            return {
                ...state,
                loading: true,
            }
        case 'LOAD_POST_SUCCESS':
            return {
                ...state,
                posts: action.payload,
                loading: false,
            }
        case 'LOAD_POST_FAIL':
            return {
                ...state,
                errors: action.payload,
                loading: false,
            }

        default:
            return state;
    }
}