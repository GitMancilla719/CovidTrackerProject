import React, {useState, useEffect} from 'react'
import {Box, Typography, Card, Select  } from '@material-ui/core'
import OverviewStyle from '../styles/Overview.style'
import { useSelector, useDispatch } from 'react-redux'
import CountUp from 'react-countup'
import ReactMapboxGl, { Popup } from 'react-mapbox-gl'
import { fetchSpecificStats } from '../redux/actions/data.actions'
import DetailedData from './DetailedData'




const Overview = () => {
    const [selection, setSelection] = useState('')
    const [display, setDisplay] = useState()

    const dispatch = useDispatch()
    const globalData = useSelector(state => state.SummaryReducer.Global)
    const countryData = useSelector(state => state.SummaryReducer.Countries)

    const SpecificCountryData = useSelector(state => state.SpecificReducer[state.SpecificReducer.length-1])
    const specificDataLat = SpecificCountryData? SpecificCountryData.Lat : 14
    const specificDataLon = SpecificCountryData? SpecificCountryData.Lon : 121
    const countryFlag = SpecificCountryData? SpecificCountryData.CountryCode : 121
    const specificCountryStats = countryData? countryData.find(selected => selected.Slug === selection) : 'wala'

    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX_KEY,
    })

    useEffect(() => {
        
        if(globalData){
            setDisplay(globalData)
        }
        if(selection){
            dispatch( fetchSpecificStats(selection) ) //fix blinking
            
        }

    },[globalData, selection]) //globalData, selection

    //sets the selected country into state
    const setterFunction = (e) => {
        setSelection(e.target.value)
    }

    const cls = OverviewStyle()

    return (
        <Box className={cls.containerMain}>
            <Box component={Card} className={cls.container}>
            
                {/* Global Stat display */}
                <Typography className={cls.GlobalStats}>Global Statistics</Typography>
                {
                    display && 
                    <Box className={cls.cardContainer}>
                        <Box className={cls.Cards}>
                            <Typography className={cls.subText}>Total Cases</Typography>
                            <Typography className={cls.total}>
                                <CountUp start={0} end={globalData.TotalConfirmed} duration={1} separator=','/>
                            </Typography>
                            <Typography className={cls.subText}>{globalData.NewConfirmed.toLocaleString()} New Cases</Typography>
                        </Box>
                        <Box className={cls.Cards}>
                            <Typography className={cls.subText}>Total Deaths</Typography>
                            <Typography className={cls.total}>
                                <CountUp start={0} end={globalData.TotalDeaths} duration={1} separator=','/>
                            </Typography>
                            <Typography className={cls.subText}>{globalData.NewDeaths.toLocaleString()} New Deaths</Typography>
                        </Box>
                        <Box className={cls.Cards}>
                            <Typography className={cls.subText}>Total Recoveries</Typography>
                            <Typography className={cls.total}>
                                <CountUp start={0} end={globalData.TotalRecovered} duration={1} separator=','/>
                            </Typography>
                            <Typography className={cls.subText}>{globalData.NewRecovered.toLocaleString()} New Recoveries</Typography>
                        </Box>
                    </Box>
                }

                {/* country selection */}
                <Box className={cls.selection}>
                    <Select native value={selection.SelectedCountry} onChange={ setterFunction }>
                        <option value=''>Select a Country</option>
                    {
                        countryData && 
                        countryData.map( (slug, index) => <option key={index} value={slug.Slug}>{slug.Country}</option>)
                    }
                    </Select>
                </Box>

                {/* map */}
                <Map
                    style="mapbox://styles/akosiemem19/ckg9k2scx14cy19mx7h24bzu2"
                    zoom={[3]}
                    center={[specificDataLon,specificDataLat]}
                    movingMethod = 'jumpTo'
                    containerStyle={{
                        height: '40em',
                        width: '100%'
                    }}
                >

                    {selection?
                        <Popup style={{zIndex : '15'}} coordinates={[specificDataLon,specificDataLat]}>

                            <Box className={cls.upperPopup}>
                                <img className={cls.flag} src={`https://www.countryflags.io/${countryFlag}/flat/24.png`} alt="flag"/>
                                <Typography className={cls.countryName}>{specificCountryStats.Country}</Typography>
                            </Box>
                            
                            <Box className={cls.popupStats}>
                                <Typography>Total Cases : <CountUp className={cls.totalForCountry} start={0} end={specificCountryStats.TotalConfirmed} duration={1} separator=','/></Typography>
                                <Typography className={cls.subText} variant='body2'>{specificCountryStats.NewConfirmed.toLocaleString()} new cases</Typography>
                            </Box>
                            <Box className={cls.popupStats}>
                                <Typography className={cls.totalForCountry}>Total Deaths : <CountUp start={0} end={specificCountryStats.TotalDeaths} duration={1} separator=','/></Typography>
                                <Typography className={cls.subText} variant='body2'>{specificCountryStats.NewDeaths.toLocaleString()} new deaths</Typography>
                            </Box>
                            <Box className={cls.popupStats}>
                                <Typography className={cls.totalForCountry}>Total Recoveries : <CountUp start={0} end={specificCountryStats.TotalRecovered} duration={1} separator=','/></Typography>
                                <Typography className={cls.subText} variant='body2'>{specificCountryStats.NewRecovered.toLocaleString()} new recoveries</Typography>
                            </Box>

                        </Popup>
                        :null
                    }
                </Map>

            </Box>
                
        </Box>
    )
}

export default Overview

