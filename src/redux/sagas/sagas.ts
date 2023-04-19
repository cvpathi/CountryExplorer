import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
    GET_COUNTRY_DETAILS,
    setCountryInfo,
} from 'redux/actions/CountryDetailsActions';
import { countrySearch } from 'api/apiUrls';
import api from 'api/apiService';

/////////////////////////////////////Home///////////////////////////////////
type InputParams = {
    isFullName: boolean;
    countryName: String;
    type: String;
};

function* getCountryInfo(params: InputParams): Generator<any> {
    const fullName = params.isFullName ? '?fullText=true' : '';
    try {
        let info: any = yield call(() => {
            return api(
                `${countrySearch.url}/${params.countryName}${fullName}`,
                countrySearch.method,
            );
        });
        yield put(setCountryInfo(info?.data));
    } catch (err) {
        yield put(setCountryInfo([]));
        console.log(err);
    }
}

function* watcherSaga() {
    yield takeLatest(GET_COUNTRY_DETAILS, getCountryInfo);
}

function* rootSaga() {
    yield all([watcherSaga()]);
}
export default rootSaga;