import *  as actionTypes from './actionTypes';
import axios from 'axios'

const changeDetails = (result) => ({
    type: actionTypes.GET_DETAILS,
    articleDetail: result
});

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
});


export const getDetails = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetails(result))
        }).catch(()=>{
            alert('请求失败，请刷新重试！');
        })
    }
}