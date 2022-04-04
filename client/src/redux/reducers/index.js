import rootReducer from './rootReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    detail : rootReducer
})

export default reducer;