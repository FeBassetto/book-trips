export const Types = {
    ADD_RESERVE: 'reserve/ADD_RESERVE',
    REMOVE_RESERVE: 'reserve/REMOVE_RESERVE'
}

export const reserveActions = {
    addReserve: reserve => ({
        type: Types.ADD_RESERVE,
        payload: {
            reserve
        }
    }),

    removeReserve: reserveId => ({
        type: Types.REMOVE_RESERVE,
        payload: {
            reserveId
        }
    })
}