import { SEARCH_JOB } from "../reducers/types";
import Axios from "axios";

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
