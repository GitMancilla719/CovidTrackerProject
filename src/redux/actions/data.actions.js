import { FETCH_ALL_DATA, FETCH_SPECIFIC_DATA } from '../types'
import axios from 'axios'


const apiUrl = 'https://api.covid19api.com/summary'

//[async] action
export const fetchStatistics = () => {
    return (dispatch) => {
            return axios.get(apiUrl)
            .then(res => {
                dispatch( fetchStatisticsSuccess(res.data) )
            })
            .catch(error => {
                throw (error);
        })
    }
}

export const fetchSpecificStats = (search) => {
    const apiUrl = `https://api.covid19api.com/country/${search}?from=2020-03-01T00:00:00Z`
    if(search){
        return (dispatch) => {
            return axios.get(apiUrl)
            .then(res => {
                dispatch( fetchSpecificStatsSuccess(res.data) )
            })
            .catch(error => {
                throw (error);
            })
        }
    }
}

export default fetchStatistics

//[sync] action creator : functions that create and return actions.
export const fetchStatisticsSuccess = (data) => {
    return {
        type : FETCH_ALL_DATA,
        payload : data
    }
}

export const fetchSpecificStatsSuccess = (data) => {
    return {
        type : FETCH_SPECIFIC_DATA,
        payload : data
    }
}















