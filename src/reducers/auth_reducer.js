import { FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS, FIREBASE_LOGIN_SUCCESS, FIREBASE_LOGIN_FAIL, FIREBASE_REGISTER_SUCCESS, FIREBASE_REGISTER_FAIL, LOGOUT_ACCOUNT } from "./types";

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            };
        case FACEBOOK_LOGIN_FAIL:
            return {
                ...state,
                token: null
            };
        case FIREBASE_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.user.refreshToken
            };
        case FIREBASE_LOGIN_FAIL:
            return {
                ...state,
                token: null,
                errorMessage: action.payload
            };
        case FIREBASE_REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.user.refreshToken
            };
        case FIREBASE_REGISTER_FAIL:
            return {
                ...state,
                token: null,
                errorMessage: action.payload
            };
        case LOGOUT_ACCOUNT:
            return {
                token: null,
                toastMessage: action.payload
            }
        default:
            return state;
    }
}
