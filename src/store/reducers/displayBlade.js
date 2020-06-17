import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialStore = {
    activeBlade: null,
    activeThumbnail:  null
};

const setActiveBlade = (store, action) => {
    let updateBlade = null;
    let updateThumbnail = null;
    
    if (store.activeBlade === null || store.activeBlade.name !== action.bladeInfo.name) {
        updateBlade = updateObject(store.activeBlade, action.bladeInfo);
    } 

    return updateObject(store, {activeBlade: updateBlade, activeThumbnail: action.bladeInfo.thumbnailimages[0]});
};

const setActiveThumbnail = (store, action) => {
    let index = store.activeBlade.thumbnailimages.indexOf(store.activeThumbnail) + 1;
    
    if (index >= store.activeBlade.thumbnailimages.length) {
        index = 0;
    }

    const newThumbnail = store.activeBlade.thumbnailimages[index];

    return updateObject(store, {activeThumbnail: newThumbnail});
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case (actionTypes.SET_ACTIVE_BLADE): return setActiveBlade(store, action);
        case (actionTypes.SET_ACTIVE_THUMBNAIL): return setActiveThumbnail(store, action);
        default: return store;
    }
};

export default reducer;