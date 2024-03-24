import actionTypes from "../actions/actionTypes";
const initialState = { theme: "pink" };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECIEVE_USER_INFO:
      return {
        ...state,
        ...action.data?.userInfo,
      };
    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case actionTypes.SET_BLOGS:
      return {
        ...state,
        blogs: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
