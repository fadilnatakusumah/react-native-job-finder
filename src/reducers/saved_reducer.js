import { SAVE_JOB, DUPLICATED_JOB } from "./types";
import _ from 'lodash';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SAVE_JOB:
            return _.unionBy([
                ...state,
                action.payload
            ], 'id')
        case DUPLICATED_JOB:
            return {
                ...state
            }
        default:
            return state;
    }
}