import *  as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    articleDetail: [],
    commentsList: {},
    showScroll: false
});

const getArticleDetails = (state, action) => {
    return state.merge({
        articleDetail: action.articleDetail
    })
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS:
            return getArticleDetails(state, action);
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        case actionTypes.CHANGE_COMMENT_LIST:
            return state.set('commentsList', action.commentList);
        default:
            return state;
    }
}