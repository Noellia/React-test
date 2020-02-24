
import {combineReducers} from 'redux';
import staticData from './staticData';
import farmData from './farmData';
import usersData from './usersData'; 

export default combineReducers({
    staticData,
    farmData,
    usersData
});
