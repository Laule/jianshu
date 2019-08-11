import *  as actionTypes from './actionTypes';
import axios from 'axios'

const changeDetails = (result) => ({
    type: actionTypes.GET_DETAILS,
    topicList: result.topicList,
    articleDetail: result.article,
    recommendList: result.recommendList
});



export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
});

export const changeCommentList = (result) => ({
    type: actionTypes.CHANGE_COMMENT_LIST,
    commentList: result
});


export const getDetails = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetails(result));
        }).catch(() => {
            alert('文章获取失败，请刷新重试！');
        })
    }
};

export const getComment = (id) => {
    return (dispatch) => {
        axios.get('/api/commentsList.json?id=' + id).then((res) => {
            const result = res.data;
            dispatch(changeCommentList(result));
        }).catch(() => {
            alert('文章评论获取失败，请刷新重试！');
        })
    }
}