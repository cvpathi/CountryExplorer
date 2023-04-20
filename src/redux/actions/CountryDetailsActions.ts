export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const SET_COUNTRY_DETAILS = 'SET_COUNTRY_DETAILS';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

export const getCountryInfo = (countryName: String, isFullName = false) => ({
    type: GET_COUNTRY_DETAILS,
    countryName: countryName,
    isFullName: isFullName,
});

export const setCountryInfo = (data: Object) => ({
    type: SET_COUNTRY_DETAILS,
    data,
});

export const addToFavourites = (favourite: String) => ({
    type: ADD_TO_FAVOURITES,
    favourite: favourite,
});