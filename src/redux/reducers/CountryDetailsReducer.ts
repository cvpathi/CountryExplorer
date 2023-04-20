import {
    GET_COUNTRY_DETAILS,
    SET_COUNTRY_DETAILS,
    ADD_TO_FAVOURITES,
} from 'redux/actions/CountryDetailsActions';

const initialState = {
    favourites: [],
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

        case ADD_TO_FAVOURITES: {
            return Object.assign({}, state, {
                favourites: [...state.favourites, action.favourite],
                loading: false,
            });
        }

        default: {
            return Object.assign({}, state);
        }

    }
};
export default CountryDetails;