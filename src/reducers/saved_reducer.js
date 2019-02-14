import { SAVE_JOB, DUPLICATED_JOB, CLEAR_SAVED_JOBS } from "./types";
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
            return state;
        case CLEAR_SAVED_JOBS:
            return []
        default:
            return state;
    }
}