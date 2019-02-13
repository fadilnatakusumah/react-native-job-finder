import { combineReducers } from 'redux';

// import reducers
import auth from '../reducers/auth_reducer';
import jobs from '../reducers/job_reducer';
import savedJobs from '../reducers/saved_reducer';

export default rootReducer = combineReducers({
    auth,
    jobs,
    savedJobs
})
