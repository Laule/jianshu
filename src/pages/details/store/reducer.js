import *  as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    title: '',
    content: ''
});

const getArticleDetails = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS:
            return getArticleDetails(state, action);
        default:
            return state;
    }
}