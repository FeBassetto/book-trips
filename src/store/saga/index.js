import {all} from 'redux-saga/effects'

import reserveSaga from './reserveSaga'

export default function* Saga(){
    return yield all([
        reserveSaga
    ])
}