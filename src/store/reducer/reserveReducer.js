import { Types } from "../actions/reserveAction"

const initialState = {
    reserves: []
}

export default function reserve(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_RESERVE:
            return {
                reserves: [
                    ...state.reserves, { ...action.payload.reserve }
                ]
            }
        default:
            return state
    }
}