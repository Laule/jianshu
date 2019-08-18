import *  as actionTypes from './actionTypes';
import axios from 'axios'
import {fromJS} from 'immutable';

// ({}) 返回对象 {} 返回函数
const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
});

const changeWriterList = (list) => ({
    type: actionTypes.CHANGE_WRITER_LIST,
    data: fromJS(list),
    totalPage: Math.ceil(list.length / 10)
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch(()=>{
            alert('数据获取失败，请刷新重试~');
        })
    }
};
export const getWriterInfo = () => {
    return (dispatch) => {
        axios.get('/api/writer.json').then((res) => {
            const result = res.data.users;
            dispatch(changeWriterList(result));
        }).catch(()=>{
            alert('作者信息获取失败，请刷新重试~');
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        dispatch(changeLoadingStatus());
        setTimeout(function () {
            axios.get('/api/homeList.json?page=' + page).then((res) => {
                const result = res.data.data;
                dispatch(addHomeList(result, page + 1));
            });
        },1500);
    }
};

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});

 const changeLoadingStatus = () => ({
    type: actionTypes.CHANGE_LOADING_STATUS
});

