export const Types = {
    ADD_RESERVE: 'reserve/ADD_RESERVE',
    REMOVE_RESERVE: 'reserve/REMOVE_RESERVE',
    ADD_RESERVE_REQUEST: 'reserve/ADD_RESERVE_REQUEST',
    UPDATE_AMOUNT: 'reserve/UPDATE_AMOUNT',
    DECREASE_AMOUNT: 'reserve/DECREASE_AMOUNT',
    LOADING_DATA: 'reserve/LOADING_DATA'
}

export const reserveActions = {
    addReserve: reserve => ({
        type: Types.ADD_RESERVE,
        payload: {
            reserve
        }
    }),

    addReserveRequest: id => ({
        type:Types.ADD_RESERVE_REQUEST,
        payload:{
            id
        }
    }),

    removeReserve: reserveId => ({
        type: Types.REMOVE_RESERVE,
        payload: {
            reserveId
        }
    }),

    updateAmount: id => ({
        type: Types.UPDATE_AMOUNT,
        payload:{
            id
        }
    }) ,

    decreaseAmount: id => ({
        type: Types.DECREASE_AMOUNT,
        payload:{
            id
        }
    }),

    loadingData: loading => ({
        type: Types.LOADING_DATA,
        payload:{
            loading
        }
    })
}