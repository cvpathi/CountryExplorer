export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const SET_COUNTRY_DETAILS = 'SET_COUNTRY_DETAILS';

export const getCountryInfo = (countryName: String, isFullName = false) => ({
    type: GET_COUNTRY_DETAILS,
    countryName: countryName,
    isFullName: isFullName,
});

export const setCountryInfo = (data: Object) => ({
    type: SET_COUNTRY_DETAILS,
    data,
});