import portfolioApi from "../../api/portfolioApi";
import actionTypes from "./actionTypes";

const getApi = (key) => {
  return portfolioApi.get(`api/${key}`);
};

export function getUserInfo() {
  return (dispatch) => {
    getApi("getUserDetails").then((res) =>
      dispatch({
        type: actionTypes.RECIEVE_USER_INFO,
        data: res.data,
      })
    );
  };
}

export function getBlogs() {
  return (dispatch) => {
    getApi("getBlogs").then((res) =>
      dispatch({ type: actionTypes.SET_BLOGS, data: res.data })
    );
  };
}

export function setTheme(theme) {
  return (dispatch) => dispatch({ type: actionTypes.SET_THEME, theme });
}
