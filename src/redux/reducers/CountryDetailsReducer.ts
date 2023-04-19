import {
    GET_COUNTRY_DETAILS,
    SET_COUNTRY_DETAILS,
} from 'redux/actions/CountryDetailsActions';

const initialState = {
    favourite: [],
};

const CountryDetails = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_COUNTRY_DETAILS: {
            return Object.assign({}, state, {
                countryDetails: undefined,
                loading: true,
            });
        }
        case SET_COUNTRY_DETAILS: {
            return Object.assign({}, state, {
                countryDetails: action.data,
                loading: false,
            });
        }

        default: {
            return Object.assign({}, state);
        }

    }
};
export default CountryDetails;