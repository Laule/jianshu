import *  as actionTypes from './actionTypes';
import axios from 'axios'

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
});

export const logout = () => ({
    type: actionTypes.LOGOUT,
    value: false
});

export const changePageStatus = (value) => ({
    type: actionTypes.CHANGE_PAGE_STATUS,
    value
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password' + password).then((res) => {
            const result = res.data.success;
            console.log(result);
            if (result) {
                dispatch(changeLogin())
            }
            else {
                alert('登录失败！');
            }
        }).catch(() => {
            alert('登录请求失败！请刷新重试~');
        })
    }
}