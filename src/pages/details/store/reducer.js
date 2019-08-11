import *  as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    articleDetail: [],
    topicList: [],
    recommendList: [],
    commentsList: [],
    showScroll: false
});

const getArticleDetails = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleDetail: action.articleDetail,
        recommendList: fromJS(action.recommendList)
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