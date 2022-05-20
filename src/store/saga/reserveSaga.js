import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { reserveActions } from '../actions/reserveAction';

import api from "../../services/api/api";

function* addToReserve({ payload }) {

    yield put(reserveActions.loadingData(true))

    const tripExists = yield select(
        state => state.reserve.reserves.find(trip => trip.id === payload.id)
    )

    const myStock = yield call(api.get, `/stock/${payload.id}`)

    const stockAmount = myStock.data.amount

    const currentStock = tripExists ? tripExists.amount: 0

    const amount = currentStock + 1

    if(amount > stockAmount){
        alert('Quantidade maxima atingida')
        yield put(reserveActions.loadingData(false))
        return
    }


    if (tripExists) {
        yield put(reserveActions.updateAmount(payload.id))
    } else {
        const response = yield call(api.get, `trips/${payload.id}`)

        const data = {
            ...response.data,
            amount: 1
        }

        yield put(reserveActions.addReserve(data))
        yield put(reserveActions.loadingData(false))
    }

}

export default all([
    takeLatest('reserve/ADD_RESERVE_REQUEST', addToReserve)
])