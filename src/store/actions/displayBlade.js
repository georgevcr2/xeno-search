import * as actionTypes from './actionTypes';

export const setActiveBlade = (bladeInfo) => {
    return {
        type: actionTypes.SET_ACTIVE_BLADE,
        bladeInfo: bladeInfo
    };
};

export const setActiveThumbnail = () => {
    return {
        type: actionTypes.SET_ACTIVE_THUMBNAIL
    };
};