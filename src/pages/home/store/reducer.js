import *  as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    writerList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
    page: 1,
    totalPage: 1
});

const changeHomeData = (state, action) => {
    // fromJS普通对象转换为immutable对象
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};
const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage,
        loading:false
    });
};

const changeWriterList=(state,action) =>{
    return state.merge({
        writerList: action.data,
        totalPage: action.totalPage
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        case actionTypes.CHANGE_WRITER_LIST:
            return changeWriterList(state,action);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        case actionTypes.CHANGE_LOADING_STATUS:
            return state.set('loading', true);
        default:
            return state;
    }
}