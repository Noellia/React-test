import constant from 'lodash/constant';

export const SUBMIT_ACTION = 'SUBMIT_ACTION';
export const UPLOAD_HEN_INFO = 'UPLOAD_HEN_INFO';
export const UPLOAD_USER_INFO = 'UPLOAD_USER_INFO';

export const submitAction = (email, password) => ({type: SUBMIT_ACTION, email, password});
export const uploadHenInfo = eggs => ({type: UPLOAD_HEN_INFO, eggs});
export const uploadUserInfo = (name, lastname, age) => ({type: UPLOAD_USER_INFO, name, lastname, age});