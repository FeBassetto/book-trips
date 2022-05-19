import { Types } from "../actions/reserveAction"
import { createSelector } from "reselect"

const initialState = {
    reserves: []
}

export default function reserve(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_RESERVE:
            return {
                reserves: reserveAmount(state, action.payload.reserve)

            }
        case Types.REMOVE_RESERVE:
            return {
                reserves: [
                    ...state.reserves.filter(reserve => reserve.id !== action.payload.reserveId)
                ]
            }
        default:
            return state
    }
}


function reserveAmount(state, actualReserve) {
    const index = state.reserves.findIndex(reserve => reserve.id === actualReserve.id)
    if (index < 0) {
        return [
            ...state.reserves,
            {
                ...actualReserve,
                amount: 1
            }
        ]
    }

    return [
        ...state.reserves.slice(0, index),
        { ...state.reserves[index], amount: state.reserves[index].amount += 1 },
        ...state.reserves.slice(index + 1)
    ]

}   

export const getReservesTotal = createSelector(
    state => state.reserve.reserves,
    reserves => reserves.reduce((total, reserve) => total + reserve.amount, 0)
)