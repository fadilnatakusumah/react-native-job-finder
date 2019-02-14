import { SEARCH_JOB, SAVE_JOB, DUPLICATED_JOB, CLEAR_SAVED_JOBS } from "../reducers/types";
import Axios from "axios";
import _ from 'lodash';

const ENDPOINT_JOBS = 'https://jobs.github.com/positions.json?'

export const searchJob = (desc, region, callback) => async dispatch => {
    const description = desc.replace(/\s/g, '+')
    // let { data } = await Axios.get(`${ENDPOINT_JOBS}description=${description}&lat=${region.latitude}&long=${region.longitude}`)
    let { data } = await Axios.get(`${ENDPOINT_JOBS}description=${description}`)
    // .then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })
    dispatch({
        type: SEARCH_JOB,
        payload: data
    })
    callback();
}


export const saveJob = (item, callback) => {
    return (dispatch, getState) => {
        const savedJobs = getState().savedJobs;
        if (savedJobs.length > 0) {
            _.find(savedJobs, (job) => {
                if (job.id === item.id) {
                    dispatch({
                        type: DUPLICATED_JOB,
                    });
                    callback('You already save this job');
                } else {
                    dispatch({
                        type: SAVE_JOB,
                        payload: item
                    });
                    return callback('Job is saved');
                }
            })
        } else {
            dispatch({
                type: SAVE_JOB,
                payload: item
            });
            callback('Job is saved');
        }
    }
}

export const clearSavedJobs = () => dispatch => {
    dispatch({
        type: CLEAR_SAVED_JOBS
    })
    alert('success');
}
