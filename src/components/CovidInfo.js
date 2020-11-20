import React, {useState} from 'react'
import {ButtonGroup, Button, Box, Card, Typography, Link} from '@material-ui/core'
import CovidInfoStyle from '../styles/CovidInfo.style'

import Iframe from 'react-iframe'

const CovidInfo = () => {
    const cls = CovidInfoStyle()


    return (
        <>
        <Box className={cls.mainContainer} component={Card} elevation={0}>
            
        <Iframe 
            url="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
            width="100%"
            height="100%"
            display="initial"
            position="relative"
        />

        </Box>
        </>
    )
}

export default CovidInfo
