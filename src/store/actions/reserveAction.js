export const Types = {
    ADD_RESERVE: 'reserve/ADD_RESERVE'
}

export const reserveActions = {
    addReserve: reserve => ({
        type: Types.ADD_RESERVE,
        payload: {
            reserve
        }
    })
}