import { put, takeLatest, call } from 'redux-saga/effects'
import { loadPostApi } from './api'
import { loadPostFail, loadPostSuccess } from './app.actions'

export function* onLoadPostStartAsync() {
    try {
        const response = yield call(loadPostApi)
        yield put(loadPostSuccess(response.data))
    } catch (error) {
        yield put(loadPostFail(error))

    }
}

export function* onLoadPost() {
    yield takeLatest('LOAD_POST_START', onLoadPostStartAsync)

}

export default function* rootSaga() {
    yield ([
        onLoadPost(),
    ])
}