import axios from 'axios';

const RECIEVE_USER_INFO = 'RECIEVE_USER_INFO';

const SET_THEME = "SET_THEME";

const SET_BLOGS = 'SET_BLOGS';

export default () => {
    return dispatch => {
        axios.get('/api/getUserDetails').then(res => dispatch({ type: RECIEVE_USER_INFO, payload: res.data?.detail }));
    }
}

export function getblogs(){
    return dispatch=> {
        axios.get('/api/getBlogs').then(res => dispatch({type: SET_BLOGS, blogs: res.data}))
    }
}
export function setTheme(theme) {
    return dispatch => dispatch({ type: SET_THEME, theme })
} 