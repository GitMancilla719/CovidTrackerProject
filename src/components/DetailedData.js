import React, {
    useEffect,
    useState
} from 'react'
import { useSelector } from 'react-redux'
import {ButtonGroup, Button, Box, Card, Typography} from '@material-ui/core'
import {Line} from 'react-chartjs-2'
import DDStyle from '../styles/DetailedData.style'

import activeImage from '../assets/active.png'
import confirmedImage from '../assets/confirmed.png'
import deathsImage from '../assets/deaths.png'
import recoveredImage from '../assets/recovered.png'

const DetailedData = () => {
    const cls = DDStyle()
    const SpecificCountryData = useSelector(state => state.SpecificReducer)

    const CountryName = SpecificCountryData[SpecificCountryData.length-1]? SpecificCountryData[SpecificCountryData.length-1].Country : 'Unknown'

    const Confirmed = SpecificCountryData[SpecificCountryData.length-1]? SpecificCountryData[SpecificCountryData.length-1].Confirmed : 0
    const Deaths = SpecificCountryData[SpecificCountryData.length-1]? SpecificCountryData[SpecificCountryData.length-1].Deaths : 0
    const Recovered = SpecificCountryData[SpecificCountryData.length-1]? SpecificCountryData[SpecificCountryData.length-1].Recovered : 0
    const Active = SpecificCountryData[SpecificCountryData.length-1]? SpecificCountryData[SpecificCountryData.length-1].Active : 0
    
    const ActivePercentage = (Active / Confirmed) * 100
    const DeathsPercentage = (Deaths / Confirmed) * 100
    const RecoveredPercentage = (Recovered / Confirmed) * 100

    const [records, setRecords] = useState(0)

    const confirmedData = {
        labels: SpecificCountryData.map( objDate => new Date(objDate.Date).toDateString().substring(3) ).slice(records, SpecificCountryData.length),
        datasets: [
            {
                label: 'Confirmed',
                fill: false,
                lineTension: 0,
                backgroundColor: '#3C467D',
                borderColor: '#3C467D',
                pointBorderColor: '#3C467D',
                pointBackgroundColor: '#3C467D',
                pointBorderWidth: 0,
                pointHoverRadius: 3,
                pointHoverBorderWidth: 2,
                pointRadius: 0.5,
                pointHitRadius: 5,
                data: SpecificCountryData.map( obj => obj.Confirmed ).slice(records, SpecificCountryData.length)
            },
            {
                label: 'Deaths',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'red',
                borderColor: 'red',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red',
                pointBorderWidth: 0,
                pointHoverRadius: 3,
                pointHoverBorderWidth: 2,
                pointRadius: 0.5,
                pointHitRadius: 5,
                data: SpecificCountryData.map( obj => obj.Deaths ).slice(records, SpecificCountryData.length)
            },
            {
                label: 'Recoveries',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'green',
                borderColor: 'green',
                pointBorderColor: 'green',
                pointBackgroundColor: 'green',
                pointBorderWidth: 0,
                pointHoverRadius: 3,
                pointHoverBorderWidth: 2,
                pointRadius: 0.5,
                pointHitRadius: 5,
                data: SpecificCountryData.map( obj => obj.Recovered ).slice(records, SpecificCountryData.length)
            },
            {
                label: 'Active',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'orange',
                borderColor: 'orange',
                pointBorderColor: 'orange',
                pointBackgroundColor: 'orange',
                pointBorderWidth: 0,
                pointHoverRadius: 3,
                pointHoverBorderWidth: 2,
                pointRadius: 0.5,
                pointHitRadius: 5,
                data: SpecificCountryData.map( obj => obj.Active ).slice(records, SpecificCountryData.length)
            },
            
        ]
    }

    return (
        <>
            {
                CountryName !== 'Unknown'?
                <Box className={cls.container}>
                    <Box className={cls.cardContainer}>
                    <Box className={cls.cardBoxMain} component={Card} elevation={2}>
                        <Box display='flex' flexDirection='column'>
                            <Typography className={cls.cardBoxTextSmall}>Out of <b>{CountryName}'s</b></Typography>
                            <Typography className={cls.cardBoxTextHightlight}>{Confirmed.toLocaleString()}</Typography>
                            <Typography className={cls.cardBoxTextSmall}>confirmed cases</Typography>
                        </Box>
                        <img src={confirmedImage} alt="confirme" width='auto' height='70em'/>
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <Box className={cls.cardBoxPercentage} component={Card} elevation={2}>
                            <Box display='flex' flexDirection='column'>
                                <Typography className={cls.cardBoxTextHightlight}>{ActivePercentage.toFixed(2)}%</Typography>
                                <Typography className={cls.cardBoxTextSmall}>Active cases</Typography>
                            </Box>
                            <img src={activeImage} alt="confirme" width='auto' height='70em'/>
                        </Box>
                        <Box className={cls.cardBoxPercentage} component={Card} elevation={2}>
                            <Box display='flex' flexDirection='column'>
                                <Typography className={cls.cardBoxTextHightlight}>{DeathsPercentage.toFixed(2)}%</Typography>
                                <Typography className={cls.cardBoxTextSmall}>Fatality Rate</Typography>
                            </Box>
                            <img src={deathsImage} alt="confirme" width='auto' height='70em'/>
                        </Box>
                        <Box className={cls.cardBoxPercentage} component={Card} elevation={2}>
                            <Box display='flex' flexDirection='column'>
                                <Typography className={cls.cardBoxTextHightlight}>{RecoveredPercentage.toFixed(2)}%</Typography>
                                <Typography className={cls.cardBoxTextSmall}>Recovery Rate</Typography>
                            </Box>
                            <img src={recoveredImage} alt="confirme" width='auto' height='70em'/>
                        </Box>
                    </Box>
                </Box>

                <Box className={cls.graphContainer} >
                    <ButtonGroup style={{display : 'flex', justifyContent : 'center'}}>
                        <Button onClick={()=>setRecords(0)}>All Records</Button>
                        <Button onClick={()=>setRecords(-90)}>Last 90 days</Button>
                        <Button onClick={()=>setRecords(-30)}>Last 30 days</Button>
                        <Button onClick={()=>setRecords(-15)}>Last 15 days</Button>
                    </ButtonGroup>
                    <Line data={confirmedData} className={cls.LineGraph}/>
                </Box>
            </Box>
            :null
            }
        </>
    )
}

export default DetailedData
