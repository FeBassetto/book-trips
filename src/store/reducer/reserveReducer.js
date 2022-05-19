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
        case Types.REMOVE_RESERVE:
            return{
                reserves: [
                    ...state.reserves.filter(reserve => reserve.id !== action.payload.reserveId)
                ]
            }
        default:
            return state
    }
}