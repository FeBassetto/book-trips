import { Types } from "../actions/reserveAction"
import { createSelector } from "reselect"

const initialState = {
    reserves: [],
    loading: false
}

export default function reserve(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_RESERVE:
            return {
                reserves: [
                    ...state.reserves,
                    { ...action.payload.reserve }
                ],

                loading: false

            }
        case Types.REMOVE_RESERVE:
            return {
                reserves: [
                    ...state.reserves.filter(reserve => reserve.id !== action.payload.reserveId)
                ],
                loading: false
            }
        case Types.UPDATE_AMOUNT:
            return {
                reserves: reserveAmount(state, action.payload.id),
                loading: false
            }

        case Types.DECREASE_AMOUNT:
            return {
                reserves: decreaseAmount(state, action.payload.id),
                loading: false
            }
        case Types.LOADING_DATA:
            return {
                reserves: [...state.reserves],
                loading: action.payload.loading
            }
        default:
            return state
    }
}

//Helpers

function reserveAmount(state, reserveId) {
    const index = state.reserves.findIndex(reserve => reserve.id === reserveId)

    return [
        ...state.reserves.slice(0, index),
        { ...state.reserves[index], amount: state.reserves[index].amount += 1 },
        ...state.reserves.slice(index + 1)
    ]

}

function decreaseAmount(state, reserveId) {
    const index = state.reserves.findIndex(reserve => reserve.id === reserveId)

    if (state.reserves[index].amount < 2) {
        return [...state.reserves.filter(reserve => reserve.id !== reserveId)]
    }
    return [
        ...state.reserves.slice(0, index),
        { ...state.reserves[index], amount: state.reserves[index].amount -= 1 },
        ...state.reserves.slice(index + 1)
    ]

}

//Selectors

export const getReservesTotal = createSelector(
    state => state.reserve.reserves,
    reserves => reserves.reduce((total, reserve) => total + reserve.amount, 0)
)