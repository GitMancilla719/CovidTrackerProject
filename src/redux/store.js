import { createStore, applyMiddleware, combineReducers } from 'redux'
import {SummaryReducer, SpecificReducer} from './reducer/data.reducer'
import thunk from 'redux-thunk'

import { fetchStatistics } from './actions/data.actions'

const rootReducer = combineReducers({ SummaryReducer, SpecificReducer })

const Store = createStore(rootReducer, applyMiddleware(thunk))

Store.dispatch( fetchStatistics() )
window.store = Store

export default Store