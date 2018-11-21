import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from '../reducers/app'
import bookReducer from '../reducers/book'

const reducers = combineReducers({
    app:appReducer,
    bibles:bookReducer,
})

const middeware = applyMiddleware(logger, thunk)

export default createStore(reducers, middeware)