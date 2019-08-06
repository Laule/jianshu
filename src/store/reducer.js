import {combineReducers} from 'redux-immutable';
import {reducer as headReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailsReducer} from '../pages/details/store';
import {reducer as loginReducer} from '../pages/login/store';

const reducer = combineReducers({
    header: headReducer,
    home: homeReducer,
    details: detailsReducer,
    login: loginReducer
});

export default reducer;