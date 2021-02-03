import countReducers from './Rootreducers'

import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    count:countReducers,
})

export default rootReducers;