import * as actionTypes from './actionTypes';

export const setCurrentBlade = (bladeName) => {
    return {
        type: actionTypes.SET_CURRENT_BLADE,
        bladeName: bladeName
    };
};