import { FETCH_ALL_DATA, FETCH_SPECIFIC_DATA } from '../types'

const initialStateSummary = []
const initialStateSpecific = []
  
export const SummaryReducer = (state = initialStateSummary, action) => {
    switch (action.type){
        case FETCH_ALL_DATA: 
            return action.payload   
        default: 
            return state
    }
}
export default SummaryReducer

export const SpecificReducer = (state = initialStateSpecific, action) => {
    switch (action.type){
        case FETCH_SPECIFIC_DATA: 
            return action.payload    
        default: 
            return state
    }
}



