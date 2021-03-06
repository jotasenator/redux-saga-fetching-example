import { types } from "./types";

const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.adicionar:
            return {
                ...state,
                value: state.value + 1
            }

        case types.resetear:
            return {
                ...state,
                value: 0
            }

        case types.restar:
            return {
                ...state,
                value: state.value - 1
            }

        default:
            return state
    }
}

