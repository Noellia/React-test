import {
    UPLOAD_USER_INFO
} from '@actions';

export default function usersData(
    state = {}, action
) {
    switch (action.type) {
        case UPLOAD_USER_INFO:
            return {
                ...state,
                name: action.name,
                lastname: action.lastname,
                age: action.age
            };
        default:
            return state;
    }
}
