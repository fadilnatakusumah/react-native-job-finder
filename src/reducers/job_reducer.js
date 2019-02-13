import { SEARCH_JOB } from "./types";

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_JOB:
            return {
                ...state,
                jobs: action.payload
            }
            // case SAVED_JOBS:
            // return
        default:
            return state;
    }
}