import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialStore = {
    activeBlade: null
};

const setCurrentBlade = (store, action) => {
    const updateProps = {activeBlade: store.activeBlade === action.bladeName ? null : action.bladeName };
    return updateObject(store, updateProps);
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case (actionTypes.SET_CURRENT_BLADE): return setCurrentBlade(store, action);
        default: return store;
    }
};

export default reducer;