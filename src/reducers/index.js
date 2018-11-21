//the root reducers
// meeting place for all of our reducers
import {combineReducers} from 'redux';
import contactReducers from './contactReducers';

export default combineReducers({
    contact: contactReducers
})