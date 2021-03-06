import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

// immutable 对象
const defaultState = fromJS({
    login: false,
    is_sign: true
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login', action.value);
        case actionTypes.LOGOUT:
            return state.set('login', action.value);
        case actionTypes.CHANGE_PAGE_STATUS:
            return state.set('is_sign', action.value);
        default:
            return state;
    }
}