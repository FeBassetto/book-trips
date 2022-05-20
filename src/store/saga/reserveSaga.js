import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { reserveActions } from '../actions/reserveAction';
import api from "../../services/api";

function* addToReserve({ payload }) {

    const tripExists = yield select(
        state => state.reserve.reserves.find(trip => trip.id === payload.id)
    )

    if (tripExists) {
        yield put(reserveActions.updateAmount(payload.id))
    } else {
        const response = yield call(api.get, `trips/${payload.id}`)

        const data = {
            ...response.data,
            amount: 1
        }

        yield put(reserveActions.addReserve(data))
    }

}

export default all([
    takeLatest('reserve/ADD_RESERVE_REQUEST', addToReserve)
])