import *  as actionTypes from './actionTypes';
import axios from 'axios'

const changeDetails = (title, content) => ({
    type: actionTypes.GET_DETAILS,
    title,
    content
});

export const getDetails = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetails(result.title, result.content))
        }).catch(()=>{
            alert('请求失败，请刷新重试！');
        })
    }
}