import { combineReducers } from '@reduxjs/toolkit';

import CountryDetails from './CountryDetailsReducer';

const rootReducer = combineReducers({
    CountryDetails: CountryDetails,
});

export default rootReducer;