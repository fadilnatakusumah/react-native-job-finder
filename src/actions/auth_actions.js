import { Facebook } from 'expo';
import * as firebase from 'firebase';
import { AsyncStorage } from "react-native";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL, FIREBASE_LOGIN_SUCCESS, FIREBASE_LOGIN_FAIL, FIREBASE_REGISTER_SUCCESS, FIREBASE_REGISTER_FAIL } from '../reducers/types';


const APP_ID = '350804358856723' // you can your app id from fb devs here, or you can use mine

export const onFacebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
            payload: token
        })
    } else {
        doFacebookLogin(dispatch);
    }
}

const doFacebookLogin = async (dispatch) => {
    console.log('Do the login via facebook');
    let result = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
        permissions: ['public_profile']
    }).catch(err => { console.log(err) });

    if (result.type === 'cancel') {
        console.log('Facebook auth cancelled');
        return dispatch({
            type: FACEBOOK_LOGIN_FAIL
        });
    }
    AsyncStorage.setItem('token', result.token);
    dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: result.token
    })
    console.log('success login via facebook');
}

export const onFirebaseLogin = (email, password) => {
    return async (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                AsyncStorage.setItem('token', user.user.refreshToken);
                dispatch({
                    type: FIREBASE_LOGIN_SUCCESS,
                    payload: user
                })
            })
            .catch(err => {
                dispatch({
                    type: FIREBASE_LOGIN_FAIL,
                    payload: err.message
                })
                // console.error(err);
            })
    }
}

export const onFirebaseRegister = (email, password) => {
    return async dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                AsyncStorage.setItem('token', user.user.refreshToken);
                dispatch({
                    type: FIREBASE_REGISTER_SUCCESS,
                    payload: user
                })
            })
            .catch(err => {
                dispatch({
                    type: FIREBASE_REGISTER_FAIL,
                    payload: err.message
                })
                // console.error(err);
            })
    }
}