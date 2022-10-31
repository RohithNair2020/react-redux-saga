import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_PRODUCTS, SET_PRODUCTS } from '../constant';

function* fetchAllProducts() {
    try {
        let response = yield call(axios.get, '/products');
        yield console.table(response.data);
        yield put({type: SET_PRODUCTS, data: response.data});
    } catch (err) {
        console.log(err);
    }
} 

function* productSaga() {
    yield takeEvery(GET_PRODUCTS, fetchAllProducts);
}

export default productSaga;